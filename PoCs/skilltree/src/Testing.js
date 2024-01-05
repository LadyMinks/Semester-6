import {useState, useEffect, useRef} from 'react';
import Xarrow from "react-xarrows";
import data from './db.json';
import studentData from './studentskills.json';
import {Tooltip} from 'react-tooltip';
import studentdata from "./studentskills.json";
import Semester from "./Components/Semester";
import Header from "./Components/Header";


const header = {color: '#FFD700', fontSize: "55px"}

function Testing() {

    let semesterRef = useRef(0);

    const [selectedStudent, setSelectedStudent] = useState(studentData[0]);

    return (
        <div className="App">
            {data.map((semester) => {

                if (semester.name == 'Semester 2 Software Engineering') {

                    return (
                        <div>

                                    <Header studentData={studentData} setStudent={setSelectedStudent}/>

                                    <div >
                                        <Semester semester={semester} student={selectedStudent}/>
                                    </div>
                        </div>

                    )
                }
            })}

        </div>
    )
}

export default Testing;