import './App.css';
import data from "./database.json";
import React from "react";
import LearningGoalList from "./LearningGoalList";
import LearningGoal from "./LearningGoal";

function App() {

    // data.learningGoals = [];
    // const learningGoals = data.learningGoals;

    const learningGoals = [
        {
            "id": 1,
            "name": "Analyse",
            "skills": [
                {
                    "id": 1,
                    "name": "Architectuur: Meerlaagse Architectuur"
                },
                {
                    "id": 2,
                    "name": "Domeinmodellen"
                },
                {
                    "id": 2,
                    "name": "Klassendiagrammen"
                }
            ]
        },
        {
            "id": 2,
            "name": "Git",
            "skills": [
                {
                    "id": 1,
                    "name": "Repos"
                },
                {
                    "id": 2,
                    "name": "Cloning"
                },
                {
                    "id": 2,
                    "name": "commits"
                }
            ]
        },
        {
            "id": 3,
            "name": "Professionele vaardigheden",
            "skills": [
                {
                    "id": 1,
                    "name": "Communicatie"
                },
                {
                    "id": 2,
                    "name": "Feedback"
                },
                {
                    "id": 2,
                    "name": "Leadership"
                }
            ]
        },
    ]


    return (
        <>
            <div className="d-flex flex-column mb-3 Main-flex">

                <section className="d-flex flex-row mb-3 Semester-flex">
                    <LearningGoalList learningGoals={learningGoals}/>
                </section>

                <div className="d-flex mb-3"> Semester 2</div>

            </div>
        </>
    );
}

export default App;


