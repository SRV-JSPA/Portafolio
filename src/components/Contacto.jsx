

const Contacto = () => {
  const contacto = {
    direccion: 'Km 25.5 Los Encinos Condominio, Casa E-18, Choacorral, San Lucas Sacatepéquez.',
    numero: '+502 3713-8670',
    email: 'jspereira0402@gmail.com'
  }
  return (
    <div className="border-b border-neutral-900 pb-20" >
        <h2 className="my-10 text-center text-4xl" >Get in Touch</h2>
        <div className="text-center tracking-tighter" >
          <p className="my-4" >{contacto.direccion}</p>
          <p className="my-4" >{contacto.numero}</p>
          <a href="#" className="border-b">{contacto.email}</a>
        </div>
    </div>
  )
}

export default Contacto