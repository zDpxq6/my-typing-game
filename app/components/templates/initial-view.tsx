import Title from "~/components/atoms/title";
import classes from "./initial-view.module.css";
import Button from "@mui/material/Button";

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
      <Button className="button" onClick={onSettingsClick}>
        せってい
      </Button>
      <Title>スタートがめん</Title>
      <div className={classes.buttonContainer}>
        <Button className="button" disabled={true}>
          ログイン
        </Button>
        <Button className="button" onClick={onSignUpClick}>
          サインアップ
        </Button>
        <Button className="button" onClick={onSelectingTaskClick}>
          もんだいをえらぶ
        </Button>
      </div>
    </div>
  );
};

export default InitialView;
