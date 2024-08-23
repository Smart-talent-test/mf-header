interface IThemeColor {
  50: string;
  100: string;
  200: string;
  base: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

interface IThemePreset {
  light?: string;
  base?: string;
  dark?: string;
  text?: string;
}

interface IThemeZIndex {
  default: number;
  header: number;
  footer: number;
  modal: number;
  card: number;
  map: number;
}

interface IThemeColorValue {
  light?: string;
  base?: string;
  dark?: string;
  alternative?: string;
  text?: string;
}

interface IThemeBreakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface ITheme {
  fonts: {
    family: string;
  };
  colors: {
    main: Partial<IThemeColor>;
    secondary: Partial<IThemeColor>;
    tertiary: Partial<IThemeColor>;
    success: IThemePreset;
    error: IThemePreset;
    warning: IThemePreset;
    border: {
      light: string;
      base: string;
      dark: string;
    };
    text: {
      base: string;
      alternative: string;
    };
    black: IThemeColorValue;
    white: IThemeColorValue;
    blue: {
      base: string;
    };
    violet: {
      base: string;
    };
    gray: {
      base: string;
      dark: string;
      light: string;
      alternate: string;
      input: string;
      ebony: string;
      charcoal: string;
      extralight: string;
    };
    transparent: IThemeColorValue;
  };
  zIndex: IThemeZIndex;
  breakpoints: IThemeBreakpoints;
}

export const breakpoints = {
  xs: "480px",
  sm: "769px",
  md: "1024px",
  lg: "1280px",
  xl: "1440px",
  xxl: "1920px",
};

export const theme: ITheme = {
  fonts: {
    family: "Montserrat",
  },
  colors: {
    main: {
      50: "#E9E5F0",
      100: "#C8BED9",
      200: "#A493C0",
      base: "#927DB4", // 300
      400: "#7A6896",
      500: "#615378",
      600: "#493F5A",
      700: "#FAF8F5",
      800: "#312C3A",
      900: "#312A3C",
    },
    secondary: {
      50: "#E7E7F8",
      100: "#C2C2ED",
      200: "#9A9AE1",
      base: "#8686DB", // 300
      400: "#7070B6",
      500: "#595992",
      600: "#2D2D49",
      700: "#712FFF",
      800: "#E1E0F6",
    },
    tertiary: {
      50: "#D4E9FF",
      100: "#92C8FF",
      200: "#4AA4FF",
      base: "#2692FF", // 300
      400: "#207AD4",
      500: "#1961AA",
      600: "#0D3155",
      700: "#FAF8F5", // peach
      800: "#A9A9A9",
      900: "#836BAA",
    },
    success: {
      light: "#E0EFB0",
      base: "#D1E788",
      dark: "#8B9A5B",
    },
    error: {
      light: "#FA9F96",
      base: "#F86F62",
      dark: "#A54A41",
      text: "#C30010",
    },
    warning: {
      light: "#F9B494",
      base: "#F68E5F",
      dark: "#A45F3F",
    },
    border: {
      light: "#E1E1E1",
      base: "#D2D2D2",
      dark: "#8C8C8C",
    },
    text: {
      base: "#383A46",
      alternative: "927DB4",
    },
    black: {
      light: "#37373B",
      base: "#0F0F14",
      dark: "#000000",
      alternative: "#18171A",
    },
    white: {
      base: "#FFFFFF",
      dark: "#D4D4D4",
      text: "#E0E0E0",
    },
    gray: {
      base: "#666666",
      light: "#6B7280",
      dark: "#5F5F5F",
      alternate: "#333",
      input: "#969AB8",
      ebony: "#171725",
      charcoal: "#AFAFAF",
      extralight: "#8080801f",
    },
    blue: {
      base: "#0062ff",
    },
    violet: {
      base: "#3700b3",
    },
    transparent: {
      base: "transparent",
    },
  },
  zIndex: {
    default: 0,
    header: 998,
    footer: 997,
    modal: 999,
    card: 3,
    map: 9,
  },
  breakpoints: {
    ...breakpoints,
  },
};
