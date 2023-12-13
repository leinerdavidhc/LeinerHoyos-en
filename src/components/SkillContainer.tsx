import {type Skill} from "@/types.d"

export default function SkillContainer({Skills}:{Skills:Skill[]}) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-10 gap-5 md:w-[70%] w-[80%] ">
      {
        Skills.map((skill,index) =>(
          <article key={index} className="bg-background hover:bg-primary border border-primary rounded-md shadow-md shadow-gray-400 flex flex-col items-center transition-all duration-300">
            <a href={skill.link} className="flex flex-col items-center justify-center p-4 gap-2 w-full bg-background border-primary border translate-x-[0.4em] translate-y-[-0.4em] rounded-md transition-all duration-300 hover:translate-x-[0.5em] hover:translate-y-[-0.5em]">
              <img src={skill.icon} alt={skill.name} className="w-24 h-24 overflow-hidden rounded-md"/>
              <h3 className="text-2xl font-Montserrat font-semibold">{skill.name}</h3>
            </a>
          </article>
        ))
      }
    </section>
  )
}
