export function getFieldVisualCases() {
  return [
    'default',
    'hover',
    'focus',
    'invalid',
    'invalid-focus',
    'disabled',
    'readonly',
  ].flatMap((state) =>
    ['default', 'float'].flatMap((labelPosition) =>
      [true, false].map((placeholder) => ({
        id: `${state}-${labelPosition}-${placeholder}`,
        state,
        labelPosition,
        placeholder: placeholder ? 'Placeholder' : '',
        value: placeholder ? '' : 'InputText',
        invalid: state.startsWith('invalid'),
        disabled: state === 'disabled',
        readonly: state === 'readonly',
      }))
    )
  );
}

export function getToggleVisualCases() {
  return ['small', 'base', 'large', 'xlarge'].flatMap((size) =>
    [false, true].flatMap((checked) =>
      ['default', 'hover', 'focus', 'disabled'].flatMap((state) =>
        ['text', 'left', 'right', 'only'].map((iconPosition) => ({
          id: `${size ?? 'base'}-${checked}-${state}-${iconPosition}`,
          size,
          checked,
          state,
          iconPosition,
          iconOnly: iconPosition === 'only',
          disabled: state === 'disabled',
          label: iconPosition === 'only' ? '' : 'ButtonToggle',
          icon: iconPosition === 'text' ? '' : 'ti ti-check',
        }))
      )
    )
  );
}
