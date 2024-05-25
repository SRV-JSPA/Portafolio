import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import {motion} from 'framer-motion'
import useMeasure from "react-use-measure";

const iconos = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  }
})

const Tecnologias = () => {
  let [ref, {width}] = useMeasure();

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2   whileInView={{opacity: 1, x:0}} initial={{opacity: 0, x: -100}} transition={{ duration: 1.5, delay:0.5 }} className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div whileInView={{opacity: 1, x:0}} initial={{opacity: 0, x: -100}} transition={{ duration: 1.5, delay:1 }} className="flex flex-wrap items-center justify-center gap-4" ref={ref}>
        <motion.div variants={iconos(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconos(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div variants={iconos(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div variants={iconos(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-700" />
        </motion.div>
        <motion.div variants={iconos(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div variants={iconos(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNestjs className="text-7xl text-red-700" />
        </motion.div>
        <motion.div variants={iconos(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <GrMysql className="text-7xl text-orange-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tecnologias;
