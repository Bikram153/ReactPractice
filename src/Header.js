import React from "react"
import Logo from "./React-icon.png"
import Style from "./style.css"

export default function Header() {
    return(
            <header>
                <nav ClassName="nav">
                    <img src={Logo} className="nav-logo" />
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
    )
}