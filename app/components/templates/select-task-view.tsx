import SecondaryCard from "~/components/atoms/SecondaryCard";
import tasks from "~/data/tasks.json"; // tasks.jsonをインポート
import { TaskDescription } from "../molecules/TaskLabel";
import classes from "./select-task-view.module.css";

interface SelectTaskViewProps {
  onTaskClick: (id: string) => void;
}

export const SelectTaskView = ({
  onTaskClick: onSelectTask,
}: SelectTaskViewProps) => {
  const loaderData = tasks.tasks;

  return (
    <div className={classes.selectTaskViewContainer}>
      {loaderData.map((e) => (
        <div
          key={e.id}
          className={classes.cardWrapper}
          onClick={() => onSelectTask(e.id)}
        >
          <SecondaryCard>
            <TaskDescription title={e.name} description={e.description} />
          </SecondaryCard>
        </div>
      ))}
    </div>
  );
};

export default SelectTaskView;
