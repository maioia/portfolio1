import styles from "./Loading.module.css";
const Loading = () => {
  return (
    <>
      <main className="flex justify-center items-center min-h-screen">
        <div class={styles.loader}></div>
      </main>
    </>
  );
};

export default Loading;
