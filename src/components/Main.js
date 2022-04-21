import Images from "../img/Images";
import styles from "../styles/modules/main.module.scss";

function Main() {
    return (
        <main>
            <div className={styles.best}>
                <img src={Images.Justin} className={styles.Justin} alt="Justin" />
                <div className={styles.save}>
                    <h1>
                        The Best way <br />
                        to Save & Invest
                    </h1>
                    <p>
                        PiggyVest helps over 1 million customers achieve their financial
                        goals by helping them save and invest with ease.
                    </p>
                    <button>Create A Free Account</button>
                </div>
                <img src={Images.Aisha} className={styles.Aisha} alt="Aisha" />
            </div>
            <div className={styles.imgs}>
                <img src={Images.Angela} alt="Angela" />
                <div className={styles.stores}>
                    <img
                        src={Images.App_Store}
                        className={styles.App_Store}
                        alt="App_Store"
                    />
                    <img src={Images.Google_play} alt="Google_play" />
                </div>
                <img src={Images.kola} alt="kola" />
            </div>
            <div className={styles.secure}>
                <h2>Security Comes First</h2>
                <div className={styles.content}>
                    <div className={styles.key}>
                        <img src={Images.key_icon} alt="key_icon" />
                        <p>
                            PiggyVest uses the highest levels of Internet Security, and it is
                            secured by 256 bits SSL security encryption to ensure that your
                            information is completely protected from fraud.
                        </p>
                    </div>
                    <div className={styles.preloader}>
                        <img src={Images.Preloader_icon} className={styles.Preloader_icon} alt="Preloader_icon" />
                        <p>
                            Two-factor authentication (2FA) by default on all PiggyVest
                            accounts, to securely protect you from unauthorised access and
                            impersonation.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
