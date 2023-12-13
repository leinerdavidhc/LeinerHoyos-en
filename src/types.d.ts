export type StackType = { img: string; name: string };

export type ProyectosType = {
  id: number;
  title: string;
  description: string;
  img: string;
  repository: string;
  site: string;
  stack:StackType[];
};

export type Skill = {
    name: string;
    icon: string;
    link: string;
}
