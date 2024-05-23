import {motion} from 'framer-motion'

const Contacto = () => {
  const contacto = {
    direccion: 'Km 25.5 Los Encinos Condominio, Casa E-18, Choacorral, San Lucas Sacatepéquez.',
    numero: '+502 3713-8670',
    email: 'jspereira0402@gmail.com'
  }
  return (
    <div className="border-b border-neutral-900 pb-20" >
        <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 0.5}} className="my-10 text-center text-4xl" >Get in Touch</motion.h2>
        <div className="text-center tracking-tighter" >
          <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}  className="my-4" >{contacto.direccion}</motion.p>
          <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}} className="my-4" >{contacto.numero}</motion.p>
          <motion.a whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contacto.email}`} target="_blank" rel="noopener noreferrer" className="border-b">{contacto.email}</motion.a>
        </div>
    </div>
  )
}

export default Contacto