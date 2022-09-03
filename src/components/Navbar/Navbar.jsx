import "./Navbar.css";
import {
  FaBars, FaBookReader,FaBell,FaBlackTie,FaGrinAlt,FaBattleNet,FaUserAlt, FaInfo, FaFacebook, FaLinkedin, FaTwitter,FaInstagram} from "react-icons/fa";
  import { FaAngleDoubleUp } from "react-icons/fa";
  import { BsCircle } from "react-icons/bs";
  import { FiGrid } from "react-icons/fi";
  import { GrAnalytics } from "react-icons/gr";
const Navbar = () => {
  return (
    <div className="sections">
      <div>
        <div className="logo">
          <div className="main_logo">
            <FaAngleDoubleUp className="icons" />
            <p>SmartUp</p>
          </div>
          <div>
            <FaBars />
          </div>    
        </div>

        <div className="profile">
          <div>
            <FaBookReader />
            <span>Profile</span>
          </div>
          <div>
            <span>12</span>
            <FaBell className="bell" />
          </div>
        </div>

        <div className="profile discover">
          <div>
            <FiGrid />
            <span>Discover</span>
          </div>
          <div className="shade">
            <span>24</span>
          </div>
        </div>
        <div className="profiles">
          <div>
            <BsCircle />
            <span>StartUp</span>
          </div>
        </div>

        <div className="profiles">
          <div>
            <FaBlackTie />
            <span>
              <a href="#">Main community</a>
            </span>
          </div>
        </div>

        <div className="profiles">
          <div>
            <FaGrinAlt />
            <span>
              <a href="#">Fun community</a>
            </span>
          </div>
        </div>

        <div className="profiles">
          <div>
            <FaBattleNet/>
            <span>
              <a href="#">Tech community</a>
            </span>
          </div>
        </div>

        <div className="profiles">
          <div>
            <GrAnalytics />
            <span>
              <a href="#">Lead community</a>
            </span>
          </div>
        </div>

        <div className="profiles">
          <div>
            <FaUserAlt />
            <span>Personal</span>
          </div>
        </div>

        <div className="personal">
          <span>In progress</span>
          <span>180</span>
        </div>

        <div className="personal">
          <span>Completed</span>
          <span>48</span>
        </div>

        <div className="personal">
          <span>Read later</span>
          <span>24</span>
        </div>
      </div>

      <div className="nav_links">
        <div className="logo_info">
          <div>
            <FaInfo />
          </div>
          <div>
            <a href="#">About StartUp</a>
          </div>
        </div>

        <div className="link">
          <p>
            <a href="#">Send feedback</a>
          </p>
        </div>
        <div className="link">
          <p>
            <a href="#">Terms of use</a>
          </p>
        </div>
        <div className="link">
          <p>
            <a href="#">Privacy Policy</a>
          </p>
        </div>

        <div className="socail_links">
          <span>
            <a href="#">
              <FaLinkedin />
            </a>
          </span>
          <span>
            <a href="#">
              <FaFacebook />
            </a>
          </span>
          <span>
            <a href="#">
              <FaTwitter />
            </a>
          </span>
          <span>
            <a href="#">
              <FaInstagram />
            </a>
          </span>
        </div>

        <div className="rights">
          <a href="#"> @ 2022 SmartUp </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
