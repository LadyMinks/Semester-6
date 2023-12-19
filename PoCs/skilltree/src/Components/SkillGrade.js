import React from "react";
import '../SkillGradeStyle.css'

export default function SkillGrade({skill, skillRef, grades}) {

    const grade = "SK" + grades.get(skill.id.toString());

    return(
        <div className={grade}>
            <div className='flex-items'>

                <a
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={skill.name}
                    data-tooltip-place="top">

                    <div key={skill.id}
                         ref={skillRef}
                        // style={boxstyle2}>
                    >
                        {skill.id}

                    </div>
                </a>
            </div>
        </div>
    )
}