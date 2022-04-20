import Images from "../img/Images";

function Header() {
    return (
        <header>
            <img src={Images.PiggyVest} alt="Piggyvest" />
            <div className="nav">
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