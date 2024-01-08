import '../SkillGradeStyle.css'
import {Tooltip} from "react-tooltip";

// SkillGrade needs the current skill and the corresponding grade.
export default function SkillGrade({skill, grade}) {

    // "SK" is added to grade, to match the styling name.
    const skillGrade = "SK" + grade;

    return (
        <div className={skillGrade}>
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