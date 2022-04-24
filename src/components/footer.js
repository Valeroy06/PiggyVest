import Images from "../img/Images";
import styles from "../styles/modules/footer.module.scss"

function Footer() {
    return (
        <footer>
            <div className={styles.class}>
                <h2>As Featured In</h2>
                <div>
                <img src={Images.forbes} className={styles.forbes} alt="forbes" />
                <img src={Images.techcrunch} className={styles.forbes} alt="techcrunch" />
                <img src={Images.theguardian} className={styles.forbes} alt="theguardian" />
                <img src={Images.techpoint} className={styles.forbes} alt="techpoint" />
                </div>
            </div>

        </footer>
    );
}

export default Footer;