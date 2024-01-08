import '../Components.css'
import Xarrow from "react-xarrows";
import {useRef} from "react";
import LearningGoalFlex from "./LearningGoalFlex";

// Semester needs the current semester and the selected student.
export default function Semester({semester, student}) {

    // Refs are necessary to connect the arrows. SemesterRef is where the arrow starts and lgRef (learningGoalRef)
    // is where the arrow has to go to.
    let semesterRef = useRef(0)
    let lgRef = useRef(1);

    return (
        <div className="SemesterFlex">
            <div className='parent'>

                <div className='child1'>
                    <div ref={semesterRef} className="SemesterStyle">
                        {semester.name}
                    </div>
                </div>

                {/*For every LearningGoal in the current semester, lgRef will increase by one and the following components will be made.
                    LearningGoalFlex will make the flexbox with the necessary components and the Xarrow will connect the two components*/}
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
                                            strokeWidth={30}
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