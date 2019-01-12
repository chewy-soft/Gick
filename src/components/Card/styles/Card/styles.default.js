import c from "../../../../lib/css";
export default {
  boxShadow: {
    ...c.absolute,
    zIndex: -2,
    boxShadow: "0 15px 10px rgba(0, 0, 0, 0.7)",
    bottom: 15,
    width: "50%",
    height: "20%"
  },
  left: { left: 5, transform: [{ rotate: "-3deg" }] },
  right: { right: 5, transform: [{ rotate: "3deg" }] },
  title: { marginBottom: 4, fontSize: 18 },
  description: { fontSize: 14 },
  content: {
    padding: 4,
    paddingBottom: 8
  },
  shadow: { boxShadow: "0 2px 4px rgba(0, 0, 0, 0.6)" }
};
