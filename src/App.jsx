import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes";
import { UserProvider } from "./context/UserContext";

function App() {
  // return (
//       <>
//         <section className={styles.appNavBar}>
//           <NavBar />
//         </section>
//         <section className={styles.appMainContent}>
//           <Routes />
//         </section>
//       </>
//   );
// }
return (
    <>
    <UserProvider>
        <section className={styles.nav} >
            <NavBar />
        </section>

        <section className={styles.content}>
            <Routes />

        </section>
        </UserProvider>
    </>
    );
}

export default App;
