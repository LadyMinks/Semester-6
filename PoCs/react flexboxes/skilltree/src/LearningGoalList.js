import LearningGoal from "./LearningGoal";

export default function LearningGoalList({learningGoals}){

    return (
        <section className="d-flex flex-row mb-3 Semester-flex">
            {learningGoals.map(learningGoal => <LearningGoal key={learningGoal.id} learningGoal = {learningGoal}/>)}
        </section>
    )
}