import styles from './App.module.css';
import Main from './main/Main';

const App = () => (
  <div className={styles.container}>
    <h1 className={styles.header}>
      Random Wars
    </h1>
    <Main />
  </div>
);

export default App;
