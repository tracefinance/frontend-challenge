import { styled } from "../../stitches.config";

export const Button = styled("button", {
  color: "grey",
  width: "100%",
  backgroundColor: "rgba(39, 38, 44, 0.2)",
  borderRadius: 5,
  cursor: "pointer",
  fontSize: 15,
  lineHeight: "1",
  fontWeight: 500,
  paddingTop: 15,
  paddingBottom: 15,
  paddingLeft: 16,
  paddingRight: 16,
  marginTop: 10,
  marginBottom: 10,
  border: "0",
  "&:hover": {
    backgroundColor: "#08FF7F",
    color: "black",
  },
  when: {
    sm: {
      minHeight: 80,
      borderRadius: 0,
    },
  },
});
