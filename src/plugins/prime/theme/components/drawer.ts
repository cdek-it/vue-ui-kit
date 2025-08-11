export default {
    root: {
        background: '{overlayContentBg}',
        borderColor: '{overlayContentBorderColor}',
        border: '{overlayContentBorder}',
        color: '{text.color}',
        borderRadius: '{border.radius.md}',
        shadow: '{overlayContainerShadow}',
    },
    header: {
        padding: '1.25rem',
        borderBottom: '1px solid {overlayContentBorderColor}',
        background: '{overlayContentBg}',
    },
    title: {
        fontWeight: '600',
        fontSize: '1.25rem',
    },
    content: {
        padding: '1.25rem',
        background: '{overlayContentBg}',
    },
    mask: {
        background: '{mask.background}',
    },
    colorScheme: {
        light: {
            root: {
                background: '{overlayContentBg}',
                shadow: '{overlayContainerShadow}',
            },
            header: {
                borderBottom: '1px solid {overlayContentBorderColor}',
                background: '{overlayContentBg}',
            },
            content: {
                background: '{overlayContentBg}',
            },
        },
        dark: {
            root: {
                background: '{overlayContentBg}',
                shadow: '{overlayContainerShadow}',
            },
            header: {
                borderBottom: '1px solid {overlayContentBorderColor}',
                background: '{overlayContentBg}',
            },
            content: {
                background: '{overlayContentBg}',
            },
        },
    },
};