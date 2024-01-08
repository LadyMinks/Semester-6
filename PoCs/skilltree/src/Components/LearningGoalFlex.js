import SkillGrade from "./SkillGrade";
import Xarrow from "react-xarrows";
import {useRef, useState} from "react";
import LearningGoalGrade from "./LearningGoalGrade";

// LearningGoalFlex needs the learningGoal it needs to display and the selected student.
export default function LearningGoalFlex({learningGoal, student}) {

    // Refs are necessary to connect the arrows. lgRef (learningGoalRef) is where the arrow starts and skillRef
    // is where the arrow has to go to.
    let lgRef = useRef(0);
    let skillRef = useRef(1);

    // gradeList is a list of objects, consisting of a skillID and a grade.
    const gradeList = student.studentskills;

    // Grades is a Map consisting of a key: the skillID and a value: the skill grade.
    const grades = new Map();
    gradeList.forEach(skill =>
        grades.set(skill.id, skill.skill1)
    );

    return (
        <div className="SingleLearningGoalFlex ">
            <div className='parent2'>

                <div className='child21'>
                    <div ref={lgRef} id={"learningGoalId"}>
                        <LearningGoalGrade learningGoal={learningGoal} grades={grades}/>
                    </div>
                </div>

                {/*For every skill in the current learningGoal, the skillRef will be increased by one and the
                following components will be made: a SkillGrade and an arrow connecting the two.*/}
                <div>
                    <div className="SkillListFlex">
                        {learningGoal.skills.map((skill) => {
                            skillRef.current = skillRef.current + 1;
                            return (
                                <div>
                                    <div key={skill.id} ref={skillRef}>
                                        <SkillGrade skill={skill} grade={grades.get(skill.id.toString())}/>
                                    </div>
                                    <Xarrow start={lgRef}
                                            end={skillRef}
                                            startAnchor={'top'}
                                            endAnchor={'bottom'}
                                            path={'smooth'}
                                            color='#8f5a46'
                                            strokeWidth={10}
                                            showHead={false}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}