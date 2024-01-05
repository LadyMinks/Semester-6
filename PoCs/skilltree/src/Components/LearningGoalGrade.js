import '../LearningGoalGradeStyles.css'
import LearningGoal from "./LearningGoalFlex";
import {useEffect, useState} from "react";
import '../LearningGoalGradeStyles.css'


export default function LearningGoalGrade({ learningGoal, grades}) {

    const [grade, setGrade] = useState([])

    const skills = learningGoal.skills;

    const lgGrades = [];

    skills.forEach(skill =>

        lgGrades.push(grades.get(skill.id.toString()))
    );

    function getGrades() {
        if (lgGrades.includes('Orienting')) {
            setGrade('LGOrientating');
        } else if (lgGrades.includes('Beginning')) {
            setGrade('LGBeginning');
        } else if (lgGrades.includes('Proficient')) {
            setGrade('LGProficient');
        } else if (lgGrades.includes('Advanced')) {
            setGrade('LGAdvanced');
        }
    }

    useEffect(() => {
        getGrades()
    })

    return (
        <div>

            <div className={grade}>
                {learningGoal.name}
            </div>
        </div>
    )
}