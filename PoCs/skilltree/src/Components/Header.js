import {useState} from "react";
import tree from "../tree.png";


export default function Header({studentData, setStudent}) {

    const [selectedStudent, setSelectedStudent] = useState();

    return (
        <div className="flex-items flex-row">

            <div>
                <select value={selectedStudent}
                        onChange={e => {
                            setSelectedStudent(e.target.value);
                            setStudent(studentData[e.target.value]);
                        }}>

                    {studentData.map((student, index) => {
                        return (<option value={index}>{student.name}</option>)
                    })}
                </select>
            </div>


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
            </div>
        </div>

    )
}