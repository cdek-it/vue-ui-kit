#!/bin/bash

# id историй в сайдбаре, которые без стрелочки, кружочек встает вместо иконки
story_ids=(
  "ui-kit-cdekautocomplete--hidden-tip-block"
  "ui-kit-cdekalert--primary-content-align-top"
  "ui-kit-cdekautocomplete--with-error-hidden-message"
  "ui-kit-cdekinput-basic--error-without-message-with-tip"
  "ui-kit-cdekinput-basic--show-error-if-exists"
  "ui-kit-cdekinput-basic--show-error-if-exists-with-tip"
  "ui-kit-cdekmaskedinput--hidden-error-message"
  "ui-kit-cdekmaskedinput--clearable-input"
  "ui-kit-cdekselect-types--page"
  "ui-kit-cdekselect--with-tip"
  "ui-kit-cdekselect--hide-error-message"
  "ui-kit-cdekselect--hide-error-message-with-tip"
  "ui-kit-cdekselect--show-error-if-exists"
  "ui-kit-cdekselect--show-error-if-exists-with-tip"
  "ui-kit-cdekselect--primitive-values"
  "ui-kit-cdekselect--falsy-value-item"
  "form-cdekform--primary-trimmed"
  "form-cdekform--change-event"
  "form-change-values--page"
  "form-behavior--page"
  "installation--page"
  "contributing--page"
  "plugins-toastification--select-position-mobile"
)
# id компонентов в сайдбаре, который раскрываются, кружочек встает после текста
component_ids=(
  "ui-kit-cdekbreadcrumbs"
  "ui-kit-cdekalert"
  "ui-kit-cdekautocomplete"
  "ui-kit-cdekinput"
  "ui-kit-cdekinput-basic"
  "ui-kit-cdekmaskedinput"
  "ui-kit-cdekselect"
  "ui-kit-cdektextarea"
  "form-cdekform"
  "plugins-toastification"
)

# Output file
output_file=".storybook/newLabel.css"

# Start writing to the output file using cat and EOM
cat > $output_file <<- EOM
/* 
Этот файл генерируется автоматически с помощью скрипта scrips/new-label.sh
Не редактируйте этот файл напрямую, вместо этого измените скрипт.
*/

/* New лейбл на историях */
EOM

# Generate CSS for story IDs
for id in "${story_ids[@]}"; do
  cat >> $output_file <<- EOM
#$id {
  font-weight: bold;
}

#$id svg {
  display: none;
}

#$id::before {
  display: inline-block;
  content: '';
  width: 7px;
  height: 7px;
  margin-right: 7px;
  margin-left: 3px;
  background: #1ea7fd;
  border-radius: 50%;
  align-self: center;
  flex-shrink: 0;
}

#$id[data-selected='true']::before {
  background: white;
}

EOM
done

cat >> $output_file <<- EOM
/* New лейбл на компонентах */
EOM

# Generate CSS for component IDs
for id in "${component_ids[@]}"; do
  cat >> $output_file <<- EOM
#$id {
  font-weight: bold;
}

#$id::after {
  display: inline-block;
  content: '';
  width: 7px;
  height: 7px;
  margin-left: 5px;
  background: #1ea7fd;
  border-radius: 50%;
  align-self: center;
  flex-shrink: 0;
  margin-top: 3px;
}

EOM
done

echo "CSS file $output_file has been created."