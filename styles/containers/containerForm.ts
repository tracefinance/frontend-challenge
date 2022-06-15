import { styled } from "../../stitches.config";

export const FormDiv = styled("div", {
  maxWidth: 300,
  margin: 20,
  padding: 20,
  border: "1px solid gray",
  borderRadius: 5,
  float: "left",
  variants: {
    form: {
      info: {
        maxWidth: 200,
        float: "right",
        border: "none",
      },
    },
  },
});
