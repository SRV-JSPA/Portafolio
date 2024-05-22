import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function Estudios () {
  const [educacion, setEducacion] = useState([])
  const data = async () => {
    try {
      const info = await axios.get('http://localhost:3000/education')
      setEducacion(info.data)
      console.log(educacion );
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
    </div>
  )
}

export default Estudios