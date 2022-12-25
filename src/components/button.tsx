import { COLORS } from "../theme";

type ButtonType = {
  title: string;
  style: any | null;
};
const Button = ({ title, style }: ButtonType) => {
  return (
    <button
      style={
        style != null
          ? style
          : {
              backgroundColor: COLORS.primary,
              paddingInline: 20,
              paddingBlock: 20,
              color: "white",
              fontWeight: "600",
              border: "0px",
              borderRadius: "5px",
              height: "60px",
              textTransform: "uppercase",
            }
      }
    >
      {title}
    </button>
  );
};

export default Button;
