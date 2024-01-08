import {useState} from "react";
import tree from "../tree.png";
import '../Components.css'

// Header needs studentData.json and the method setStudent. The returned value will be given back to its parent.
export default function Header({studentData, setStudent}) {

    // Necessary to determine the student needed for the semester. Returned value will be given back to its parent.
    const [selectedStudent, setSelectedStudent] = useState();

    return (
        <div className="d-flex flex-row HeaderFlex">

            <div className="p-2 flex-grow-1 TopCorner">
                <label> Gedeeld met mij:
                    <select className="MarginLeft"
                            value={selectedStudent}
                            onChange={e => {
                                setSelectedStudent(e.target.value);
                                setStudent(studentData[e.target.value]);
                            }}>

                        {studentData.map((student, index) => {
                            return (<option value={index}>{student.name}</option>)
                        })}
                    </select>
                </label>
            </div>

            <div className="p-2 Header">
                <div className="flex-container2">
                    <img src={tree}
                         alt="Tree"/>
                    <div>Skilltree</div>
                    <img src={tree}
                         alt="Tree"/>
                </div>
            </div>
        </div>
    )
}