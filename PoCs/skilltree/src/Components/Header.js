import tree from "../tree.png";
import '../App.css'
import studentData from "../studentskills.json";
import {useState} from "react";
import data from "../db.json";

export default function Header() {

    let dropDownStudents = [{value: "Antonio", label: 'Antonio'}, {
        value: "Ilias",
        label: 'Ilias'
    }, {value: "Sebastiaan", label: 'Sebastiaan'}]
    const [selects, setSelects] = useState();

    let studentObject

    return (
        <div>
            {data.map((semester) => {
                if (selects === undefined) {
                    studentObject = studentData.find(e => e.name === 'Antonio');
                }
                if (selects !== undefined) {
                    studentObject = studentData.find(e => e.name === selects);
                }

                if (semester.name === 'Semester 2 Software Engineering') {
                    return (

                        <div>
                            <div className="flex-container2">
                                <div className='flex-items'>
                                    <img src={tree}
                                         alt="Tree"></img>
                                </div>
                                <div className='flex-items Header'>
                                    <div>Skilltree</div>
                                </div>
                                <div className='flex-items'>
                                    <img src={tree}
                                         alt="Tree"></img>
                                </div>
                            </div>

                            {/*<div className="TopCorner"> Gedeeld met mij:*/}
                            {/*    <select className="MarginLeft"*/}
                            {/*            value={selects}*/}
                            {/*            onChange={e => setSelects(e.target.value)}>*/}

                            {/*        {studentData.map((student) => {*/}
                            {/*            return (*/}
                            {/*                <option>{student.name}*/}
                            {/*                </option>)*/}
                            {/*        })}*/}
                            {/*    </select>*/}
                            {/*</div>*/}
                        </div>
                    )
                }
            })}
        </div>
    )
}