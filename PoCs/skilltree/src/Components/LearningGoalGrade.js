import '../LearningGoalGradeStyles.css'
import LearningGoal from "./LearningGoalFlex";


export default function LearningGoalGrade({learningGoals, student}) {
    return(
        <div className="d-flex flex-row">
            {learningGoals.map(learningGoal => <LearningGoal learningGoal={learningGoal} student={student}/>)}
        </div>
    )
}