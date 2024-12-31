import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div
      style={{
        color: "#000",
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        borderRadius: "0.5rem",
        border: "none",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
