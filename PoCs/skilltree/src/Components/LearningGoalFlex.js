import SkillGrade from "./SkillGrade";
import Xarrow from "react-xarrows";
import {useRef, useState} from "react";
import LearningGoalGrade from "./LearningGoalGrade";

export default function LearningGoalFlex({learningGoal, student}) {

    const [grade, setGrade] = useState([])

    let lgRef = useRef(0);
    let skillRef = useRef(1);

    const grades = new Map();
    const gradeList = student.studentskills;

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

                <div className='child22'>
                    <div className="SkillListFlex">
                        {learningGoal.skills.map((skill) => {
                            skillRef.current = skillRef.current + 1;
                            return (
                                <div>
                                    <div key={skill.id} ref={skillRef}>
                                        <SkillGrade skill={skill} grades={grades}/>
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