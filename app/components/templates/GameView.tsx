import Keyboard from "~/components/molecules/Keyboard";
import Card from "~/components/atoms/Card";
import InstructionArea from "~/components/organisms/InstructionArea";
import tasks from "~/data/tasks.json";
import { useEffect, useState } from "react";
import { Progress } from "~/components/molecules/Progress";
import { ResultType } from "~/types/ResultType";
import { useSettings } from "~/components/hooks/UseSettings";

const select = (tasks: any, id: string) => {
  for (const e of tasks) {
    if (e.id === id) {
      return e;
    }
  }
  throw new Error("Not Found");
};

// 小数点 decimalPlaces 桁目で四捨五入します
const rounding = (number: number, decimalPlacesToKeep: number = 1) => {
  const power = Math.pow(10, decimalPlacesToKeep);
  return Math.round(number * power) / power;
};

const getNextInput = (currentTopic: string, currentInput: string) => {
  //currentTopicとcurrentInputを比較して、一致する文字の次のindexの文字を返す
  for (let i = 0; i < currentTopic.length; i++) {
    if (currentTopic.toLowerCase()[i] !== currentInput.toLowerCase()[i]) {
      return { next: currentTopic[i] };
    }
  }
  return { end: true };
};

interface GameViewProps {
  selectedTaskId: string;
  onTaskComplete: (result: ResultType) => void;
  showHint?: boolean;
}

const shuffle = (array: any[]) => {
  const cloneArray = [...array];

  for (let i = cloneArray.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    // 配列の要素の順番を入れ替える
    [cloneArray[i], cloneArray[rand]] = [cloneArray[rand], cloneArray[i]];
  }

  return cloneArray;
};

export const GameView = ({ selectedTaskId, onTaskComplete }: GameViewProps) => {
  const { settings } = useSettings();
  const selectId = selectedTaskId;
  let { instruction, topics } = select(tasks.tasks, selectId); // データセットの選択
  if (settings.doShuffle) {
    topics = shuffle(topics);
  }
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0); // 課題番号の管理
  const [currentTopic, setCurrentTopic] = useState(topics[currentTopicIndex]); // 現在の課題文字列
  const [userInput, setUserInput] = useState(""); // 課題の変数化
  const [completed, setCompleted] = useState(false); // 課題の終了フラグ
  const [errors, setErrors] = useState<{ expect: string; actual: string }[]>(); // 課題の終了フラグ
  const [startTime, setStartTime] = useState<Date | null>(null); // 開始時間の記録
  const [allInputCount, setAllInputCount] = useState(0); // 総入力文字数の記録
  const [errorInputCount, setErrorInputCount] = useState(0); // 総誤入力文字数の記録

  useEffect(() => {
    setStartTime(new Date());
  }, []);

  const handleKeyDown = (e: any) => {
    // onKeyDownのコールバックとして設定。
    if (
      e.key !== "Enter" ||
      userInput.toLowerCase() !== currentTopic.spelling.toLowerCase()
    ) {
      // 終了条件と一致しない場合
      return;
    }
    // 終了条件と一致する場合
    setUserInput("");
    if (currentTopicIndex + 1 === topics.length) {
      // すべての問題が完了している場合
      setCompleted(true);
      // { expect: string, count: number, actuals: Set<string> }の形式で集計
      const typo = new Map();
      errors?.forEach(
        ({ expect, actual }: { expect: string; actual: string }) => {
          let currentCount = 0;
          let currentActuals = new Set<string>();
          if (typo.has(expect)) {
            const statistic = typo.get(expect);
            currentCount = statistic.count;
            currentActuals = new Set(statistic.actuals);
          }
          currentActuals.add(actual);
          const newValue = { count: currentCount + 1, actuals: currentActuals };
          typo.set(expect, newValue);
        }
      );
      const elapsedTime = (new Date().getTime() - startTime!.getTime()) / 1000;
      const result = {
        id: selectId,
        typo,
        correctAnswerRate: rounding(
          (1 - errorInputCount / allInputCount) * 100
        ),
        elapsedTime: rounding(elapsedTime),
        speed: rounding((allInputCount - errorInputCount) / elapsedTime),
      };
      onTaskComplete(result);
    }
    // 問題が残っている場合
    const newIndex = (currentTopicIndex + 1) % topics.length;
    setCurrentTopicIndex(newIndex);
    setCurrentTopic(topics[newIndex]);
  };

  const handleChange = (e: any) => {
    //入力後の状態
    const currentInput = e.target.value;
    setUserInput(currentInput);
    setAllInputCount(allInputCount + 1);
    checkInput(currentTopic.spelling, currentInput);
  };

  const checkInput = (topic: string, input: string) => {
    const diff = {
      expect: topic[input.length - 1],
      actual: input[input.length - 1],
    };
    if (!diff.expect || !diff.actual) {
      return;
    }
    if (diff.expect.toLowerCase() !== diff.actual.toLowerCase()) {
      const newErrors = errors ? [...errors, diff] : [diff];
      setErrors(newErrors);
      setErrorInputCount(errorInputCount + 1);
    }
  };

  return (
    <Card>
      <Progress
        backgroundColor="lime"
        length={topics.length}
        index={currentTopicIndex}
      />
      <div>{instruction}</div>
      <InstructionArea
        currentTopic={currentTopic}
        currentInput={userInput}
        showHint={settings.showHint}
      />
      <div style={{ margin: "1rem 0" }}>
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Keyboard activate={getNextInput(currentTopic.spelling, userInput)} />
    </Card>
  );
};
export default GameView;
