import { useState } from "react"
import { Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    isRouteErrorResponse,
    useRouteError,
    Link } from "@remix-run/react"
import styles from "./styles/index.css"
import Header from "./components/header"
import Footer from "./components/footer"

export function meta({error}){
    return (
        [      
            {
                charset: 'utf-8',
                title: 'GuitarLa - Remix',
                viewport: "width=device-width,initial-scale=1"
            }
        ]    
    )
}

export function links(){
    return [
        {
            rel:'stylesheet',
            href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
        },
        {
            rel:'stylesheet',
            href: styles
        },
        {
            rel:'preconnect',
            href:"https://fonts.googleapis.com"
        },
        {
            rel:'preconnect',
            href:"https://fonts.gstatic.com",
            crossOrigin:'true'
        },
        {
            rel:'stylesheet',
            href:"https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap"
        }
    ]
}

export default function App (){

    const [carrito, setCarrito] = useState([]) 


    const agregarCarrito = guitarra => {
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
            // Iterar sobre el arreglo, e identificar el elemento duplicado
            const carritoActualizado = carrito.map(guitarraState => {
                if(guitarraState.id === guitarra.id){
                    // Reescribe la cantidad
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            // Añadir al carrito
            setCarrito(carritoActualizado)
        }else{
            //Registro nuevo agregar al carrito
            setCarrito([...carrito, guitarra])
        }
    }

    const actualizarCantidad = guitarra =>{
        const carritoActualizado = carrito.map(guitarraState =>{
            if(guitarraState.id === guitarra.id){
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
    }

    return (
        <Document>
            <Outlet 
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad
                }}
            />
        </Document>
    )
}

function Document({children}){
    return (
        <html>
            <head lang="es">
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

// !!-- Manejo de errores -- !!
export function ErrorBoundary() {
    const error = useRouteError();
  
    if (isRouteErrorResponse(error)){
        return (
            <Document>
              <p className="error">{error?.status}{error?.statusText}</p>
              <Link className="error-enlace" to="/">Tal vez quieras volver a la pagina principal</Link>
            </Document>
          )      
    }
  }
  