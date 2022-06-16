import { styled } from "../../stitches.config";

export const Input = styled("input", {
  width: "100%",
  backgroundColor: "rgba(39, 38, 44, 0.2)",
  border: "1px solid gray",
  borderRadius: 5,
  fontSize: 12,
  lineHeight: "1",
  fontWeight: 500,
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 16,
  paddingRight: 16,
  marginTop: 6,
  marginBottom: 6,
  "&:hover": {
    border: "1px solid white",
  },
  when: {
    sm: {
      minHeight: 80,
      borderRadius: 0,
    },
  },
  variants: {
    bio: {
      info: {
        justifyContent: "start",
        minHeight: 80,
      },
    },
  },
});
