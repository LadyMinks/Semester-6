import './App.css';
import data from "./database.json";
import React from "react";
import LearningGoalList from "./LearningGoalList";
import LearningGoal from "./LearningGoal";

data.learningGoals = [];

function App() {

    const learningGoals = data.learningGoals;

    return (
        <>
            <div className="d-flex flex-column mb-3 Main-flex">

                <div className="d-flex flex-row mb-3 Semester-flex">

                    <div className="d-flex flex-row mb-3 Semester-flex">

                        <LearningGoalList learningGoals={learningGoals}/>
                    </div>
                </div>

                <div className="d-flex mb-3"> Semester 2</div>

            </div>
        </>
    );
}

export default App;


