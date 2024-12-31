import { useState } from "react";
import SelectTaskView from "~/components/templates/select-task-view";
import InitialView from "~/components/templates/initial-view";
import GameView from "~/components/templates/GameView";
import ResultView from "~/components/templates/ResultView";
import { ResultType } from "~/types/ResultType";
import SettingsView from "~/components/templates/SettingsView";
import CountdownView from "~/components/templates/CountdownView";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "My Typing Game" },
    { name: "description", content: "Welcome to a Typing Game!" },
  ];
};

export const Index = () => {
  // 同一パスでスクリーンを遷移させるため、スクリーンを状態として管理する
  const [currentScreen, setCurrentScreen] = useState("start");
  // 選択したタスクをスクリーン間で受け渡しするため、タスクIDを状態として管理する
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  // タスクの結果をスクリーン間で受け渡しするため、タスクIDを状態として管理する
  const [result, setResult] = useState<ResultType | null>(null);

  return (
    <div>
      {currentScreen === "start" && (
        <InitialView
          // TODO: ユーザー選択/作成機能を追加する
          // ドロップダウンリストでユーザを選択させる
          // ドロップダウンリストに自ユーザーがない場合は、新規作成を促す
          // ドロップダウンリストはindexDBからユーザー情報を取得する
          onSettingsClick={() => {
            // 設定画面に遷移するボタンを押したときの挙動
            setCurrentScreen("settings");
          }}
          onSelectingTaskClick={() => {
            // タスク選択画面に遷移するボタンを押したときの挙動
            setCurrentScreen("select");
          }}
        />
      )}
      {currentScreen === "settings" && (
        <SettingsView
          onBackClick={() => {
            // スタート画面に遷移するボタンを押したときの挙動
            setCurrentScreen("start");
          }}
        />
      )}
      {currentScreen === "select" && (
        <SelectTaskView
          onTaskClick={(selectedTaskId: string) => {
            // 選択されたタスクをセットする
            setSelectedTaskId(selectedTaskId);
            // タスクを選択し、ゲーム画面に遷移するときの挙動
            setCurrentScreen("countdown");
          }}
        />
      )}
      {currentScreen === "countdown" && (
        <CountdownView
          onCountdownEnd={() => {
            setCurrentScreen("game");
          }}
        />
      )}
      {currentScreen === "game" && selectedTaskId && (
        <GameView
          // 選択されたタスクをセットする
          selectedTaskId={selectedTaskId}
          // タスクをすべてこなし、結果画面に遷移するときの挙動
          onTaskComplete={(result) => {
            setResult(result);
            setCurrentScreen("result");
          }}
        />
      )}
      {currentScreen === "result" && result && (
        <ResultView
          result={result}
          onRetryClick={(selectedTaskId: string) => {
            // 選択されたタスクをセットする
            setSelectedTaskId(selectedTaskId);
            // タスクを選択し、ゲーム画面に遷移するときの挙動
            setCurrentScreen("game");
          }}
          onRestartClick={() => {
            setCurrentScreen("select");
          }}
        />
      )}
    </div>
  );
};

export default Index;
