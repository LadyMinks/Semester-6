import {useState, useEffect, useRef} from 'react';
import Xarrow from "react-xarrows";
import data from './db.json';
import studentData from './studentskills.json';
import {Tooltip} from 'react-tooltip';
import studentdata from "./studentskills.json";
import Header from "./Components/Header";
import Semester from "./Components/Semester";
import TestingHeader from "./Components/TestingHeader";


const header = {color: '#FFD700', fontSize: "55px"}

function Testing() {

    let semesterRef = useRef(0);

    const [selectedStudent, setSelectedStudent] = useState(studentData[0]);

    function getStudent(student){
        setSelectedStudent(student);
    }

    return (
        <div className="App">
            {data.map((semester) => {

                if (semester.name == 'Semester 2 Software Engineering') {

                    return (
                        <div>
                                    <TestingHeader studentData={studentData} getStudent={getStudent}/>

                                    {/*<div className="TopCorner"> Gedeeld met mij:*/}
                                    {/*    <select className="MarginLeft"*/}
                                    {/*            value={selects}*/}
                                    {/*            onChange={e => setSelects(e.target.value)}>*/}

                                    {/*        {studentdata.map((student) => {*/}
                                    {/*            return (<option>{student.name}</option>)*/}
                                    {/*        })}*/}
                                    {/*    </select>*/}
                                    {/*</div>*/}
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