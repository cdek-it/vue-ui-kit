export default {
  extend: {
    extBorderColor: "{formField.borderColor}",
  },
  root: {
    width: "2rem",
    height: "2rem",
    fontSize: "1rem",
    color: "{text.extend.colorPrimaryStatic}",
    background: "{primary.color}",
    borderRadius: "{borderRadius.md}"
  },
  icon: {
    size: "1rem"
  },
  group: {
    borderColor: "{content.background}",
    offset: "-0.75rem"
  },
  lg: {
    width: "2.5rem",
    height: "2.5rem",
    fontSize: "1rem",
    icon: {
      size: "1rem"
    },
    group: {
      offset: "-1rem"
    }
  },
  xl: {
    width: "3.5rem",
    height: "3.5rem",
    fontSize: "1rem",
    icon: {
      size: "1.5rem"
    },
    group: {
      offset: "-1.5rem"
    }
  },
  css: () => `
  .p-avatar {
    border-width: 1px;
    border-style: solid;
    border-color: {extend.extBorderColor};
  }
  `
};

