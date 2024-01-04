import {useState, useEffect, useRef} from 'react';
import Xarrow from "react-xarrows";
import data from './db.json';
import studentData from './studentskills.json';
import {Tooltip} from 'react-tooltip';
import studentdata from "./studentskills.json";
import Header from "./Components/Header";
import Semester from "./Components/Semester";


const header = {color: '#FFD700', fontSize: "55px"}

function Testing() {
    let studentObject
    const [selects, setSelects] = useState();
    let semesterRef = useRef(0);


    return (
        <div className="App">
            {data.map((semester) => {
                if (selects == undefined) {
                    studentObject = studentdata.find(e => e.name == 'Antonio');
                }
                if (selects !== undefined) {
                    studentObject = studentdata.find(e => e.name == selects);
                }

                if (semester.name == 'Semester 2 Software Engineering') {

                    return (
                        <div>

                                    <Header></Header>

                                    <div className="TopCorner"> Gedeeld met mij:
                                        <select className="MarginLeft" value={selects}
                                                onChange={e => setSelects(e.target.value)}>

                                            {studentdata.map((student) => {
                                                return (<option>{student.name}</option>)
                                            })}
                                        </select>
                                    </div>
                                    <div >
                                        <Semester semester={semester} student={studentObject}>
                                        </Semester>
                                    </div>
                        </div>

                    )
                }
            })}

        </div>
    )
}

export default Testing;