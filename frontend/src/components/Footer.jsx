import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaGithub,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>D/204 Adishwarnagar Naroda,Ahemedabad-382330</li>
            <li>malavparekh97@gmail.com</li>
            <li>+92 7573051360</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/jobs"}>Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="https://github.com/Malav3077" target="_blank">
                <span>
                  <FaGithub />
                </span>
                <span>Github (X)</span>
              </a>
            </li>
            <li>
             <a href="https://www.instagram.com/malav_._3077._/" target="_blank">
                <span>
                  <FaSquareInstagram />
                </span>
                <span>Instagram</span>
              </a>
            </li>
            {/* <li>
              <a href="https://github.com/Malav3077" target="_blank">

                <span>
                  <FaYoutube />
                </span>
                <span>Youtube</span>
              </a>
            </li> */}
            <li>
                <a href="https://www.linkedin.com/in/malav-parekh-937139292/" target="_blank">

                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; CopyRight 2024. All Rights Reserved By Malav
      </div>
    </>
  );
};

export default Footer;
