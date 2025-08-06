export default {
    root: {
        gap: '2rem',
    },

    stepList: {
        gap: '2rem',
    },

    step: {
        gap: '0.5rem',
        padding: '0.5rem',
        borderRadius: '{border.radius.md}',
        focusRing: {
            width: '{focus.ring.width}',
            style: '{focus.ring.style}',
            color: '{focus.ring.color}',
            offset: '{focus.ring.offset}',
            shadow: '{focus.ring.shadow}',
        },
        header: {
            borderRadius: '{border.radius.md}',
            borderWidth: '0px',
            borderColor: 'transparent',
            background: 'transparent',
            color: '{stepper.stepsItemTextColor}',
            hoverBackground: '{surface.100}',
            hoverColor: '{text.color}',
            activeBackground: 'transparent',
            activeColor: '{text.color}',
            padding: '0.75rem',
            gap: '0.5rem',
            fontWeight: '500',
            transition: '{transition.duration}',
        },
        number: {
            background: '{stepper.stepsItemBg}',
            activeBackground: '{primary.color}',
            completedBackground: '{stepper.stepsItemBg}',
            borderRadius: '50%',
            borderWidth: '1px',
            borderColor: '{stepper.stepsItemBorderColor}',
            activeBorderColor: '{primary.color}',
            color: '{stepper.stepsItemTextColor}',
            activeColor: '{general.primaryColorText}',
            size: '2rem',
            fontSize: '{stepper.stepsItemNumberFontSize}',
            fontWeight: '{stepper.stepsItemFontWeight}',
            transition: '{transition.duration}',
        },
        title: {
            color: '{stepper.stepsItemTextColor}',
            activeColor: '{text.color}',
            fontWeight: '{stepper.stepsItemFontWeight}',
            transition: '{transition.duration}',
        },
    },

    separator: {
        background: '{surface.200}',
        activeBackground: '{primary.color}',
        margin: '0 0 0 1rem',
        size: '2px',
        transition: '{transition.duration}',
    },

    stepPanels: {
        padding: '1.25rem 0 0 0',
    },

    stepPanel: {
        background: 'transparent',
        color: '{text.color}',
        padding: '0',
        indent: '1rem',
    },

    colorScheme: {
        light: {
            step: {
                number: {
                    background: '{stepper.stepsItemBg}',
                    activeBackground: '{primary.color}',
                    completedBackground: '{stepper.stepsItemBg}',
                    borderColor: '{stepper.stepsItemBorderColor}',
                    activeBorderColor: '{primary.color}',
                    color: '{stepper.stepsItemTextColor}',
                    activeColor: '{general.primaryColorText}',
                },
                title: {
                    color: '{stepper.stepsItemTextColor}',
                    activeColor: '{text.color}',
                },
                header: {
                    color: '{stepper.stepsItemTextColor}',
                    hoverBackground: '{surface.100}',
                    hoverColor: '{text.color}',
                    activeColor: '{text.color}',
                },
            },
            separator: {
                background: '{surface.200}',
                activeBackground: '{primary.color}',
            },
        },
        dark: {
            step: {
                number: {
                    background: '{stepper.stepsItemBg}',
                    activeBackground: '{primary.color}',
                    completedBackground: '{stepper.stepsItemBg}',
                    borderColor: '{stepper.stepsItemBorderColor}',
                    activeBorderColor: '{primary.color}',
                    color: '{stepper.stepsItemTextColor}',
                    activeColor: '{general.primaryColorText}',
                },
                title: {
                    color: '{stepper.stepsItemTextColor}',
                    activeColor: '{text.color}',
                },
                header: {
                    color: '{stepper.stepsItemTextColor}',
                    hoverBackground: '{surface.800}',
                    hoverColor: '{text.color}',
                    activeColor: '{text.color}',
                },
            },
            separator: {
                background: '{surface.700}',
                activeBackground: '{primary.color}',
            },
        },
    },

    css: `
        .p-step-number::after {
            content: none !important;
            position: static !important;
            width: auto !important;
            height: auto !important;
            border-radius: 0 !important;
            box-shadow: none !important;
        }

        .p-step-number {
            border: 1px solid var(--p-stepper-step-number-border-color);
        }
        
        .p-steppanel {
            background: transparent;
        }

        .p-stepper .p-button-secondary {
            background: transparent !important;
            border: 1px solid var(--p-primary-color) !important;
            color: var(--p-primary-color) !important;
        }

        .p-stepper .p-button-secondary:hover {
            background: var(--p-primary-color) !important;
            color: var(--p-primary-contrast-color) !important;
        }

        .p-stepper .p-button-secondary:focus {
            box-shadow: 0 0 0 0.2rem var(--p-primary-200) !important;
        }
    `,
};
