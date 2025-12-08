#!/bin/bash

# Production Script with Old Files Cleanup
# Reorganizes stories and handles old files properly

set -e

# Colors
readonly GREEN='\033[0;32m'
readonly BLUE='\033[0;34m'
readonly YELLOW='\033[1;33m'
readonly RED='\033[0;31m'
readonly CYAN='\033[0;36m'
readonly MAGENTA='\033[0;35m'
readonly NC='\033[0m'

# Directories
readonly STORIES_DIR="/Users/d.khaliulin/Desktop/vue-ui-kit/src/plugins/prime/stories/PRIMEUIX"
readonly DOCS_DIR="/Users/d.khaliulin/Desktop/vue-ui-kit/src/primefaces-llm/components"
readonly BACKUP_DIR="/Users/d.khaliulin/Desktop/vue-ui-kit/backup_stories_$(date +%Y%m%d_%H%M%S)"

# Counters
TOTAL_COMPONENTS=0
PROCESSED_COMPONENTS=0
TOTAL_STORIES=0
SKIPPED_COMPONENTS=0
OLD_FILES_MOVED=0

# Banner
print_banner() {
    echo -e "${CYAN}"
    echo "╔════════════════════════════════════════════════════════════╗"
    echo "║                                                            ║"
    echo "║      PrimeUIX Stories Reorganization with Cleanup          ║"
    echo "║              Production Release v2.0                       ║"
    echo "║                                                            ║"
    echo "╚════════════════════════════════════════════════════════════╝"
    echo -e "${NC}\n"
}

# Create backup
create_backup() {
    echo -e "${YELLOW}Creating backup...${NC}"
    mkdir -p "$BACKUP_DIR"
    cp -r "$STORIES_DIR" "$BACKUP_DIR/"
    echo -e "${GREEN}✓ Backup created at: $BACKUP_DIR${NC}\n"
}

# Convert component name to lowercase
to_lowercase() {
    echo "$1" | tr '[:upper:]' '[:lower:]'
}

# Clean section name for filename
clean_section_name() {
    echo "$1" | sed 's/[^a-zA-Z0-9]//g'
}

# Convert Angular/PrimeNG syntax to Vue/PrimeVue
convert_to_vue() {
    local content="$1"

    # Convert Angular binding syntax to Vue
    content=$(echo "$content" | sed 's/\[disabled\]="true"/disabled/g')
    content=$(echo "$content" | sed 's/\[outlined\]="true"/:outlined="true"/g')
    content=$(echo "$content" | sed 's/\[rounded\]="true"/:rounded="true"/g')
    content=$(echo "$content" | sed 's/\[text\]="true"/:text="true"/g')
    content=$(echo "$content" | sed 's/\[raised\]="true"/:raised="true"/g')
    content=$(echo "$content" | sed 's/\[loading\]="true"/:loading="true"/g')
    content=$(echo "$content" | sed 's/\[fluid\]="true"/:fluid="true"/g')
    content=$(echo "$content" | sed 's/\[multiple\]="true"/:multiple="true"/g')

    # Convert event bindings
    content=$(echo "$content" | sed 's/(onClick)="/@click="/g')
    content=$(echo "$content" | sed 's/(onFocus)="/@focus="/g')
    content=$(echo "$content" | sed 's/(onBlur)="/@blur="/g')
    content=$(echo "$content" | sed 's/(onChange)="/@change="/g')
    content=$(echo "$content" | sed 's/(onInput)="/@input="/g')

    # Convert PrimeNG component tags to PrimeVue
    content=$(echo "$content" | sed 's/<p-button\b/<Button/g')
    content=$(echo "$content" | sed 's/<\/p-button>/<\/Button>/g')
    content=$(echo "$content" | sed 's/<p-buttongroup\b/<ButtonGroup/g')
    content=$(echo "$content" | sed 's/<\/p-buttongroup>/<\/ButtonGroup>/g')

    # Convert other common components
    local components=("accordion" "autocomplete" "avatar" "badge" "breadcrumb" "card" "carousel"
                      "checkbox" "chip" "datatable" "dialog" "dropdown" "input" "menu" "menubar"
                      "message" "multiselect" "paginator" "password" "select" "slider" "tabs"
                      "textarea" "toast" "tree" "inputtext" "inputnumber" "datepicker" "listbox")

    for comp in "${components[@]}"; do
        local comp_pascal="$(tr '[:lower:]' '[:upper:]' <<< ${comp:0:1})${comp:1}"
        content=$(echo "$content" | sed "s/<p-${comp}\b/<${comp_pascal}/g")
        content=$(echo "$content" | sed "s/<\/p-${comp}>/<\/${comp_pascal}>/g")
    done

    # Remove Angular-specific attributes
    content=$(echo "$content" | sed 's/ pButton//g')
    content=$(echo "$content" | sed 's/ pRipple//g')

    echo "$content"
}

# Extract code example from a section
extract_code_from_section() {
    local doc_file="$1"
    local section_name="$2"
    local in_section=false
    local in_code_block=false
    local in_details=false
    local code_content=""
    local code_lang=""

    while IFS= read -r line; do
        # Check section boundaries
        if [[ "$line" =~ ^##[[:space:]](.+)$ ]]; then
            local current_section="${BASH_REMATCH[1]}"
            if [ "$current_section" = "$section_name" ]; then
                in_section=true
                continue
            elif [ "$in_section" = true ]; then
                break
            fi
        fi

        if [ "$in_section" = true ]; then
            # Skip content inside <details> tags
            if [[ "$line" =~ ^\<details\> ]]; then
                in_details=true
                continue
            elif [[ "$line" =~ ^\<\/details\> ]]; then
                in_details=false
                continue
            fi

            if [ "$in_details" = true ]; then
                continue
            fi

            # Handle code blocks
            if [[ "$line" =~ ^\`\`\`(.*)$ ]]; then
                if [ "$in_code_block" = false ]; then
                    in_code_block=true
                    code_lang="${BASH_REMATCH[1]}"
                else
                    in_code_block=false
                    if [[ "$code_lang" =~ ^(html|vue|xml)?$ ]] && [ -n "$code_content" ]; then
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

    if [ -n "$code_content" ]; then
        echo "$code_content"
    fi
}

# Extract description from a section
extract_description() {
    local doc_file="$1"
    local section_name="$2"
    local in_section=false
    local description=""

    while IFS= read -r line; do
        if [[ "$line" =~ ^##[[:space:]](.+)$ ]]; then
            local current_section="${BASH_REMATCH[1]}"
            if [ "$current_section" = "$section_name" ]; then
                in_section=true
                continue
            elif [ "$in_section" = true ]; then
                break
            fi
        fi

        if [ "$in_section" = true ]; then
            if [[ "$line" =~ ^\`\`\` ]] || [[ "$line" =~ ^\<details\> ]]; then
                break
            fi

            if [ -n "$line" ]; then
                if [ -n "$description" ]; then
                    description="$description
$line"
                else
                    description="$line"
                fi
            fi
        fi
    done < "$doc_file"

    echo "$description"
}

# Handle old files
handle_old_files() {
    local component_dir="$1"
    local component_name="$2"

    # Move old .mdx file if it exists
    local old_mdx="$component_dir/${component_name}.stories.mdx"
    if [ -f "$old_mdx" ]; then
        mv "$old_mdx" "$component_dir/${component_name}.stories.mdx.old"
        OLD_FILES_MOVED=$((OLD_FILES_MOVED + 1))
        echo -e "  ${YELLOW}→ Moved old .mdx to .old${NC}"
    fi

    # Move old template file if it exists
    local old_template="$component_dir/${component_name}.template.js"
    if [ -f "$old_template" ]; then
        mv "$old_template" "$component_dir/${component_name}.template.js.old"
        OLD_FILES_MOVED=$((OLD_FILES_MOVED + 1))
        echo -e "  ${YELLOW}→ Moved old .template.js to .old${NC}"
    fi
}

# Process a single component
process_component() {
    local component_name="$1"
    local component_dir="$STORIES_DIR/$component_name"
    local doc_file="$DOCS_DIR/$(to_lowercase "$component_name").md"

    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${YELLOW}[$((PROCESSED_COMPONENTS + 1))/$TOTAL_COMPONENTS]${NC} ${MAGENTA}Processing: ${CYAN}$component_name${NC}"

    if [ ! -f "$doc_file" ]; then
        echo -e "  ${RED}✗ Documentation not found${NC}\n"
        SKIPPED_COMPONENTS=$((SKIPPED_COMPONENTS + 1))
        return
    fi

    # Handle old files first
    handle_old_files "$component_dir" "$component_name"

    # Create stories subdirectory
    local stories_subdir="$component_dir/stories"
    mkdir -p "$stories_subdir"

    # Extract all section names
    local -a sections=()
    while IFS= read -r line; do
        if [[ "$line" =~ ^##[[:space:]](.+)$ ]]; then
            local section_title="${BASH_REMATCH[1]}"
            local clean_name=$(clean_section_name "$section_title")

            if [[ ! "$clean_name" =~ ^(Props|Emits|Templates|PassThroughOptions|PassThrough|Theming|CSSClasses|DesignTokens|Style|styledoc|Accessibility|AccessibilityDoc)$ ]]; then
                if [ "$clean_name" != "$component_name" ]; then
                    sections+=("$section_title")
                fi
            fi
        fi
    done < "$doc_file"

    if [ ${#sections[@]} -eq 0 ]; then
        echo -e "  ${YELLOW}⚠ No story sections found${NC}\n"
        return
    fi

    # Create story files for each section
    local story_count=0
    for section_title in "${sections[@]}"; do
        local clean_name=$(clean_section_name "$section_title")
        local story_file="$stories_subdir/${component_name}.${clean_name}.stories.js"

        local description=$(extract_description "$doc_file" "$section_title")
        local code_example=$(extract_code_from_section "$doc_file" "$section_title")

        if [ -n "$code_example" ]; then
            code_example=$(convert_to_vue "$code_example")
            code_example=$(echo "$code_example" | sed 's/^/      /')
        else
            code_example="      <!-- TODO: Add component example for $section_title -->"
        fi

        cat > "$story_file" << EOF
export default {
  title: 'PRIMEUIX/${component_name}/${clean_name}',
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
        TOTAL_STORIES=$((TOTAL_STORIES + 1))
    done

    echo -e "  ${GREEN}✓ Created $story_count story files${NC}"

    # Create Overview file
    local overview_file="$component_dir/${component_name}.Overview.stories.mdx"
    local component_desc=$(head -n 5 "$doc_file" | tail -n +3)

    local sections_list=""
    for section_title in "${sections[@]}"; do
        sections_list="${sections_list}- **${section_title}**
"
    done

    cat > "$overview_file" << EOF
import { Meta } from '@storybook/addon-docs';

<Meta title="PRIMEUIX/${component_name}/Overview" />

# ${component_name}

${component_desc}

[PrimeVue Documentation](https://primevue.org/$(to_lowercase "$component_name")/)

---

## Available Examples

Use the Storybook sidebar to browse through different usage examples of the ${component_name} component.

## Sections

${sections_list}
---

**Total examples: ${#sections[@]}**
EOF

    echo -e "  ${GREEN}✓ Created Overview file${NC}\n"

    PROCESSED_COMPONENTS=$((PROCESSED_COMPONENTS + 1))
}

# Main execution
main() {
    print_banner

    echo -e "${YELLOW}This script will:${NC}"
    echo -e "  1. Create backup of existing stories"
    echo -e "  2. Move old .mdx and .template.js files to .old"
    echo -e "  3. Create new organized story structure"
    echo -e "\n${BLUE}Target directory: $STORIES_DIR${NC}\n"
    read -p "Continue? (y/n): " -n 1 -r
    echo ""

    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${RED}Aborted by user${NC}"
        exit 0
    fi

    create_backup

    mapfile -t components < <(ls -1 "$STORIES_DIR")
    TOTAL_COMPONENTS=${#components[@]}

    echo -e "${CYAN}Starting reorganization of $TOTAL_COMPONENTS components...${NC}\n"

    for component_name in "${components[@]}"; do
        if [ -d "$STORIES_DIR/$component_name" ]; then
            process_component "$component_name"
        fi
    done

    # Print summary
    echo -e "${CYAN}╔════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${CYAN}║                   Processing Complete                      ║${NC}"
    echo -e "${CYAN}╚════════════════════════════════════════════════════════════╝${NC}\n"
    echo -e "${GREEN}✓ Processed components: $PROCESSED_COMPONENTS/$TOTAL_COMPONENTS${NC}"
    echo -e "${GREEN}✓ Total stories created: $TOTAL_STORIES${NC}"
    echo -e "${YELLOW}→ Old files moved: $OLD_FILES_MOVED${NC}"

    if [ $SKIPPED_COMPONENTS -gt 0 ]; then
        echo -e "${YELLOW}⚠ Skipped components: $SKIPPED_COMPONENTS${NC}"
    fi

    echo -e "\n${BLUE}Backup location: $BACKUP_DIR${NC}"
    echo -e "${GREEN}✓ Reorganization completed successfully!${NC}\n"
}

main
