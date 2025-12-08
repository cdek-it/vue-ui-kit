#!/bin/bash

# Final Production Script v3 - Fixed code extraction
set -e

# Colors
readonly GREEN='\033[0;32m'
readonly BLUE='\033[0;34m'
readonly YELLOW='\033[1;33m'
readonly RED='\033[0;31m'
readonly CYAN='\033[0;36m'
readonly MAGENTA='\033[0;35m'
readonly NC='\033[0m'

STORIES_DIR="/Users/d.khaliulin/Desktop/vue-ui-kit/src/plugins/prime/stories/PRIMEUIX"
DOCS_DIR="/Users/d.khaliulin/Desktop/vue-ui-kit/src/primefaces-llm/components"
COMPONENT_NAME="${1}"

if [ -z "$COMPONENT_NAME" ]; then
    echo -e "${RED}Usage: $0 <ComponentName>${NC}"
    echo -e "${YELLOW}Example: $0 Button${NC}"
    exit 1
fi

component_dir="$STORIES_DIR/$COMPONENT_NAME"
doc_file="$DOCS_DIR/$(echo "$COMPONENT_NAME" | tr '[:upper:]' '[:lower:]').md"

echo -e "${CYAN}╔════════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║    Component Reorganization v3 (Fixed)            ║${NC}"
echo -e "${CYAN}╚════════════════════════════════════════════════════╝${NC}\n"

if [ ! -d "$component_dir" ]; then
    echo -e "${RED}✗ Component directory not found: $component_dir${NC}"
    exit 1
fi

if [ ! -f "$doc_file" ]; then
    echo -e "${RED}✗ Documentation not found: $doc_file${NC}"
    exit 1
fi

echo -e "${BLUE}Component: ${CYAN}$COMPONENT_NAME${NC}"
echo -e "${BLUE}Directory: ${NC}$component_dir"
echo -e "${BLUE}Documentation: ${NC}$doc_file\n"

# Create backup
backup_dir="${component_dir}_backup_$(date +%Y%m%d_%H%M%S)"
echo -e "${YELLOW}→ Creating backup: $backup_dir${NC}"
cp -r "$component_dir" "$backup_dir"

# Move old files
old_mdx="$component_dir/${COMPONENT_NAME}.stories.mdx"
old_template="$component_dir/${COMPONENT_NAME}.template.js"

if [ -f "$old_mdx" ]; then
    echo -e "${YELLOW}→ Moving old .mdx to .old${NC}"
    mv "$old_mdx" "${old_mdx}.old"
fi

if [ -f "$old_template" ]; then
    echo -e "${YELLOW}→ Moving old .template.js to .old${NC}"
    mv "$old_template" "${old_template}.old"
fi

# Create stories subdirectory
stories_subdir="$component_dir/stories"
mkdir -p "$stories_subdir"

echo -e "\n${BLUE}Extracting sections...${NC}\n"

# Extract sections using awk for better parsing
sections=()
while IFS= read -r line; do
    if [[ "$line" =~ ^##[[:space:]](.+)$ ]]; then
        section_title="${BASH_REMATCH[1]}"
        clean_name=$(echo "$section_title" | sed 's/[^a-zA-Z0-9]//g')

        # Skip technical sections
        if [[ ! "$clean_name" =~ ^(Props|Emits|Templates|PassThroughOptions|PassThrough|Theming|CSSClasses|DesignTokens|Style|styledoc|Accessibility|AccessibilityDoc)$ ]]; then
            if [ "$clean_name" != "$COMPONENT_NAME" ]; then
                sections+=("$section_title")
                echo -e "  ${GREEN}✓${NC} $section_title"
            fi
        fi
    fi
done < "$doc_file"

echo -e "\n${BLUE}Creating story files...${NC}\n"

story_count=0

for section_title in "${sections[@]}"; do
    clean_name=$(echo "$section_title" | sed 's/[^a-zA-Z0-9]//g')
    story_file="$stories_subdir/${COMPONENT_NAME}.${clean_name}.stories.js"

    # Extract description (text before first code block)
    description=$(awk -v section="$section_title" '
        BEGIN { in_section=0; found_code=0 }
        /^## / {
            if ($0 ~ section) {
                in_section=1
                next
            } else if (in_section) {
                exit
            }
        }
        in_section && /^```/ {
            found_code=1
            exit
        }
        in_section && !found_code && NF>0 {
            print
        }
    ' "$doc_file")

    # Extract FIRST HTML code block (not TypeScript)
    code_example=$(awk -v section="$section_title" '
        BEGIN { in_section=0; in_code=0; in_details=0; found_html=0 }
        /^<details>/ { in_details=1; next }
        /^<\/details>/ { in_details=0; next }
        in_details { next }
        /^## / {
            if ($0 ~ section) {
                in_section=1
                next
            } else if (in_section) {
                exit
            }
        }
        in_section && /^```html/ {
            in_code=1
            found_html=1
            next
        }
        in_section && /^```typescript/ {
            in_code=1
            found_html=0
            next
        }
        in_section && in_code && /^```/ {
            if (found_html) {
                exit
            }
            in_code=0
            next
        }
        in_section && in_code && found_html {
            print
        }
    ' "$doc_file")

    # Convert Angular to Vue
    if [ -n "$code_example" ]; then
        code_example=$(echo "$code_example" | \
            sed 's/<p-button/<Button/g' | \
            sed 's/<\/p-button>/<\/Button>/g' | \
            sed 's/<p-buttongroup/<ButtonGroup/g' | \
            sed 's/<\/p-buttongroup>/<\/ButtonGroup>/g' | \
            sed 's/\[disabled\]="true"/disabled/g' | \
            sed 's/\[outlined\]="true"/:outlined="true"/g' | \
            sed 's/\[rounded\]="true"/:rounded="true"/g' | \
            sed 's/\[text\]="true"/:text="true"/g' | \
            sed 's/\[raised\]="true"/:raised="true"/g' | \
            sed 's/\[loading\]="true"/:loading="true"/g' | \
            sed 's/(onClick)="/@click="/g' | \
            sed 's/(onFocus)="/@focus="/g' | \
            sed 's/(onBlur)="/@blur="/g')

        # Indent code
        code_example=$(echo "$code_example" | sed 's/^/      /')
    else
        code_example="      <!-- TODO: Add component example -->"
    fi

    # Create story file
    cat > "$story_file" << EOF
export default {
  title: 'PRIMEUIX/${COMPONENT_NAME}/${clean_name}',
  parameters: {
    docs: {
      description: {
        component: \`${description}\`.trim()
      }
    }
  }
};

export const Default = () => ({
  template: \`
    <div class="card flex flex-wrap justify-center gap-3 p-4">
${code_example}
    </div>
  \`
});
EOF

    story_count=$((story_count + 1))
    echo -e "  ${GREEN}✓${NC} Created ${clean_name}.stories.js"
done

# Create Overview
overview_file="$component_dir/${COMPONENT_NAME}.Overview.stories.mdx"
component_desc=$(head -n 5 "$doc_file" | tail -n +3)

sections_list=""
for section_title in "${sections[@]}"; do
    sections_list="${sections_list}- **${section_title}**
"
done

cat > "$overview_file" << EOF
import { Meta } from '@storybook/addon-docs';

<Meta title="PRIMEUIX/${COMPONENT_NAME}/Overview" />

# ${COMPONENT_NAME}

${component_desc}

[PrimeVue Documentation](https://primevue.org/$(echo "$COMPONENT_NAME" | tr '[:upper:]' '[:lower:]')/)

---

## Available Examples

Use the Storybook sidebar to browse through different usage examples of the ${COMPONENT_NAME} component.

## Sections

${sections_list}
---

**Total examples: ${story_count}**
EOF

echo -e "\n${GREEN}✓ Created Overview file${NC}"

echo -e "\n${CYAN}╔════════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║               Reorganization Complete              ║${NC}"
echo -e "${CYAN}╚════════════════════════════════════════════════════╝${NC}\n"
echo -e "${GREEN}✓ Created ${story_count} story files${NC}"
echo -e "${GREEN}✓ Created 1 overview file${NC}"
echo -e "${YELLOW}→ Old files moved to .old${NC}"
echo -e "${BLUE}→ Backup: $backup_dir${NC}\n"
