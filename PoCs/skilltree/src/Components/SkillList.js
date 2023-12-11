import React from "react";
import Skill from "./Skill"
export default function SkillList({skills}){
    return(
        <div>
            {skills.map(skill => <Skill key={skill.id} skill = {skill}/>)}
        </div>
    )
}