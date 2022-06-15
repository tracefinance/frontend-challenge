import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  conditions: {
    sm: "@media (max-width: 480px)",
  },

  utils: {
    px: (config) => (value) => ({
      paddingRight: value,
      paddingLeft: value,
    }),
  },
});
