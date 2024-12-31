import { ReactNode } from "react";

type CharacterProps = {
  children: ReactNode;
  isInput?: boolean;
};

export const Character = ({ children, isInput = false }: CharacterProps) => {
  const baseBackgroundColor = "#f9f9f9";
  return (
    <p
      style={{
        color: "#000",
        padding: "0.5rem 0.5rem",
        fontSize: "1rem",
        border: "none",
        background: isInput ? "lime" : baseBackgroundColor,
        margin: "0",
      }}
    >
      {children}
    </p>
  );
};

export default Character;
