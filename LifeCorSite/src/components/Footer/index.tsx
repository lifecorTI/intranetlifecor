import React from "react";
import { FooterContainer } from "./style";

function Footer() {
  return (
    <FooterContainer>
      <div>
        <div>
          <h2>Convênios</h2>
          <ul>
            <li>GEAP</li>
            <li>SUS</li>
            <li>PARTICULAR</li>
            <li>FUSEX</li>
            <li>UNIMED</li>
          </ul>
        </div>
        <div>
          <h2>Parceiros</h2>
          <ul>
            <li>
              <a href="https://www.instagram.com/endocardiorr/">Endocardio</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Contato</h2>
          <ul>
            <li>
              <p>(95) 9 8100-7912</p>
            </li>
            <li>
              <p>lifecor.rr.smm@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
}

export { Footer };
