const css = ({ dt }: { dt: (token: string) => string }) => `
/* Базовое состояние лейбла по центру */
.p-floatlabel.p-floatlabel-in[data-pc-name="floatlabel"] label {
    top: 50%;
    transform: translateY(-50%);
    color: ${dt('floatlabel.root.color')};
    font-size: ${dt('floatlabel.root.fontSize')};
}

/* Активное состояние */
.p-floatlabel.p-floatlabel-in[data-pc-name="floatlabel"]:has(.p-inputtext:focus) label,
.p-floatlabel.p-floatlabel-in[data-pc-name="floatlabel"]:has(.p-inputtext.p-filled) label,
.p-floatlabel.p-floatlabel-in[data-pc-name="floatlabel"]:has(.p-inputtext:-webkit-autofill) label {
    top: ${dt('floatlabel.in.active.top')};
    transform: translateY(0);
    font-size: ${dt('floatlabel.root.active.fontSize')};
}

`;

export default css;
