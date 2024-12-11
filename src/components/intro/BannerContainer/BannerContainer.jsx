import styles from "./BannerContainer.module.css";

const BannerContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default BannerContainer;
