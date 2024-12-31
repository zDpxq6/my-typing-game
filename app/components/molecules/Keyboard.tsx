import KeyButton from "~/components/atoms/KeyButton";
import { KeyRow } from "./KeyRow";

const little = { boarderColor: "#FF0099", backgroundColor: "red" };
const ring = { boarderColor: "#FFFF99", backgroundColor: "yellow" };
const middle = { boarderColor: "#CCFFFF", backgroundColor: "aqua" };
const index = { boarderColor: "#99FF99", backgroundColor: "lime" };

const firstRow = [
  { text: "1", style: little },
  { text: "2", style: ring },
  { text: "3", style: middle },
  { text: "4", style: index },
  { text: "5", style: index },
  { text: "6", style: index },
  { text: "7", style: index },
  { text: "8", style: middle },
  { text: "9", style: ring },
  { text: "0", style: little },
  { text: "-", style: little },
];

const secondRow = [
  { text: "Q", style: little },
  { text: "W", style: ring },
  { text: "E", style: middle },
  { text: "R", style: index },
  { text: "T", style: index },
  { text: "Y", style: index },
  { text: "U", style: index },
  { text: "I", style: middle },
  { text: "O", style: ring },
  { text: "P", style: little },
];

const thirdRow = [
  { text: "A", style: little },
  { text: "S", style: ring },
  { text: "D", style: middle },
  { text: "F", style: index },
  { text: "G", style: index },
  { text: "H", style: index },
  { text: "J", style: index },
  { text: "K", style: middle },
  { text: "L", style: ring },
];

const fourthRow = [
  { text: "Z", style: little },
  { text: "X", style: ring },
  { text: "C", style: middle },
  { text: "V", style: index },
  { text: "B", style: index },
  { text: "N", style: index },
  { text: "M", style: index },
  { text: ",", style: middle },
];

interface KeyBoardProps {
  activate: { end?: boolean; next?: string };
}

export const KeyBoard = ({ activate }: KeyBoardProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <KeyRow row={firstRow} activate={activate} />
        <KeyRow row={secondRow} activate={activate} />
        <KeyRow row={thirdRow} activate={activate} />
        <KeyRow row={fourthRow} activate={activate} />
      </div>
      <KeyButton
        boarderColor="#FF0099"
        backgroundColor="red"
        isActiate={activate.end}
      >
        Enter
      </KeyButton>
    </div>
  );
};
export default KeyBoard;
