import '../Components.css'
import Xarrow from "react-xarrows";
import {useRef} from "react";
import LearningGoalFlex from "./LearningGoalFlex";

export default function Semester({semester, student}) {

    let lgRef = useRef(1);
    let semesterRef = useRef(0)
    let lgID = 'g';

    return (
        <div className="SemesterFlex">
            <div className='parent'>

                <div className='child1'>
                    <div ref={semesterRef} className="SemesterStyle">
                        {semester.name}
                    </div>
                </div>

                <div className='child2'>
                    <div className="LearningGoalListFlex">
                        {semester.learningGoals.map((learningGoal) => {
                                lgRef.current = lgRef.current + 1;
                                return (
                                    <div>
                                        <div key={learningGoal.id} ref={lgRef}>
                                            <LearningGoalFlex learningGoal={learningGoal} student={student}/>
                                        </div>
                                        <Xarrow start={semesterRef}
                                                end={lgRef}
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