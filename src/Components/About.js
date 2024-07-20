import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import VAlorentImage from "../Images/ValorentImage.png";



const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="about-container-main">
      <div className="about-profile-container">
        {/* used ternary condition to Show my profile and Hide my Profile and using nested routing */}
        {show ? (
          <>
            <Link to={"/about"}>
              <button
                className="about-profile-button"
                onClick={() => setShow(false)}
              >
                Hide My Profile
              </button>
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to={"profile"}>
            <button
              className="about-profile-button"
              onClick={() => setShow(true)}
            >
              Show My Profile
            </button>
          </Link>
        )}

      </div>
      <div className="about-container">
        <div className="about-left">
          <h1>
            Welcome to <br /> The world of <br />
            <span>Valorent & Gallery</span>
          </h1>
          <h4>
          "Step into adventure and art, where <span>Excitement</span> and creativity collide."
          </h4>
        </div>
        <div className="about-right">
          <img src={VAlorentImage} alt="Food Image" />
        </div>
      </div>
    </div>
  );
};

export default About;
