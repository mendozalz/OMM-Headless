import styles from "./SvgContainer.module.css";

const SvgContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default SvgContainer;
