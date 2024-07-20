import React from "react";
import { Link } from "react-router-dom";


const Home = () => {

    return (
        <div className="home">
            <div>
                <h1>THE ONE STOP SHOP FOR VALO ACES</h1>
                <p>lorem ipsem Lorem Ipsum Lorem ipsum is placeholder text  lorem lorem lorem</p>
            </div>
            
                <Link to="/EYC"><button>SEE SKINS</button></Link>
            
        </div>
    )
}

export default Home;