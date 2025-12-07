export default {
  colorScheme: {
    light: {
      Color: "#ffffff",
      primary: {
        background: "{primary.500}",
        color: "{text.color}"
      },
      secondary: {
        background: "{surface.200}",
        color: "{text.color}"
      },
      success: {
        background: "{extend.pallete.success.400}",
        color: "{extend.pallete.success.900}"
      },
      info: {
        background: "{extend.pallete.info.300}",
        color: "{extend.pallete.info.900}"
      },
      warn: {
        background: "{extend.pallete.warn.300}",
        color: "{extend.pallete.warn.900}"
      },
      danger: {
        background: "{extend.pallete.error.300}",
        color: "{extend.pallete.error.900}"
      }
    }
  },
  root: {
    fontSize: "0.875rem",
    fontWeight: "50rem",
    padding: "0.285rem 0.5rem",
    gap: "0.25rem",
    borderRadius: "{borderRadius.sm}",
    roundedBorderRadius: "{borderRadius.xl}"
  },
  icon: {
    size: "0.875rem"
  }
};

