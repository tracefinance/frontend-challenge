import { styled } from "../../stitches.config";

export const FormDiv = styled("div", {
  minWidth: 500,
  margin: "30px 20px 0 0",
  padding: "30px 50px 30px 50px",
  border: "1px solid gray",
  borderRadius: 5,
  float: "left",
  variants: {
    form: {
      info: {
        padding: 20,
        margin: 5,
        float: "right",
        border: "none",
      },
    },
  },
});
