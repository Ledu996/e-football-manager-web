import Header from "../Components/Header/index.js";

function Home () {
    return (
        <div>
            <Header/>
            <div>
                <img src={require("./assets/landing_cover.png")}  alt="cover" />
            </div>
        </div>
        

    )
}


export default Home;