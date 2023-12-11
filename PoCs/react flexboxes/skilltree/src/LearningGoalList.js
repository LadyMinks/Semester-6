import LearningGoal from "./LearningGoal";
import learningGoal from "./LearningGoal";
import data from "./database.json";

export default function LearningGoalList({learningGoals}){

    return (
        <section className="d-flex flex-row mb-3 Semester-flex">
            {learningGoals.map(learningGoal => <LearningGoal key={learningGoal.id} learningGoal = {learningGoal}/>)}
        </section>
    )
}