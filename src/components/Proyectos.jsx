import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import blog from '../Images/proyecto_blog.png'
import p_bd from '../Images/p_bd.jpg'
import portafolio from '../Images/portafolio.png'
import {motion} from 'framer-motion'

const Proyectos = () => {

  const imagen = (nombre_imagen) => {
    const imagenes = {
      'blog': blog,
      'proyecto_bd': p_bd,
      'portafolio': portafolio
    }
    return imagenes[nombre_imagen];
  }

  const linkRepo = (nombre_proyecto) => {
    const repositorios = {
      'Personal cars blog': 'https://github.com/SRV-JSPA/P1_WEB.git',
      'Restaurant managment system': 'https://github.com/SRV-JSPA/P2_BD.git',
      'Portafolio': 'https://github.com/SRV-JSPA/Portafolio.git'
    }
    return repositorios[nombre_proyecto];
  }

    const [projects, setProjects] = useState([])
    const data = async () => {
      try {
        const info = await axios.get('http://localhost:3000/projects')
        setProjects(info.data)
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      data()
    }, [])

  return (
    <div className="border-b border-neutral-900 pb-4" >
        <motion.h2 whileInView={{opacity: 1, y:0}} initial={{opacity: 0, y:-100}} transition={{duration: 0.5}}  className="my-20 text-center text-4xl" >Projects</motion.h2>
        <div>
            {projects.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center" >
                  <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x:-100}} transition={{duration: 1}} className="w-full lg:w-1/4" >
                    <img src={imagen(project.image)}  width={300} height={300} alt="Proyecto blog"  className="mb-6 rounded" />
                  </motion.div>
                  <motion.div whileInView={{opacity:1, x:0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}}  className="w-full max-w-xl lg:3/4" >
                    <a className="mb-2 font-semibold cursor-pointer" href={linkRepo(project.title)} > {project.title}</a>
                    <p className="mb-4 mt-2 text-neutral-400" >{project.description}</p>
                    {project.technologies.map((tech, index) => (
                      <span key={index}  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900" >{tech}</span>
                    ))}
                  </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Proyectos