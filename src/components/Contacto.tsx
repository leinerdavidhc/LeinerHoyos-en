export default function Contacto() {
  return (
    <section className="mt-10 flex items-center justify-center" id="contacto">
      <div className="bg-bgOp flex md:flex-row flex-col gap-4 rounded-md shadow-md shadow-primary p-3 md:w-[60%]">
        <article className="md:w-1/2 bg-secondary rounded-md p-3 flex flex-col gap-4">
          <h1 className="text-3xl font-semibold font-Oswal text-center">
            ¿TIENES UN PROYECTO? ESTOY DISPONIBLE VAMOS A HABLAR.
          </h1>
          <p className="text-base font-Poppins w-full text-justify">
            Si tienes alguna duda o quieres contactarme, envíame un mensaje
          </p>
          <ul>
            <li className="flex items-center justify-center w-max">
              <a
                href="https://www.facebook.com/leinerdavid.hoyoscabrera.10"
                className="text-lg hover:text-background transition-all duration-300"
                target="_blank"
              >
                <i className="bx bxl-facebook text-2xl"></i> Facebook
              </a>
            </li>
            <li className="flex items-center justify-center w-max">
              <a
                href="https://github.com/leinerdavidhc"
                className="text-lg hover:text-background transition-all duration-300"
                target="_blank"
              >
                <i className="bx bxl-github text-2xl"></i> Github
              </a>
            </li>
            <li className="flex items-center justify-center w-max">
              <a
                href="https://linkedin.com/in/leinerdavidhc/"
                className="text-lg hover:text-background transition-all duration-300"
                target="_blank"
              >
                <i className="bx bxl-linkedin-square text-2xl"></i> Linkedin
              </a>
            </li>
            <li className="flex items-center justify-center w-max">
              <a
                href="mailto:leinerdavidhc20@gmail.com"
                className="text-lg hover:text-background transition-all duration-300"
                target="_blank"
              >
                <i className="bx bxs-envelope text-2xl"></i> Email
              </a>
            </li>
            <li className="flex items-center justify-center w-max">
              <a
                href="https://wa.me/573114245409?text=Hola,%20quiero%20contactarte"
                className="text-lg hover:text-background transition-all duration-300"
                target="_blank"
              >
                <i className="bx bxl-whatsapp text-2xl"></i> Whatsapp
              </a>
            </li>
            <li className="flex items-center justify-center w-max">
              <a
                href="https://www.instagram.com/leinerhoyos_/"
                className="text-lg hover:text-background transition-all duration-300"
                target="_blank"
              >
                <i className="bx bxl-instagram text-2xl"></i> Instagram
              </a>
            </li>
          </ul>
        </article>
        <form action="" className="flex flex-col gap-3 md:w-1/2">
        <div className="flex justify-between items-center bg-background w-full p-1 rounded-md border border-primary" id="iputdiv">
            <div className="flex flex-col">
              <label className="text-sm px-2" htmlFor="nombre">
                Nombres
              </label>
              <input
                type="text"
                name="nombre"
                className="bg-transparent text-sm px-2 placeholder:text-secondary text-secondary outline-none border-none group"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <i className="bx bxs-user text-lg"></i>
          </div>
          <div className="flex justify-between items-center bg-background w-full p-1 rounded-md border border-primary">
            <div className="flex flex-col">
              <label className="text-sm px-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="bg-transparent text-sm px-2 placeholder:text-secondary text-secondary outline-none border-none"
                placeholder="Ingresa tu email"
              />
            </div>
            <span className="text-lg">@</span>
          </div>
          <div className="flex justify-between items-center bg-background w-full p-1 rounded-md border border-primary">
            <div className="flex flex-col">
              <label className="text-sm px-2" htmlFor="telefono">
                Teléfono
              </label>
              <input
                type="tel"
                name="telefono"
                className="bg-transparent text-sm px-2 placeholder:text-secondary text-secondary outline-none border-none"
                placeholder="Ingresa tu teléfono"
              />
            </div>
            <i className='bx bxs-phone'></i>
          </div>

          <div className="flex justify-between items-center bg-background w-full p-1 rounded-md border border-primary">
            <div className="flex flex-col">
              <label className="text-sm px-2" htmlFor="asunto">
                Asunto
              </label>
              <input
                type="text"
                name="asunto"
                className="bg-transparent text-sm px-2 placeholder:text-secondary text-secondary outline-none border-none"
                placeholder="¿Sobre qué quieres hablar?"
              />
            </div>
            <i className='bx bx-question-mark'></i>
          </div>
          <div className="flex flex-col bg-background w-full p-1 rounded-md border border-primary">
            <label className="text-sm px-2" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              cols={30}
              rows={10}
              placeholder="Escribe tu mensaje"
              className="resize-none bg-transparent text-sm px-2 placeholder:text-secondary text-secondary outline-none border-none"
            ></textarea>
          </div>
          <button className="p-2 bg-secondary text-primary rounded-md hover:opacity-70 transition-all duration-300">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
}
