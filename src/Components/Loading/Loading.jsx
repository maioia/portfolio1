import styles from "./Loading.module.css";
const Loading = () => {
  console.log(styles.loader);
  return (
    <div className="fixed inset-0 bg-white/70 flex justify-center items-center z-50">
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loading;
