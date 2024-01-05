import {useState} from "react";
import Header from "./Header";


export default function TestingHeader({studentData, getStudent}) {

    const [selectedStudent, setSelectedStudent] = useState();

    return (
        <div className="flex-items flex-row">

            <div>
                <select value={selectedStudent}
                        onChange={e => {
                            setSelectedStudent(e.target.value);
                            getStudent(studentData[e.target.value]);
                        }}>

                    {studentData.map((student, index) => {
                        return (<option value={index}>{student.name}</option>)
                    })}
                </select>
            </div>

            <div>
                <Header/>
            </div>
        </div>

    )
}