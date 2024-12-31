interface ProgressProps {
  backgroundColor: string;
  length: number;
  index: number;
}

export const Progress = ({ backgroundColor, length, index }: ProgressProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {Array.from({ length: length }).map((_, i) => (
        <div
          style={{
            backgroundColor: i < index ? backgroundColor : "#f9f9f9",
            width: "100%",
            border: "solid",
            borderWidth: `5px ${length === i + 1 ? "5px" : "0px"} 5px 5px`,
            borderRadius: "0.5rem",
          }}
          key={i}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default Progress;
