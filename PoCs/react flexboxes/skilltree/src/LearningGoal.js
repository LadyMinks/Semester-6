import './App.css';
import React from "react";
import SkillList from "./SkillList";

export default function ({learningGoal}){
    return (
        <div className="d-flex flex-col mb-3 align-content-stretch LearningGoal-flex">
            <div className="d-flex flex-row mb-3 Skill-flex justify-content-between">
                <div className="d-flex justify-content-center SingleSkill-flex">
                    <SkillList skills = {learningGoal.skills}/>
                </div>
            </div>

            <div className="p-20 d-flex justify-content-center">
                {learningGoal.name}
            </div>
        </div>
    )
}