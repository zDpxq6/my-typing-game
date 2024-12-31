import { Countdown } from "~/components/organisms/Countdown";

interface CountdownViewProps {
  onCountdownEnd: () => void;
}

export const CountdownView = ({ onCountdownEnd }: CountdownViewProps) => {
  return <Countdown max={3} interval={500} onGameStart={onCountdownEnd} />;
};
export default CountdownView;
