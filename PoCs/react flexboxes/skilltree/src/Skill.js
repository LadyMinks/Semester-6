import './App.css';
import React from "react";

export default function Skill ({skill}) {
    return (
        <div className="d-flex flex-row mb-3 Skill-flex justify-content-between">
            <div className="d-flex justify-content-center SingleSkill-flex">{skill.name}</div>
        </div>
    )
}