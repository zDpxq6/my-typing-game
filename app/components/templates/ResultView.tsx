import { ResultType } from "~/types/ResultType";

interface ResultViewProps {
  result: ResultType;
  onRetryClick: (id: string) => void;
  onRestartClick: () => void;
}

export const ResultView = ({
  result,
  onRetryClick,
  onRestartClick,
}: ResultViewProps) => {
  const { typo, elapsedTime, correctAnswerRate, speed } = result;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <p style={{ fontSize: "2rem" }}>きろく</p>
      <p style={{ fontSize: "1.5rem" }}>タイム</p>
      <p>{`${elapsedTime} びょう`}</p>
      <p>{`正かいりつ ${correctAnswerRate} ぱーせんと`}</p>
      <p>{`正かいを一文字うつのに 平きん ${speed} びょうかかっています`}</p>
      {typo && typo.size > 0 ? (
        <div>
          <p style={{ fontSize: "1.5rem" }}>まちがった入力</p>
          <table style={{ margin: "0 auto" }}>
            <thead>
              <tr>
                <th>正かい</th>
                <th>まちがい</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(typo).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{Array.from(value.actuals).join(",")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p style={{ fontSize: "1.5rem" }}>ぜんもん正かい</p>
      )}
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <button style={{ margin: "10px" }} onClick={onRestartClick}>
          もんだいをえらぶ
        </button>
        <button onClick={() => onRetryClick(result.id)}>
          もう一どちょうせんする
        </button>
      </div>
    </div>
  );
};
export default ResultView;
