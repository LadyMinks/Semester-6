import Skill from "./Skill";

export default function SkillList({skills}){

    return(
        <section>
            {skills.map(skill => <Skill key ={skill.id} skill = {skill}/>)}
        </section>
    )
}