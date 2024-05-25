import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import {motion} from 'framer-motion'

function Estudios () {
  const educacion = [{
    "id": 1,
    "year": "2006 - 2021",
    "grade": "Highschool",
    "institution": "Intellego Bilingual School",
    "description": "This was my school for more than 15 years and it is where I graduate from Highschool."
},
{
    "id": 2,
    "year": "2021 - 2023",
    "grade": "Web development courses",
    "institution": "Udemy",
    "description": "Took several courses about web development and QA Testing to improve my programming skills at Udemy."
},
{
    "id": 3,
    "year": "2021 - Today",
    "grade": "Computer Science & IT Engineering",
    "institution": "Universidad del Valle de Guatemala",
    "description": "I am currently in my third year of university, studying computer science and IT engineering, fulfilling my dream of studying this beautiful profession."
}]
  // const data = async () => {
  //   try {
  //     const info = await axios.get('http://localhost:3000/education')
  //     setEducacion(info.data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   data()
  // }, [])

  return (
    <div className="border-b border-neutral-900 pb-4" >
        <motion.h2 whileInView={{opacity: 1, y:0}} initial={{opacity:0, y:-100}} transition={{duration: 0.5}} className="my-20 text-center text-4xl" >Education</motion.h2>
        <div>
          {educacion.map((edu, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center" >
              <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration:1}} className="w-full lg:w-1/4" >
                <p className="mb-2 text-sm text-neutral-400" >{edu.year}</p>
              </motion.div>
              <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}} className="w-full max-w-xl lg:w-3/4" >
                <h6 className="mb-2 font-semibold" >
                  {edu.grade} - {" "} <span className="text-sm text-purple-100" >{edu.institution}</span>
                </h6>
                <p className="mb-4 text-neutral-400" >{edu.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Estudios