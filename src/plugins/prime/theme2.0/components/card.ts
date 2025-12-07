export default {
  extend: {
    borderColor: "{content.borderColor}"
  },
  root: {
    background: "{content.background}",
    borderRadius: "{borderRadius.lg}",
    color: "{content.color}",
    shadow: "0 .125rem .25rem rgba(0,0,0,.075)"
  },
  body: {
    padding: "1rem",
    gap: "1rem"
  },
  caption: {
    gap: "0.25rem"
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "50rem"
  },
  subtitle: {
    color: "{text.mutedColor}"
  }
};

