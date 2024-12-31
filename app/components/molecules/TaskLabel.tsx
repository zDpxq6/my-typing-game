interface TaskDescriptionProps {
  title: string;
  description: string;
}

export const TaskDescription = ({
  title,
  description,
}: TaskDescriptionProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <p
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          margin: "0",
          textAlign: "center",
          width: "100%",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontSize: "16px",
          margin: "0",
          wordWrap: "break-word",
          textAlign: "left",
        }}
      >
        {description}
      </p>
    </div>
  );
};
