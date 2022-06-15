import { createStitches } from "@stitches/react"

export const { styled, css } = createStitches({
    media: {
        sm : '(max-width: 680px)',
        md: '(max-width: 992px)',
        lg: '(max-width: 1080px)'
    },

    theme: {
        colors: {
            background: "#121212",
            primary: "1D1D1D50",
            border: "#2A2A2A",
            verde: "#00F2B1",
            textColor: "#ffffff",
            inputColor: "#202020",
            borderInputColor: "#414141",
            error: "#FA4D56",
            label: "#A0A0A0",
            focusBorder: "#e7e7e7"
        }
    }
})