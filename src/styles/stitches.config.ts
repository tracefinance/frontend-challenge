
import { createStitches } from "@stitches/react"

export const { styled, getCssText, keyframes } = createStitches({
  theme: {
    fonts: {
      family: "Poppins",
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      dark100: "#E7E7E7",
      dark300: "#B8B8B8",
      dark500: "#888888",
      dark700: "#1D1D1D80",
      gray800: "#414141",
      dark900: "#2A2A2A",
      primary500: "#00F2B1",
      error500: "#FA4D56",
    },
    space: {
      1: "0.8rem",
      2: "1.2rem",
      3: "1.6rem",
      4: "2.4rem",
      5: "3.2rem",
      6: "4rem",
      7: "4.8rem",
    },
    fontSizes: {
      small: "1.4rem",
      paragraph: "1.4rem",
      large: "2.5rem",
      subtitle: "1.8rem",
      title: "4.5rem",
    },
    fontWeights: {
      regular: "400",
      medium: "500",
      bold: "700",
    },
    borderStyles: {
      rounded: "50%",
      button: "0.8rem",
      card: "0.8rem",
      input: "0.8rem",
      divisor: "2rem" 
    },
  },
});