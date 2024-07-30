import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const Home = () => {
    const [isLoggedin, setIsLoggedin] = useAuth();
    return (
        <div className="home">
            <div>
                <h1>THE ONE STOP SHOP FOR VALO ACES</h1>
                <p>lorem ipsem Lorem Ipsum Lorem ipsum is placeholder text  lorem lorem lorem</p>
            </div>
            
                <Link to={isLoggedin ? "/admin/EYC" : "/EYC"}><button>SEE SKINS</button></Link>
            
        </div>
    )
}

export default Home;