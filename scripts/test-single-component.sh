#!/bin/bash

# Test script for single component
set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m'

COMPONENT_NAME="${1:-Button}"
STORIES_DIR="/Users/d.khaliulin/Desktop/vue-ui-kit/src/plugins/prime/stories/PRIMEUIX"
DOCS_DIR="/Users/d.khaliulin/Desktop/vue-ui-kit/src/primefaces-llm/components"

echo -e "${CYAN}Testing reorganization for: ${COMPONENT_NAME}${NC}\n"

component_dir="$STORIES_DIR/$COMPONENT_NAME"
doc_file="$DOCS_DIR/$(echo "$COMPONENT_NAME" | tr '[:upper:]' '[:lower:]').md"

if [ ! -d "$component_dir" ]; then
    echo -e "${RED}Component directory not found: $component_dir${NC}"
    exit 1
fi

if [ ! -f "$doc_file" ]; then
    echo -e "${RED}Documentation not found: $doc_file${NC}"
    exit 1
fi

echo -e "${BLUE}Component directory: $component_dir${NC}"
echo -e "${BLUE}Documentation file: $doc_file${NC}\n"

# Create backup
backup_dir="${component_dir}_backup_$(date +%Y%m%d_%H%M%S)"
echo -e "${YELLOW}Creating backup: $backup_dir${NC}"
cp -r "$component_dir" "$backup_dir"

# Create stories subdirectory
stories_subdir="$component_dir/stories"
mkdir -p "$stories_subdir"

echo -e "${BLUE}Extracting sections from documentation...${NC}\n"

# Function to clean section name
clean_section_name() {
    echo "$1" | sed 's/[^a-zA-Z0-9]//g'
}

# Parse documentation
sections=()
while IFS= read -r line; do
    if [[ "$line" =~ ^##[[:space:]](.+)$ ]]; then
        section_title="${BASH_REMATCH[1]}"
        clean_name=$(clean_section_name "$section_title")

        # Skip technical sections
        if [[ ! "$clean_name" =~ ^(Props|Emits|Templates|PassThroughOptions|Theming|CSSClasses|DesignTokens|Style|styledoc|Accessibility|PassThrough|Button)$ ]]; then
            sections+=("$section_title")
            echo -e "  ${GREEN}✓ Found section: $section_title${NC}"
        fi
    fi
done < "$doc_file"

echo -e "\n${BLUE}Creating story files...${NC}\n"

# Create story files
for section_title in "${sections[@]}"; do
    clean_name=$(clean_section_name "$section_title")
    story_file="$stories_subdir/${COMPONENT_NAME}.${clean_name}.stories.js"

    # Extract section content
    section_desc=""
    code_example=""
    in_section=false
    in_code_block=false
    code_block_lang=""

    while IFS= read -r line; do
        if [[ "$line" =~ ^##[[:space:]]${section_title}$ ]]; then
            in_section=true
            continue
        fi

        if [ "$in_section" = true ]; then
            # Stop at next section
            if [[ "$line" =~ ^##[[:space:]] ]] && [[ ! "$line" =~ ^##[[:space:]]${section_title}$ ]]; then
                break
            fi

            # Handle code blocks
            if [[ "$line" =~ ^\`\`\`(.*)$ ]]; then
                if [ "$in_code_block" = false ]; then
                    in_code_block=true
                    code_block_lang="${BASH_REMATCH[1]}"
                else
                    in_code_block=false
                    # Only save HTML/Vue code blocks
                    if [[ "$code_block_lang" =~ ^(html|vue|xml)?$ ]] && [ -z "$code_example" ]; then
                        # Keep the code_example we just built
                        :
                    else
                        # Not HTML, skip this code block
                        if [[ ! "$code_block_lang" =~ ^(html|vue|xml)?$ ]]; then
                            code_example=""
                        fi
                    fi
                fi
                continue
            fi

            if [ "$in_code_block" = true ]; then
                # Accumulate code
                if [ -n "$code_example" ]; then
                    code_example="$code_example
$line"
                else
                    code_example="$line"
                fi
            else
                # Accumulate description (only before code)
                if [ -n "$line" ] && [ -z "$code_example" ] && [[ ! "$line" =~ ^\<details\> ]] && [[ ! "$line" =~ ^\<\/details\> ]] && [[ ! "$line" =~ ^\<summary\> ]] && [[ ! "$line" =~ ^\<\/summary\> ]]; then
                    if [ -n "$section_desc" ]; then
                        section_desc="$section_desc
$line"
                    else
                        section_desc="$line"
                    fi
                fi
            fi
        fi
    done < "$doc_file"

    # Convert Angular to Vue syntax
    if [ -n "$code_example" ]; then
        code_example=$(echo "$code_example" | sed 's/<p-button/<Button/g; s/<\/p-button/<\/Button/g; s/<p-buttongroup/<ButtonGroup/g; s/<\/p-buttongroup/<\/ButtonGroup/g; s/\[disabled\]="true"/disabled/g; s/\[outlined\]="true"/:outlined="true"/g; s/\[rounded\]="true"/:rounded="true"/g; s/\[text\]="true"/:text="true"/g; s/\[raised\]="true"/:raised="true"/g; s/\[loading\]="true"/:loading="true"/g; s/(onClick)="/@click="/g')
    else
        code_example="<!-- No code example available for this section -->"
    fi

    # Create story file
    cat > "$story_file" << EOF
export default {
  title: 'PRIMEUIX/${COMPONENT_NAME}/${clean_name}',
  parameters: {
    docs: {
      description: {
        component: \`
${section_desc}
        \`.trim()
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

    echo -e "  ${GREEN}✓ Created: $(basename "$story_file")${NC}"
done

# Create Overview
overview_file="$component_dir/${COMPONENT_NAME}.Overview.stories.mdx"
component_desc=$(head -n 5 "$doc_file" | tail -n +3)

# Build sections list
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

[Документация PrimeVue](https://primevue.org/$(echo "$COMPONENT_NAME" | tr '[:upper:]' '[:lower:]')/)

---

## Доступные примеры

Используйте боковую панель Storybook для просмотра различных вариантов использования компонента ${COMPONENT_NAME}.

## Секции

${sections_list}
EOF

echo -e "\n${GREEN}✓ Created: $(basename "$overview_file")${NC}"

echo -e "\n${CYAN}Summary:${NC}"
echo -e "${GREEN}✓ Created ${#sections[@]} story files${NC}"
echo -e "${GREEN}✓ Created 1 overview file${NC}"
echo -e "${BLUE}Backup saved at: $backup_dir${NC}"
