import '../LearningGoalGradeStyles.css'
import LearningGoal from "./LearningGoalFlex";
import {useEffect, useState} from "react";
import '../LearningGoalGradeStyles.css'

//LearningGoalGrade needs the current learningGoal and the map of grades.
export default function LearningGoalGrade({ learningGoal, grades}) {

    const [grade, setGrade] = useState([])

    // List of skills within the current learningGoal.
    const skills = learningGoal.skills;

    // lgGrades is a new array, consisting of the values in the gradesMap. This array is therefore a list of all the
    // grades that belong to the current learningGoal.
    const lgGrades = [];
    skills.forEach(skill =>
        lgGrades.push(grades.get(skill.id.toString()))
    );

    // to determine the proper grade for the learningGoal, we check if lgGrades contains each available gradeName.
    // if this returns true, setGrade will take the gradeName and add 'LG' to it, to match the styleNames.
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