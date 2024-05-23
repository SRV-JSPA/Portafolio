import sobreMi from "../Images/sobreMi.jpeg";
import {motion} from 'framer-motion'

const SobreMi = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 0.5}} className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={sobreMi} alt="Sobre Mi" />
          </div>
        </motion.div>
        <motion.div  whileInView={{opacity: 1, x:0}} initial={{opacity:0, x:100}} transition={{duration:0.5}} className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6" >
              I am a dedicated self-taught and consistent person in work
              environments who likes to learn and improve my skills constantly.
              Thrilled about oportunities and challenges that allow me to use my
              skills and apply them to make it easily to solve problems to
              deliver high-quality solutions. I have worked with a variety of
              technologies including, React, Next.js, Mysql, PostgreSQL,
              MongoDB, Apollo, GraphQL, Nest.js among many others. Outside
              coding I love staying active with sports, socialize with other
              people improving my interpersonal relationships.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SobreMi;
