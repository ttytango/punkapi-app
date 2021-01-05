import logo from './logo.svg';
import styles from './App.module.scss';
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes";

function App() {
  return (
      <>
        <section className={styles.appNavBar}>
          <NavBar />
        </section>
        <section className={styles.appMainContent}>
          <Routes />
        </section>
      </>
  );
}

export default App;
