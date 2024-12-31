// 経過時間を受け渡すために使う型
export type ResultType = {
  id: string;
  typo: Map<string, { count: number; actuals: Set<string> }>;
  elapsedTime: number;
  correctAnswerRate: number;
  speed: number;
};

export type SettingsType = {
  showHint?: boolean;
  doShuffle?: boolean;
};
