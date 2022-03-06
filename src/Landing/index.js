import Header from "../Components/Header/index.js";
import background_pic from './assets/landing_cover.png'



const Landing = () => {
    return (
        <div className = "main">
            <Header />
            <div>
                <img src={background_pic}  alt="cover"  width="100%"/>
            </div>
        </div>
        

    )
}


export default Landing;