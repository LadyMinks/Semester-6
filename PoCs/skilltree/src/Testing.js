import {useState, useEffect, useRef} from 'react';
import data from './db.json';
import studentData from './studentskills.json';
import Semester from "./Components/Semester";
import Header from "./Components/Header";
import "./App.css"

function Testing() {

    // This method is used to receive the selected student from the Header, which is then given to Semester.
    const [selectedStudent, setSelectedStudent] = useState(studentData[0]);

    return (
        <div className="App">
            {data.map((semester) => {
                if (semester.name === 'Semester 2 Software Engineering') {
                    return (
                        <div>
                            <Header studentData={studentData} setStudent={setSelectedStudent}/>
                            <Semester semester={semester} student={selectedStudent}/>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Testing;