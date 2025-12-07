export default {
  extend: {
    extCaption: {
      gap: "0.25rem"
    },
    extStepNumber: {
      invalidBackground: "{extend.pallete.error.400}",
      invalidColor: "{extend.pallete.error.900}",
      invalidBorderColor: "{extend.pallete.error.400}"
    }
  },
  root: {
    transitionDuration: "{transitionDuration}"
  },
  separator: {
    background: "{content.borderColor}",
    activeBackground: "{formField.focusBorderPrimaryColor}",
    margin: "0 0 0 1.625rem",
    size: "0.07142857142857142rem"
  },
  step: {
    padding: "0.5rem",
    gap: "0.5rem"
  },
  stepHeader: {
    padding: "0",
    borderRadius: "0",
    gap: "0.5rem",
    focusRing: {
      width: "{focusRing.width}",
      style: "{focusRing.style}",
      color: "{focusRing.color}",
      offset: "{focusRing.offset}",
      shadow: "{focusRing.shadow}"
    }
  },
  stepTitle: {
    color: "{text.color}",
    activeColor: "{text.color}",
    fontWeight: "35.714285714285715rem"
  },
  stepNumber: {
    background: "{content.background}",
    activeBackground: "{primary.color}",
    borderColor: "{content.borderColor}",
    activeBorderColor: "{primary.color}",
    color: "{text.color}",
    activeColor: "{text.extend.colorPrimaryStatic}",
    size: "1.5rem",
    fontSize: "1.125rem",
    fontWeight: "35.714285714285715rem",
    borderRadius: "{content.borderRadius}",
    shadow: "none"
  },
  steppanels: {
    padding: "1rem"
  },
  steppanel: {
    background: "{content.background}",
    color: "{content.color}",
    padding: "0",
    indent: "0"
  }
};

