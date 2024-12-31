import { ButtonHTMLAttributes, ReactNode } from "react";

interface KeyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  boarderColor?: string;
  backgroundColor?: string;
  isActiate?: boolean;
}

export const KeyButton = ({
  children,
  boarderColor = "lime",
  backgroundColor = "#99FF99",
  isActiate = false,
  ...props
}: KeyButtonProps) => {
  const baseBackgroundColor = "#f9f9f9";
  return (
    <button
      {...props}
      style={{
        color: "#000",
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        borderRadius: "0.5rem",
        border: `5px solid ${boarderColor}`,
        backgroundColor: isActiate ? backgroundColor : baseBackgroundColor,
        userSelect: "none",
      }}
      disabled={true}
    >
      {children}
    </button>
  );
};

export default KeyButton;
