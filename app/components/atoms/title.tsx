import classes from "./title.module.css";

export const Title = ({ children }: { children: React.ReactNode }) => {
  return <p className={classes.title}>{children}</p>;
};

export default Title;
