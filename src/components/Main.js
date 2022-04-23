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

            <div className={styles.container}>
                <h2>
                    5 ways to build your <br /> savings
                </h2>
                <div className={styles.grid}>
                    <div className={styles.piggy}>
                        <img src={Images.piggybank_icon} className={styles.same} alt="piggybank_icon" />
                        <div className={styles.savings}>
                            <span>AUTOMATED SAVINGS</span><br />
                            <p>Build a dedicated savings faster on your terms automatically or manually.</p>
                        </div>
                    </div>
                    <div className={styles.piggy}>
                        <img src={Images.safelock_icon} className={styles.same} alt="safelock_icon" />
                        <div className={styles.savings}>
                            <span>FIXED SAVINGS</span><br />
                            <p>Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit</p>
                        </div>
                    </div>
                    <div className={styles.piggy}>
                        <img src={Images.Greendot} className={styles.same} alt="Greendot" />
                        <div className={styles.savings}>
                            <span>GOAL-ORIENTED SAVINGS</span><br />
                            <p>Reach all your savings goals faster. Save towards multiple goals on your own or with a group.</p>
                        </div>
                    </div>
                    <div className={styles.piggy}>
                        <img src={Images.naira_icon} className={styles.sames} alt="naira_icon" />
                        <div className={styles.savings}>
                            <span>FLEXIBLE SAVINGS</span><br />
                            <p>Save, transfer, withdraw, manage and organise your money for free at any time</p>
                        </div>
                    </div>
                    <div className={styles.piggy}>
                        <img src={Images.dollar_icon} className={styles.sames} alt="dollar_icon" />
                        <div className={styles.savings}>
                            <span>DOLLAR SAVINGS</span><br />
                            <p>Save in foreign currencies such as USD and Euros.</p>
                        </div>
                    </div>
                    <img src={Images.save_phone_min} className={styles.save_phone_min} alt="save_phone_min" />
                </div>
            </div>
            <div className={styles.invest}>
                <h2>Access investment <br /> opportunities</h2>
                <p>Grow your money confidently by investing in <br /> pre-vetted investment opportunities.</p>
                <span>Learn more about Investments</span>
            </div>
            <div className={styles.sect}>
                <h2>Loved by our Customers</h2>
                <div className={styles.containers}>
                    <div className={styles.child}>
                        <img src={Images.man_4} className={styles.man} alt="man_4" />
                        <div className={styles.pre}>
                            <p className={styles.par}>Piggyvest helps me and my family a lot and I'm happy about it. It's legit and trustworthy</p><br />
                            <small>EMMANUEL A.</small>
                        </div>
                    </div>
                    <div className={styles.child}>
                        <img src={Images.man_1} className={styles.man} alt="man_1" />
                        <div className={styles.pre}>
                            <p>At first, I thought it wasn't legit, but I have saved my sister's house rent here with piggyvest. Best savings platform</p><br />
                            <small>NWOSU N.</small>
                        </div>
                    </div>
                    <div className={styles.child}>
                        <img src={Images.man_2} className={styles.man} alt="man_2" />
                        <div className={styles.pre}>
                            <p>I initially refused to subscribe to this idea of e-piggybank though, I'm a fan of the physical one. Ever since I joined I've only had cause to ask for more....</p><br />
                            <small>BAMIDELE A.</small>
                        </div>
                    </div>
                    <div className={styles.child}>
                        <img src={Images.man_3} className={styles.man} alt="man_3" />
                        <div className={styles.pre}>
                            <p className={styles.par1}>I use piggyvest to invest a lot of business</p><br />
                            <small>OLOYEDE A.</small>
                        </div>
                    </div>
                </div>
                <h3>Read  more amazing stories</h3>
            </div>
            <div className={styles.section}>
                <img src={Images.people} className={styles.man} alt="people" />
                <div>
                    <h2>1,000,000+ customers</h2>
                    <p>Since launching in 2016, over 1,000,000 people have used PiggyVest to manage their money better, avoid over-spending and be more accountable
                    </p>
                    <button>Create A Free Account</button>
                </div>
            </div>
        </main>
    );
}

export default Main;
