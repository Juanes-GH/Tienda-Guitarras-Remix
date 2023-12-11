import { Link } from "@remix-run/react"
import Logo from "../../public/img/logo.svg"
import Navigation from "./navigation"

function Header() {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/">
          <img className="logo" src={Logo} alt="Imagen logo"/>
        </Link>
        <Navigation />
      </div>
    </header>
  )
}

export default Header