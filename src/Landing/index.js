import Header from "../Components/Header/index.js";
import background_pic from './assets/landing_cover.png'
function Home () {
    return (
        <div>
            <Header/>
            <div>
                <img src={background_pic}  alt="cover" />
            </div>
        </div>
        

    )
}


export default Home;