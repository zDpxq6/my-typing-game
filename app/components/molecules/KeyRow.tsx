import { KeyButton } from "../atoms/KeyButton";

type KeyRowProps = {
  row: {
    text: string;
    style: { boarderColor: string; backgroundColor: string };
  }[];
  activate: { next?: string; end?: boolean };
};

export const KeyRow = ({ row, activate }: KeyRowProps) => {
  return (
    <div>
      {row.map((e, i) => (
        <KeyButton
          key={i}
          boarderColor={e.style.boarderColor}
          backgroundColor={e.style.backgroundColor}
          isActiate={e.text.toLowerCase() === activate.next?.toLowerCase()}
        >
          {e.text}
        </KeyButton>
      ))}
    </div>
  );
};
