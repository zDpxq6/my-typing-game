import Character from "~/components/atoms/Character";

interface InstructionAreaProps {
  currentTopic: { title: string; spelling: string };
  currentInput: string;
  showHint?: boolean;
}

export const InstructionArea = ({
  currentTopic,
  currentInput,
  showHint,
}: InstructionAreaProps) => {
  return (
    <div style={{ margin: "1rem 0" }}>
      <p>{currentTopic.title}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {currentTopic.spelling.split("").map(
          (e, i) =>
            showHint && (
              <Character
                key={i}
                isInput={
                  currentTopic.spelling.toLowerCase()[i] ===
                  currentInput.toLowerCase()[i]
                }
              >
                {e}
              </Character>
            )
        )}
      </div>
    </div>
  );
};

export default InstructionArea;
