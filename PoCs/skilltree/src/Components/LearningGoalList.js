import '../LearningGoalGradeStyles.css'
import LearningGoal from "./LearningGoal";


export default function LearningGoalList({learningGoals, student}) {
    return(
        <div className="d-flex flex-row">
            {learningGoals.map(learningGoal => <LearningGoal learningGoal={learningGoal} student={student}/>)}
        </div>
    )
}