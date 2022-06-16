import { styled } from "../../stitches.config";

export const FormDiv = styled("div", {
  maxWidth: 600,
  margin: 20,
  padding: "30px 50px 30px 50px",
  border: "1px solid gray",
  borderRadius: 5,
  float: "left",
  alignItems: "center",
  variants: {
    form: {
      info: {
        padding: 20,
        float: "right",
        border: "none",
      },
    },
  },
});
