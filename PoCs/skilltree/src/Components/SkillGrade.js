import React, {useState} from "react";
import '../SkillGradeStyle.css'
import {Tooltip} from "react-tooltip";

export default function SkillGrade({skill, grades}) {

    const grade = "SK" + grades.get(skill.id.toString());

    return (
        <div className={grade}>
            <div className='flex-items'>

                <a
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={skill.name}
                    data-tooltip-place="top">

                    <div key={skill.id}>
                        {skill.id}
                    </div>
                </a>

                <Tooltip id="my-tooltip"/>

            </div>
        </div>
    )
}