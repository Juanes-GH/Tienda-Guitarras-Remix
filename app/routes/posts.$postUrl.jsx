import { Link, useLoaderData } from '@remix-run/react'
import { getPost } from '../models/posts.server'
import { formatearFecha } from '../utils/helpers'
import styles from "../styles/blog.css"

export function links(){
    return (
        [
            {
                rel:'stylesheet',
                href: styles
            }
        ]
    )
}

export function meta({ data }){
    return (
        [
            {
                title: `GuitarLA - ${data.data[0].attributes.titulo}`,
                description: `Blog, post ${data.data[0].attributes.titulo}`
            }
        ]
    )
}


export async function loader({ params }){
    const { postUrl } = params

    const post = await getPost(postUrl)
    
    if(post.data.length === 0){
    throw new Response('',{
        status: 404,
        statusText: ' Post no econtrada'
        })
    }

    return post
}

function post() {
    const post = useLoaderData()

    const { contenido, imagen, titulo, publishedAt } = post?.data[0].attributes

  return (
    <div className='contenedor post'>
        <img className='imagen' src={imagen?.data?.attributes?.formats.medium.url} alt={`Imagen del post ${titulo}`} />

        <div className='contenido'>
            <h3>{titulo}</h3>
            <p className='fecha'>{formatearFecha(publishedAt)}</p>
            <p className='texto'>{contenido}</p>
                <Link className='enlace' to={'/posts'}>
                Volver al Blog
                </Link>
        </div>
    </div>
  )
}

export default post