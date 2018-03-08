import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const logoUrl =
      "https://static.wixstatic.com/media/2879e1_a34a3c0bf5ee4c3bb7bea153aad14b69~mv2.png/v1/fill/w_292,h_72,al_c,usm_0.66_1.00_0.01/2879e1_a34a3c0bf5ee4c3bb7bea153aad14b69~mv2.png";
    return (
      <header id="navbar">
        <img src={logoUrl} alt="logo" />
        <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
