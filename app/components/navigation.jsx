import { Link, useLocation } from "@remix-run/react"
import carritoImg from '../../public/img/carrito.png'

function Navigation() {
    const location = useLocation() 
  return (
    <nav className="navegacion">
        <Link 
            to="/"
            className={location.pathname === '/'? 'active':''}
        >Inicio</Link>
        <Link 
            to="/nosotros"
            className={location.pathname === '/nosotros'? 'active':''}
        >Nosotros</Link>
            
        <Link 
            to="/guitarras"
            className={location.pathname === '/guitarras'? 'active':''}
        > Tienda</Link>
        <Link 
            to="/posts"
            className={location.pathname === '/posts'? 'active':''}
        > Blog</Link>

        <Link 
         to="/carrito" 
         >
            <img src={carritoImg} alt="imagen del carrito" />
         </Link>
        
  </nav>

  )
}

export default Navigation