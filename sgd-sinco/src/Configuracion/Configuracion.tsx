import { ThemeOptions } from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const grey: ColorPartial = {
  50: "#FAFBFF",
  100: "#F4F6FA",
  200: "#EDEFF5",
  300: "#E6E8F0",
  400: "#D8DAE5",
  500: "#C1C4D6",
  600: "#8F95B2",
  700: "#696F8C",
  800: "#474D66",
  900: "#101840",
  A100: "#D8DAE5",
  A200: "#C1C4D6",
  A400: "#696F8C",
  A700: "#101840",
};

const typography: TypographyOptions = {
  fontFamily: "sans-serif",
  h1: {
    fontFamily: "Nunito",
    fontSize: "96px",
    fontWeight: "300",
  },
  h2: {
    fontFamily: "Nunito",
    fontSize: "60px",
    fontWeight: "400",
  },
  h3: {
    fontFamily: "Nunito",
    fontSize: "48px",
    fontWeight: "500",
  },
  h4: {
    fontFamily: "Nunito",
    fontSize: "34px",
    fontWeight: "600",
  },
  h5: {
    fontFamily: "Nunito",
    fontSize: "24px",
    fontWeight: "600",
  },
  h6: {
    fontFamily: "Nunito",
    fontSize: "20px",
    fontWeight: "600",
  },
  subtitle1: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "400",
  },
  subtitle2: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "500",
  },
  body1: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "400",
  },
  body2: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "400",
  },
  button: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "500",
  },
  caption: {
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "500",
  },
};

export const light: ThemeOptions = {
  typography,
  palette: {
    grey,
    text: {
      primary: "rgba(16, 24, 64, 0.87)",
      secondary: "rgba(16, 24, 64, 0.6)",
      disabled: "rgba(16, 24, 64, 0.38)",
    },
    primary: {
      main: "#1E62A1",
      dark: "#003972",
      light: "#5A8FD3",
    },
    secondary: {
      main: "#0CBBE2",
      dark: "#008BB0",
      light: "#67EEFF",
    },
    action: {
      active: "rgba(16, 24, 64, 0.54)",
      hover: "rgba(16, 24, 64, 0.04)",
      selected: "rgba(16, 24, 64, 0.08)",
      disabled: "rgba(16, 24, 64, 0.26)",
      disabledBackground: "rgba(16, 24, 64, 0.12)",
      focus: "rgba(16, 24, 64, 0.12)",
    },
    error: {
      main: "#D14343",
      dark: "#B51E1E",
      light: "#D85F5F",
    },
    warning: {
      main: "#FB8500",
      dark: "#F85500",
      light: "#FC9726",
    },
    info: {
      main: "#2D9FC5",
      dark: "#1172A3",
      light: "#4DADCE",
      contrastText: "#FFF",
    },
    success: {
      main: "#8FC93A",
      dark: "#60A918",
      light: "#A0D158",
      contrastText: "#FFF",
    },
    background: {
      paper: "#FBFBFB",
      default: "#F1F0EE",
    },
    divider: "rgba(16, 24, 64, 0.12)",
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",

          minWidth: "unset",
        },
      },
    },
  },
};

export const dark: ThemeOptions = {
  typography,
  palette: {
    grey,
    text: {
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    primary: {
      main: "#4DADCE",
      dark: "#2D9FC5",
      light: "#C0E2EE",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    secondary: {
      main: "#BBC2C9",
      dark: "#8D9AA6",
      light: "#E4E7EA",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    action: {
      active: "rgba(255, 255, 255, 0.56)",
      hover: "rgba(255, 255, 255, 0.08)",
      selected: "rgba(255, 255, 255, 0.16)",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      focus: "rgba(255, 255, 255, 0.12)",
    },
    error: {
      main: "#D14343",
      dark: "#B51E1E",
      light: "#E57373",
      contrastText: "#FFF",
    },
    warning: {
      main: "#FB8500",
      dark: "#F85500",
      light: "#FC9726",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    info: {
      main: "#4DADCE",
      dark: "#2D9FC5",
      light: "#C0E2EE",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    success: {
      main: "#8FC93A",
      dark: "#60A918",
      light: "#A0D158",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  },
};
