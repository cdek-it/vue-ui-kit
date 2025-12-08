#!/bin/bash

# Advanced Story Reorganization Script
# This script parses markdown documentation and creates properly structured Storybook stories

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m'

STORIES_DIR="/Users/d.khaliulin/Desktop/vue-ui-kit/src/plugins/prime/stories/PRIMEUIX"
DOCS_DIR="/Users/d.khaliulin/Desktop/vue-ui-kit/src/primefaces-llm/components"

echo -e "${CYAN}╔════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║  Advanced Stories Reorganization Tool ║${NC}"
echo -e "${CYAN}╚════════════════════════════════════════╝${NC}\n"

# Statistics
TOTAL_COMPONENTS=0
PROCESSED_COMPONENTS=0
TOTAL_STORIES=0
SKIPPED_COMPONENTS=0

# Get list of all components
mapfile -t components < <(ls -1 "$STORIES_DIR")
TOTAL_COMPONENTS=${#components[@]}

# Function to convert component name to lowercase
to_lowercase() {
    echo "$1" | tr '[:upper:]' '[:lower:]'
}

# Function to clean section name for filename
clean_section_name() {
    echo "$1" | sed 's/[^a-zA-Z0-9]//g'
}

# Function to convert PrimeNG Angular syntax to PrimeVue
convert_angular_to_vue() {
    local content="$1"

    # Convert Angular attributes to Vue
    content=$(echo "$content" | sed 's/\[disabled\]="true"/disabled/g')
    content=$(echo "$content" | sed 's/\[outlined\]="true"/:outlined="true"/g')
    content=$(echo "$content" | sed 's/\[rounded\]="true"/:rounded="true"/g')
    content=$(echo "$content" | sed 's/\[text\]="true"/:text="true"/g')
    content=$(echo "$content" | sed 's/\[raised\]="true"/:raised="true"/g')
    content=$(echo "$content" | sed 's/\[loading\]="true"/:loading="true"/g')
    content=$(echo "$content" | sed 's/(onClick)="/@click="/g')
    content=$(echo "$content" | sed 's/(onFocus)="/@focus="/g')
    content=$(echo "$content" | sed 's/(onBlur)="/@blur="/g')

    # Convert component names from PrimeNG to PrimeVue
    content=$(echo "$content" | sed 's/<p-button/<Button/g')
    content=$(echo "$content" | sed 's/<\/p-button/<\/Button/g')
    content=$(echo "$content" | sed 's/<p-buttongroup/<ButtonGroup/g')
    content=$(echo "$content" | sed 's/<\/p-buttongroup/<\/ButtonGroup/g')

    # Convert other common components
    for comp in input select checkbox dropdown menu dialog datatable accordion; do
        local comp_upper="$(tr '[:lower:]' '[:upper:]' <<< ${comp:0:1})${comp:1}"
        content=$(echo "$content" | sed "s/<p-${comp}/<${comp_upper}/g")
        content=$(echo "$content" | sed "s/<\/p-${comp}/<\/${comp_upper}/g")
    done

    echo "$content"
}

# Function to extract code examples from markdown
extract_code_examples() {
    local doc_file="$1"
    local section_name="$2"
    local in_section=false
    local in_code_block=false
    local code_content=""
    local code_lang=""

    while IFS= read -r line; do
        # Check if we entered the target section
        if [[ "$line" =~ ^##[[:space:]]${section_name}$ ]]; then
            in_section=true
            continue
        fi

        # Check if we left the section (new ## header)
        if [[ "$in_section" == true ]] && [[ "$line" =~ ^##[[:space:]] ]] && [[ ! "$line" =~ ^##[[:space:]]${section_name}$ ]]; then
            in_section=false
            break
        fi

        if [ "$in_section" = true ]; then
            # Check for code block start
            if [[ "$line" =~ ^\`\`\`(.*)$ ]]; then
                if [ "$in_code_block" = false ]; then
                    in_code_block=true
                    code_lang="${BASH_REMATCH[1]}"
                else
                    in_code_block=false
                    # Only return HTML code blocks
                    if [[ "$code_lang" =~ ^(html|vue|xml)?$ ]]; then
                        echo "$code_content"
                        return
                    fi
                    code_content=""
                fi
            elif [ "$in_code_block" = true ]; then
                if [ -n "$code_content" ]; then
                    code_content="$code_content
$line"
                else
                    code_content="$line"
                fi
            fi
        fi
    done < "$doc_file"

    echo "$code_content"
}

# Main processing loop
for component_name in "${components[@]}"; do
    component_dir="$STORIES_DIR/$component_name"

    if [ ! -d "$component_dir" ]; then
        continue
    fi

    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${YELLOW}[$((PROCESSED_COMPONENTS + 1))/$TOTAL_COMPONENTS]${NC} Processing: ${CYAN}$component_name${NC}"

    # Find corresponding documentation
    doc_file="$DOCS_DIR/$(to_lowercase "$component_name").md"

    if [ ! -f "$doc_file" ]; then
        echo -e "  ${RED}✗ Documentation not found: $(basename "$doc_file")${NC}"
        SKIPPED_COMPONENTS=$((SKIPPED_COMPONENTS + 1))
        continue
    fi

    # Create stories subdirectory
    stories_subdir="$component_dir/stories"
    mkdir -p "$stories_subdir"

    # Parse documentation and create stories
    story_count=0
    sections=()

    # First pass: collect all sections
    while IFS= read -r line; do
        if [[ "$line" =~ ^##[[:space:]](.+)$ ]]; then
            section_title="${BASH_REMATCH[1]}"
            clean_name=$(clean_section_name "$section_title")

            # Skip technical sections
            if [[ ! "$clean_name" =~ ^(Props|Emits|Templates|PassThroughOptions|Theming|CSSClasses|DesignTokens|Style|styledoc|Accessibility)$ ]]; then
                sections+=("$section_title")
            fi
        fi
    done < "$doc_file"

    # Second pass: create story files
    for section_title in "${sections[@]}"; do
        clean_name=$(clean_section_name "$section_title")
        story_file="$stories_subdir/${component_name}.${clean_name}.stories.js"

        # Extract section description and code
        section_desc=""
        code_example=""
        in_section=false
        in_code_block=false

        while IFS= read -r line; do
            if [[ "$line" =~ ^##[[:space:]]${section_title}$ ]]; then
                in_section=true
                continue
            fi

            if [ "$in_section" = true ]; then
                if [[ "$line" =~ ^##[[:space:]] ]]; then
                    break
                fi

                if [[ "$line" =~ ^\`\`\` ]]; then
                    if [ "$in_code_block" = false ]; then
                        in_code_block=true
                        continue
                    else
                        in_code_block=false
                        break
                    fi
                fi

                if [ "$in_code_block" = true ]; then
                    if [ -n "$code_example" ]; then
                        code_example="$code_example
$line"
                    else
                        code_example="$line"
                    fi
                elif [ "$in_code_block" = false ] && [[ ! "$line" =~ ^\`\`\` ]]; then
                    if [ -n "$line" ] && [ -z "$code_example" ]; then
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

        # Convert Angular code to Vue
        if [ -n "$code_example" ]; then
            code_example=$(convert_angular_to_vue "$code_example")
        else
            code_example="<!-- No code example available -->"
        fi

        # Create story file
        cat > "$story_file" << 'STORY_EOF'
export default {
  title: 'PRIMEUIX/__COMPONENT_NAME__/__SECTION_NAME__',
  parameters: {
    docs: {
      description: {
        component: `
__SECTION_DESCRIPTION__
        `.trim()
      }
    }
  }
};

export const Default = () => ({
  template: `
    <div class="card flex flex-col gap-4 p-4">
__CODE_EXAMPLE__
    </div>
  `
});
STORY_EOF

        # Replace placeholders
        sed -i '' "s|__COMPONENT_NAME__|${component_name}|g" "$story_file"
        sed -i '' "s|__SECTION_NAME__|${clean_name}|g" "$story_file"

        # Escape special characters for sed
        section_desc_escaped=$(echo "$section_desc" | sed 's/[&/\]/\\&/g' | sed ':a;N;$!ba;s/\n/\\n/g')
        code_example_escaped=$(echo "$code_example" | sed 's/[&/\]/\\&/g' | sed ':a;N;$!ba;s/\n/\\n      /g')

        # Use perl for better multiline replacement
        perl -i -pe "s|__SECTION_DESCRIPTION__|${section_desc_escaped}|g" "$story_file"
        perl -i -pe "s|__CODE_EXAMPLE__|      ${code_example_escaped}|g" "$story_file"

        story_count=$((story_count + 1))
        TOTAL_STORIES=$((TOTAL_STORIES + 1))
    done

    if [ $story_count -gt 0 ]; then
        echo -e "  ${GREEN}✓ Created $story_count story files${NC}"
    else
        echo -e "  ${YELLOW}⚠ No story sections found${NC}"
    fi

    # Create overview file
    overview_file="$component_dir/${component_name}.Overview.stories.mdx"

    # Extract component description from docs
    component_desc=$(head -n 5 "$doc_file" | tail -n +3)

    cat > "$overview_file" << 'OVERVIEW_EOF'
import { Meta } from '@storybook/addon-docs';

<Meta title="PRIMEUIX/__COMPONENT_NAME__/Overview" />

# __COMPONENT_NAME__

__COMPONENT_DESCRIPTION__

[Документация PrimeVue](https://primevue.org/__COMPONENT_LOWER__/)

---

## Доступные примеры

Используйте боковую панель Storybook для просмотра различных вариантов использования компонента __COMPONENT_NAME__.

## Секции

__SECTIONS_LIST__
OVERVIEW_EOF

    # Replace placeholders
    sed -i '' "s|__COMPONENT_NAME__|${component_name}|g" "$overview_file"
    sed -i '' "s|__COMPONENT_LOWER__|$(to_lowercase "$component_name")|g" "$overview_file"
    component_desc_escaped=$(echo "$component_desc" | sed 's/[&/\]/\\&/g' | sed ':a;N;$!ba;s/\n/\\n/g')
    perl -i -pe "s|__COMPONENT_DESCRIPTION__|${component_desc_escaped}|g" "$overview_file"

    # Build sections list
    sections_list=""
    for section_title in "${sections[@]}"; do
        sections_list="${sections_list}- **${section_title}**
"
    done
    sections_list_escaped=$(echo "$sections_list" | sed 's/[&/\]/\\&/g' | sed ':a;N;$!ba;s/\n/\\n/g')
    perl -i -pe "s|__SECTIONS_LIST__|${sections_list_escaped}|g" "$overview_file"

    echo -e "  ${GREEN}✓ Created Overview file${NC}"

    PROCESSED_COMPONENTS=$((PROCESSED_COMPONENTS + 1))
    echo ""
done

# Summary
echo -e "${CYAN}╔════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║           Processing Complete          ║${NC}"
echo -e "${CYAN}╚════════════════════════════════════════╝${NC}\n"
echo -e "${GREEN}✓ Processed components: $PROCESSED_COMPONENTS/$TOTAL_COMPONENTS${NC}"
echo -e "${GREEN}✓ Total stories created: $TOTAL_STORIES${NC}"
if [ $SKIPPED_COMPONENTS -gt 0 ]; then
    echo -e "${YELLOW}⚠ Skipped components: $SKIPPED_COMPONENTS${NC}"
fi
echo ""
