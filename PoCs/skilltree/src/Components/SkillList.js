import React from "react";
import Skill from "./Skill"


export default function SkillList({learningGoal, grade}) {
    switch (grade) {
        case grade.ORIENTATING:
            return (
                <div className="SKOrientating" key={learningGoal.id}>
                    {learningGoal.name}
                </div>
            )
        case grade.BEGINNING:
            return (
                <div className="SKBeginning" key={learningGoal.id}>
                    {learningGoal.name}
                </div>
            )
        case grade.PROFICIENT:
            return (
                <div className="SKProficient" key={learningGoal.id}>
                    {learningGoal.name}
                </div>
            )
        case grade.ADVANCED:
            return (
                <div className="SKPAdvanced" key={learningGoal.id}>
                    {learningGoal.name}
                </div>
            )
    }
}