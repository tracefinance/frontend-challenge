import { styled } from "../../stitches.config";

export const Button = styled("button", {
  width: "100%",
  backgroundColor: "gainsboro",
  borderRadius: 100,
  cursor: "pointer",
  fontSize: 20,
  lineHeight: "1",
  fontWeight: 500,
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 16,
  paddingRight: 16,
  border: "0",
  "&:hover": {
    backgroundColor: "#cccccc",
  },
  when: {
    sm: {
      minHeight: 80,
      borderRadius: 0,
    },
  },
});
