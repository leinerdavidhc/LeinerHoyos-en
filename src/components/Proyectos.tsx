import axios from "axios";
import { useState, useEffect } from "react";
import { type ProyectosType } from "@/types.d";
export default function Proyectos() {
  const [data, setData] = useState<ProyectosType[]>([]);

  useEffect(() => {
    const GetData = async () => {
      const res = await axios.get("/ProyectosDataEn.json");
      setData(res.data);
    };
    GetData();
  }, []);
  return (
    <section className="mt-10 flex flex-col gap-4 p-4 " id="proyectos">
      <header className="flex flex-col justify-center items-center w-full gap-3">
        <h2 className="text-4xl font-semibold font-Oswal text-secondary">
        My projects
        </h2>
        <p className="text-base font-Poppins">
        Here you will find the projects that I have developed and contributed to.
        </p>
      </header>
      <section className="grid  md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-5">
        {data.map((proyectos) => (
          <article
            key={proyectos.id}
            className="bg-primary rounded-md shadow-md shadow-gray-400 h-56"
          >
            <div className="w-full h-full hover:translate-x-[0.4em] hover:translate-y-[-0.4em] transition-all duration-300 rounded-md border border-primary relative overflow-hidden">
              <img
                src={proyectos.img}
                alt={proyectos.title}
                className="w-full h-full object-fill absolute"
              />
              <div className="w-full h-full absolute z-[2] flex flex-col">
                <header className="h-1/2 bg-transparent flex gap-2 justify-end p-2">
                  {proyectos.stack.map((tecnologia, index) => (
                    <div
                      className="w-9 h-9 overflow-hidden rounded-full backdrop-blur-md p-1 bg-tecnologias"
                      key={index}
                    >
                      <img
                        src={tecnologia.img}
                        alt={tecnologia.name}
                        className="w-full h-full object-fill rounded-full"
                      />
                    </div>
                  ))}
                </header>
                <footer className="flex gap-2 justify-between items-center p-2 bg-blur backdrop-blur-sm w-full h-1/2">
                  <article className="flex flex-col">
                    <h4 className="text-xl font-semibold font-Oswal">
                      {proyectos.title}
                    </h4>
                    <p className="line-clamp-2 font-Poppins text-justify">
                      {proyectos.description}
                    </p>
                  </article>
                  <div className="flex items-center justify-center gap-2">
                    <a
                      href={proyectos.repository}
                      target="_blank"
                      className="text-3xl border border-secondary p-1 rounded-md hover:text-secondary transition-all duration-300"
                    >
                      <i className="bx bxl-github"></i>
                    </a>
                    <a
                      href={proyectos.site}
                      target="_blank"
                      className="text-3xl border border-secondary p-1 rounded-md hover:text-secondary transition-all duration-300"
                    >
                      <i className="bx bx-world"></i>
                    </a>
                    <a
                      href={`/proyecto/${proyectos.id}`}
                      className="text-3xl border border-secondary p-1 rounded-md hover:text-secondary transition-all duration-300"
                    >
                     <i className='bx bx-right-arrow-alt'></i>
                    </a>
                  </div>
                </footer>
              </div>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}
