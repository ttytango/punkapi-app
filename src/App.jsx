import logo from './logo.svg';
import styles from './App.module.scss';
import "./data/fa-library";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes";

function App() {
  return (
      <>
        <div className={styles.appNavBar}>
          <NavBar />
        </div>
        <section className={styles.appMainContent}>
          <Routes />
        </section>
      </>
  );
}

export default App;
