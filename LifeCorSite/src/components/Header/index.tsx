import React from "react";

import Lifecor from "../../assets/lifecor.png";
import cor from "../../assets/cor.png";
import { ContainerHeader } from "./style";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LottieAnimation } from "../LottieAnimations";

import frequencyHealth from "../../assets/lottie/health-frequency.json";
function Header() {
  return (
    <ContainerHeader>
      <div className="logo">
        <Link to="/">
          <img className="cor" src={cor} alt="" />
        </Link>

        <img className="lifeCor" src={Lifecor} alt="" />
      </div>

      <LottieAnimation
        animation={frequencyHealth}
        width={"10rem"}
        height={"5rem"}
      />

      <nav className="navigate">
        {/* <a href="http://wa.me/559581007912" target="_blank">
          <FaWhatsapp size={40} />
        </a> */}

        <a href="https://www.instagram.com/lifecor_rr" target="_blank">
          <svg width="40" height="40">
            ------------------------------- // add linearGradient
            <defs>
              <radialGradient id="instagram" r="150%" cx="30%" cy="107%">
                <stop stopColor="#fdf497" offset="0" />
                <stop stopColor="#fdf497" offset="0.05" />
                <stop stopColor="#fd5949" offset="0.45" />
                <stop stopColor="#d6249f" offset="0.6" />
                <stop stopColor="#285AEB" offset="0.9" />
              </radialGradient>
            </defs>
            --------------------------------------- //pass attr to react icon
            <FaInstagram size={40} />
          </svg>
        </a>
      </nav>
    </ContainerHeader>
  );
}

export { Header };
