export default function LOGO() {
  return (
    <a href="/" className="flex gap-3 z-[-1] text-[36px]">
          <span className="text-[1em] text-secondary font-Poppins">{"{"}</span>
          <div className="flex flex-col items-center justify-center">
            <h2
              className="whitespace-nowrap text-[0.5em] font-Oswal font-bold tracking-wider"
            >
              LHDEV
            </h2>
            <span className="text-secondary text-[0.25em] font-Poppins font-light"
              >Web developer</span>
          </div>
          <span className="text-[1em] text-secondary font-Poppins">{"}"}</span>
        </a>
  )
}
