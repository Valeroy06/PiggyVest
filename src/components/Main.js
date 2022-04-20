import Images from "../img/Images";
import styles from "../styles/modules/main.module.scss"

function Main() {
    return (
        <main>
            <div className={styles.best}>
                <img src={Images.Justin} className={styles.Justin} alt="Justin" />
                <div className={styles.save}>
                    <h1>The Best way <br/>
                        to Save & Invest</h1>
                    <p>PiggyVest helps over 1 million customers achieve their financial goals by helping them save and invest with ease.</p>
                    <button>Create A Free Account</button>
                </div>
                <img src={Images.Aisha} className={styles.Aisha} alt="Aisha" />
            </div>
            <div className={styles.imgs}>
                <img src={Images.Angela} alt="Angela" />
                <div>
                    <img src={Images.App_Store} alt="App_Store" />
                    <img src={Images.Google_play} alt="Google_play" />
                </div>
                <img src={Images.kola} alt="kola" />

            </div>


        </main>
    );
}

export default Main;