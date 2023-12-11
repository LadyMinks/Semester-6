import Skill from "./Skill";

export default function SkillList({skills}){

    return(
        <section className="d-flex flex-row mb-3 SkillList-flex ">
            {skills.map(skill => <Skill key ={skill.id} skill = {skill}/>)}
        </section>
    )
}