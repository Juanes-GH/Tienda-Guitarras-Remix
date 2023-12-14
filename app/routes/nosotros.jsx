import imagen from "../../public/img/nosotros.jpg"
import styles from "../styles/nosotros.css"

export function meta(){
  return (
    [
      {
        title: 'GuitarLA - Sobre Nosotros',
        descripcion: 'Venta de guitarras, blog de música'
      }
    ]
  )
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'preload',
      href: imagen,
      as:'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
        
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum tristique odio, vel sagittis sapien gravida nec. Ut varius sagittis egestas. Morbi at auctor mauris, sed porttitor tortor. Aliquam volutpat vel sapien vitae lobortis. Duis maximus tincidunt elementum. Donec consectetur tincidunt massa, eu finibus dui sodales sed. Nullam non neque at ligula volutpat maximus et sit amet magna. Nulla faucibus velit nec ipsum vulputate eleifend ut a nunc.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum tristique odio, vel sagittis sapien gravida nec. Ut varius sagittis egestas. Morbi at auctor mauris, sed porttitor tortor. Aliquam volutpat vel sapien vitae lobortis. Duis maximus tincidunt elementum. Donec consectetur tincidunt massa, eu finibus dui sodales sed. Nullam non neque at ligula volutpat maximus et sit amet magna. Nulla faucibus velit nec ipsum vulputate eleifend ut a nunc.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros