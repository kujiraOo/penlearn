import styles from './App.module.css';
import Container from './components/container/Container';
import Main from './main/Main';

const App = () => (
  <Container>
    <h1 className={styles.header}>
      Random Wars
    </h1>
    <Main />
  </Container>
);

export default App;
