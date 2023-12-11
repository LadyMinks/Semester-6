import '../LearningGoalGradeStyles.css'
import Xarrow from "react-xarrows";

export default function LearningGoals({learningGoal, grade, id, ref}) {
    switch (grade) {
        case "orientating":
            return (
                <div className="LGOrientating" key={learningGoal.id} id={id} ref={ref}>
                    {learningGoal.name}
                </div>
            )
        case "beginning":
            return (
                <div className="LGBeginning" key={learningGoal.id} id={id} ref={ref}>
                    {learningGoal.name}
                </div>
            )
        case "proficient":
            return (
                <div className="LGProficient" key={learningGoal.id} id={id} ref={ref}>
                    {learningGoal.name}
                </div>
            )
        case "advanced":
            return (
                <div className="LGPAdvanced" key={learningGoal.id} id={id} ref={ref}>
                    {learningGoal.name}
                </div>
            )
        default:
            <div>
                {learningGoal.name}
            </div>
    }
}