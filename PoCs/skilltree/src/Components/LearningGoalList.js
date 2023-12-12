import '../LearningGoalGradeStyles.css'
import Xarrow from "react-xarrows";

export default function LearningGoalList({learningGoal, grade}) {
    switch (grade) {
        case grade.ORIENTATING:
            return (
                <div className="LGOrientating" key={learningGoal.id}>
                    {learningGoal.name}
                </div>
            )
        case grade.BEGINNING:
            return (
                <div className="LGBeginning" key={learningGoal.id}>
                    {learningGoal.name}
                </div>
            )
        case grade.PROFICIENT:
            return (
                <div className="LGProficient" key={learningGoal.id}>
                    {learningGoal.name}
                </div>
            )
        case grade.ADVANCED:
            return (
                <div className="LGPAdvanced" key={learningGoal.id}>
                    {learningGoal.name}
                </div>
            )
    }
}