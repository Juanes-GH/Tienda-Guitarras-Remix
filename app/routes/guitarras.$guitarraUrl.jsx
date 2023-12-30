import { useLoaderData, Link } from '@remix-run/react'
import { getGuitarra } from '../models/guitarras.server'


export function meta({data}){

  return(
    [
      {
        title: `GuitarLA - ${data.data[0].attributes.nombre}`,
        descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
      }
    ]
  )
}


export async function loader({ params }){

  const { guitarraUrl } = params

  const guitarra = await getGuitarra( guitarraUrl )

  //EN caso de no econtrase la guitarra lanzar este error
  if(guitarra.data.length === 0 ){
    throw new Response('',{
      status: 404,
      statusText: ' Guitarra no econtrada'
    })
  }

  return guitarra
}


function Guitarra() {

  const guitarra = useLoaderData()

  const { nombre, descripcion, imagen, precio }  = guitarra.data[0].attributes

  return (
    <div className='guitarra'>
      <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

      <div className='contenido'>
        <h3>{nombre}</h3>
        <p className='texto'>{descripcion}</p>
        <p className='precio'>${precio}</p>

        <form className='formulario'>
          <label htmlFor='cantidad'>Cantidad</label>

          <select id='cantidad'>
            <option value="">-- Sleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type='submit' value='Agregar al carrito'/>
        </form>
        <Link className="enlace" to={"/guitarras"}>
          Volver a todas las gitarras
        </Link>
      </div>

    </div>
  )
}

export default Guitarra