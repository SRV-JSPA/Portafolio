import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function Estudios () {
  const [educacion, setEducacion] = useState([])
  const data = async () => {
    try {
      const info = await axios.get('http://localhost:3000/education')
      setEducacion(info.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    data()
  }, [])

  return (
    <div className="border-b border-neutral-900 pb-4" >
        <h2 className="my-20 text-center text-4xl" >Education</h2>
        <div>
          {educacion.map((edu, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center" >
              <div className="w-full lg:w-1/4" >
                <p className="mb-2 text-sm text-neutral-400" >{edu.year}</p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4" >
                <h6 className="mb-2 font-semibold" >
                  {edu.grade} - {" "} <span className="text-sm text-purple-100" >{edu.institution}</span>
                </h6>
                <p className="mb-4 text-neutral-400" >{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Estudios