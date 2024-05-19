import perfil from "../Images/perfil.png";

const Entrada = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Santiago Pereira
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter" >
              I am a passionate full stack developer with a solid ambition to
              complete projects more efficiently with consistent quality using
              both my programming and communication skills. I have knowledge in
              the latest front-end technologies such as React and Next.js, as
              well as back-end technologies such as Node.js, PostgreSQL,
              MongoDB, Express.js, Nest.js among many others. My goal is to
              build scalable ans sustainable projects that drive business
              growth.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8" >
            <div className="flex justify-center " >
                <img src={perfil} alt="Perfil" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Entrada;
