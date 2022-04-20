import Images from "../img/Images";
import styles from "../styles/modules/header.module.scss"

function Header() {
    return (
        <header>
            <img src={Images.PiggyVest} alt="Piggyvest" />
            <div className={styles.nav}>
                <a href="/">Save</a>
                <a href="/">Invest</a>
                <a href="/">Stories</a>
                <a href="/">FAQs</a>
                <a href="/">Login</a>
            </div>
            <button>Create A Free Account</button>



        </header>
    );
}

export default Header;