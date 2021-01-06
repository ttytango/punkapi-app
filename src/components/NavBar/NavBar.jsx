import React, { useContext } from "react";
import styles from "./NavBar.module.scss";

import { Link } from "@reach/router";
import { UserContext } from "../../context/UserContext";

const NavBar = () => {
    const userContext = useContext(UserContext);
    const { signIn, signOut, user } = userContext;

    const getSignInOutJsx = () => {
        return user ? (
            <span>
        <h3 className={styles.link} onClick={signOut} >Sign Out</h3>
      </span>
        ) : (
            <span>
          <h3 className={styles.link} onClick={signIn} >Sign in</h3>
        </span>
        );
    };


    return (
        <nav className={styles.navFlex} >
            <Link to="/ticket-tracker">
                <div className={styles.titleArea} >
                        <header className={styles.header} >
                            <h1 className={styles.title}>Ticket Tracker</h1>
                        </header>
                </div>
            </Link>
            <Link to="/beers">
                <div className={styles.titleArea} >
                    <h1 className={styles.title}>Punk Api!</h1>
                </div>

            </Link>


            {getSignInOutJsx()}
            <Link to="/login">
                <h3>Login</h3>
            </Link>
            <Link to="/beyond">
                <h3>Beyond</h3>
            </Link>
        </nav>
    );
};

//   return (
//     <nav className={styles.navBar}>
//         <ul className={styles.navLinkList}>
//             <Link to="/">
//                 <li>Home</li>
//             </Link>
//             <Link to="/beers">
//                 <li>Beers</li>
//             </Link>
//         </ul>
//
//     </nav>
//   );
// };

export default NavBar;
