import './App.css';
import React from "react";

export default function Skill ({skill}) {
    return (
        <div className="d-flex flex-row mb-3 SingleSkill-flex justify-content-between">
            <div className="d-flex justify-content-center">{skill.name}</div>
        </div>
    )
}