import Images from "../img/Images";

function Main() {
    return (
        <main>
            <div>
                <img src={Images.Justin} alt="Justin" />
                <div>
                    <h2>The Best way
                        to Save & Invest</h2>
                    <p>PiggyVest helps over 1 million customers achieve their financial goals by helping them save and invest with ease.</p>
                    <button>Create A Free Account</button>
                </div>
                <img src={Images.Aisha} alt="Aisha" />
            </div>
            <div>
                <img src={Images.Angela} alt="Angela" />
                <div>
                    <img src={Images.Angela} alt="Angela" />
                    <img src={Images.Angela} alt="Angela" />
                </div>
                <img src={Images.Angela} alt="Angela" />

            </div>


        </main>
    );
}

export default Main;