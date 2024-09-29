import Logo from "../../assets/Reforço-removebg.png"

import "./style.css"

export const Header = () => {
    return (
        <div className="header">
            <img className="headerLogo" src={Logo} alt="Logo" />
        </div>
    )
}