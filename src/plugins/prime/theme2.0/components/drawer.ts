export default {
  extend: {
    borderRadius: "{overlay.popover.borderRadius}",
    extHeader: {
      gap: "0.5rem",
      borderColor: "{drawer.root.borderColor}"
    },
    width: "{sizingDrawer.width}"
  },
  root: {
    background: "{overlay.modal.background}",
    borderColor: "{overlay.modal.borderColor}",
    color: "{overlay.modal.color}",
    shadow: "{overlay.modal.shadow}"
  },
  header: {
    padding: "{overlay.modal.padding} {overlay.modal.padding} 14 {overlay.modal.padding} "
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "42.857142857142854rem"
  },
  content: {
    padding: "{overlay.modal.padding}"
  },
  footer: {
    padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding} "
  }
};

