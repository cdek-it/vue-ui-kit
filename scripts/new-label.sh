#!/bin/bash

# id историй в сайдбаре, которые без стрелочки, кружочек встает вместо иконки
story_ids=(
  "prime-установка--page"
  "prime-тема--page"
  "prime-иконки-и-типографика--page"
)
# id компонентов в сайдбаре, который раскрываются, кружочек встает после текста
component_ids=(
  "prime-button"
  "prime-form"
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