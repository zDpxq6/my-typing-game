import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const SecondaryCard = ({ children }: CardProps) => {
  return (
    <div
      style={{
        flex: "0 0 30vw",
        height: "50vh",
        color: "#000",
        padding: "0.5rem 1rem",
        margin: "0.5rem 1rem",
        borderRadius: "0.5rem",
        border: "none",
        background: "#f9f9f9",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};

export default SecondaryCard;
