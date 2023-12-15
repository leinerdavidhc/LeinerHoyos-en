import { className } from "./Button";
export default function Contacto() {
  return (
    <section
      className="mt-10 mx-4 flex flex-col justify-center items-center"
      id="contacto"
    >
      <article className="w-full border-2 border-primary rounded-md overflow-hidden shadow-md shadow-gray-400 lg:w-[70%] md:w-[80%]">
        <header className="w-full flex justify-start items-center flex-row gap-2 bg-primary p-2">
          <div className="bg-red-600 w-5 h-5 rounded-full"></div>
          <div className="bg-yellow-400 w-5 h-5 rounded-full"></div>
          <div className="bg-green-500 w-5 h-5 rounded-full"></div>
        </header>
        <div className="flex md:flex-row flex-col gap-4 justify-center items-center p-3">
          <article className="md:w-1/2 w-full flex flex-col gap-4">
            <h3 className="text-4xl font-Oswal font-semibold text-secondary">
              Contáctame
            </h3>
            <p className="text-2xl font-Poppins">
              ¡No dudes en contactarme para cualquier consulta, oportunidad
              laboral o colaboración!
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center justify-center w-max hover:text-secondary transition-all duration-300">
                <a
                  href="https://linkedin.com/in/leinerdavidhc/"
                  className="flex justify-center items-center gap-1"
                  target="_blank"
                >
                  <i className="bx bxl-linkedin-square text-2xl"></i>Leiner
                  David Hoyos Cabrera
                </a>
              </li>

              <li className="flex items-center justify-center w-max hover:text-secondary transition-all duration-300">
                <a
                  href="https://wa.me/573114245409?text=Hola,%20quiero%20contactarte"
                  className="flex justify-center items-center gap-1"
                  target="_blank"
                >
                  <i className="bx bxl-whatsapp text-2xl"></i> +57 3114245409
                </a>
              </li>
              <li className="flex items-center justify-center w-max hover:text-secondary transition-all duration-300">
                <a
                  href="mailto:leinerdavidhc20@gmail.com"
                  className="flex justify-center items-center gap-1"
                  target="_blank"
                >
                  <i className="bx bxs-envelope text-2xl"></i>{" "}
                  Leinerdavidhc20@gmail.com
                </a>
              </li>
            </ul>
          </article>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="flex flex-col gap-4 md:w-1/2 w-full p-3 items-center"
          >
            <div className="bg-primary border border-primary rounded-md shadow-md shadow-primary lg:w-[90%] w-full">
              <input
                type="text"
                placeholder="Ingresa tu nombre"
                name="nombre"
                className="bg-background border border-primary rounded-md w-full p-2 outline-none focus:translate-x-[0.4em] focus:translate-y-[-0.4em] active:translate-x-[0.4em] active:translate-y-[-0.4em] placeholder-no-show transition-all duration-300 placeholder:text-secondary text-secondary"
              />
            </div>
            <div className="bg-primary border border-primary rounded-md shadow-md shadow-primary lg:w-[90%] w-full">
              <input
                type="email"
                placeholder="Ingresa tu email"
                name="email"
                className="bg-background border border-primary rounded-md w-full p-2 outline-none focus:translate-x-[0.4em] focus:translate-y-[-0.4em] active:translate-x-[0.4em] active:translate-y-[-0.4em] placeholder-no-show transition-all duration-300 placeholder:text-secondary text-secondary"
              />
            </div>
            <div className="bg-primary border border-primary rounded-md shadow-md shadow-primary lg:w-[90%] w-full">
              <input
                type="text"
                placeholder="¿Sobre qué quieres hablar?"
                name="asunto"
                className="bg-background border border-primary rounded-md w-full p-2 outline-none focus:translate-x-[0.4em] focus:translate-y-[-0.4em] active:translate-x-[0.4em] active:translate-y-[-0.4em] placeholder-no-show transition-all duration-300 placeholder:text-secondary text-secondary"
              />
            </div>
            <div className="bg-primary border border-primary rounded-md shadow-md shadow-primary lg:w-[90%] w-full">
              <textarea
                placeholder="Escribe tu mensaje"
                name="mensaje"
                className="bg-background border border-primary rounded-md w-full p-2 outline-none focus:translate-x-[0.4em] focus:translate-y-[-0.4em] active:translate-x-[0.4em] active:translate-y-[-0.4em] placeholder-no-show transition-all duration-300 placeholder:text-secondary text-secondary"
                rows={10}
                cols={30}
              ></textarea>
            </div>
            <button className={className} type="submit">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}
