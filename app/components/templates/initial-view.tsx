import Title from "~/components/atoms/title";
import classes from "./initial-view.module.css";

interface InitialViewProps {
  onSelectingTaskClick: () => void;
  onSignUpClick: () => void;
  onSettingsClick: () => void;
}

export const InitialView = ({
  onSelectingTaskClick,
  onSignUpClick,
  onSettingsClick,
}: InitialViewProps) => {
  return (
    <div>
      <button className="button" onClick={onSettingsClick}>
        せってい
      </button>
      <Title>スタートがめん</Title>
      <div className={classes.buttonContainer}>
        <button className="button" disabled={true}>
          ログイン
        </button>
        <button className="button" onClick={onSignUpClick}>
          サインアップ
        </button>
        <button className="button" onClick={onSelectingTaskClick}>
          もんだいをえらぶ
        </button>
      </div>
    </div>
  );
};

export default InitialView;
