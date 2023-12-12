import tree from './tree.png'
import cloud from './cloud.png'
import logo from './logo.svg';
import {useState, useEffect, useRef} from 'react';
import './App.css';
import './LearningGoalGradeStyles.css'
import './SkillGradeStyle.css'

//import { maptrees } from './maptree';
import {semester} from './semester';
import {learninggoal} from './learninggoal';
import Xarrow from "react-xarrows";
import data from './db.json';
import studentdata from './studentskills.json';
import {Tooltip} from 'react-tooltip';
import {GetTrees} from './fetchtree';
import Header from "./Components/Header";
import SkillList from "./Components/SkillList";
import LearningGoalList from "./Components/LearningGoalList";
import Skill from "./Components/Skill";

const cors = require('cors');


const boxStyle = {
    border: "grey solid 2px",
    borderRadius: "10px",
    padding: "5px",
    display: 'inline-block',
    color: '#FFD700',
    zIndex: 2
};
const Orienting = {
    border: "grey solid 2px",
    borderRadius: "10px",
    padding: "5px",
    display: 'inline-block',
    backgroundColor: 'orange',
    color: 'black'
};
const Beginning = {
    border: "grey solid 2px",
    borderRadius: "10px",
    padding: "5px",
    display: 'inline-block',
    backgroundColor: 'yellow',
    color: 'black'
};
const Proficient = {
    border: "grey solid 2px",
    borderRadius: "10px",
    padding: "5px",
    display: 'inline-block',
    backgroundColor: 'green',
    color: 'black'
};
const Advanced = {
    border: "grey solid 2px",
    borderRadius: "10px",
    padding: "5px",
    display: 'inline-block',
    backgroundColor: 'blue',
    color: 'black'
};
const marginleft = {
    marginleft: "10px",
    width: "130px",
    height: "60px",
    border: "0px",
    color: "white",
    textAlign: "center",
    fontSize: "medium",
    background: "blue"
}
const topcorner = {
    position: "absolute",
    display: "inline-block",
    top: "10px",
    left: "10px",
    background: "blue",
    fontSize: "medium",
    borderRadius: "2%",
    padding: "10px"
}
const margintop = {marginTop: "12%"}
const semesterDiv = {color: '#FFD700'}
const header = {color: '#FFD700', fontSize: "55px"}


function App() {
    var aaa = 1;
//const data = GetTrees();


    /*
    if (GetTrees() !== 0){
      data = GetTrees();

    }
    */


    /*
   const [data, setdata] = useState(0)
   var myHeaders = new Headers();
     myHeaders.append("ocp-apim-subscription-key", "d69ee6a096904bbc89a4c7bded954899");

     var requestOptions = {
       mode:'cors',
       method: 'GET',
       headers: myHeaders,
       redirect: 'follow'
     };

   useEffect(() =>{
     const fetchdata = async () =>{
       const result = await fetch("https://skilltree.azure-api.net/v1/skilltree", requestOptions)
       result.json().then(json =>{setdata(json)})
     }
     fetchdata();
   },[]);
   console.log(data)

  */


    function nextsemester(j) {
        return (
            j = j + 1
        )
    }

    function nextelem(i) {
        return (
            i = i + 1
        )
    }

//let studentobject = studentdata.find(e => e.name == 'Ilias');

    function Showdata() {
        let dropdownstudents = [{value: "Antonio", label: 'Antonio'}, {
            value: "Ilias",
            label: 'Ilias'
        }, {value: "Sebastiaan", label: 'Sebastiaan'}]
        const [selects, setSelects] = useState();

        const Grades = Object.freeze({
            ORIENTATING: Symbol("orientating"),
            BEGINNING: Symbol("beginning"),
            PROFICIENT: Symbol("proficient"),
            ADVANCED: Symbol("advanced"),
        });

        function setLearningGoalStyle(grade) {
            switch (grade) {
                case grade.ORIENTATING:
                    return (
                        <div className="LGOrientating"/>)
                case grade.BEGINNING:
                    return (
                        <p className="LGBeginning"/>)
                case grade.PROFICIENT:
                    return (
                        <p className="LGProficient"/>)
                case grade.ADVANCED:
                    return (
                        <p className="LGAdvanced"/>)
            }
        }

        let studentObject
        let learningGoalStyle;
        let learningGoalDecision;
        let lgid = 'g';
        let i = 0;
        let j = 0;
        let semesterRef = useRef(0);
        let lgRef = useRef(1);
        let skillRef = useRef(100);
        let grid1 = 'a';
        let grid2 = 'c';
        if (!data == 0) {
            return (
                <div>
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
                                    <div className='parent'>

                                        <div className="child3">
                                            <Header></Header>

                                            <div style={topcorner}> Gedeeld met mij:
                                                <select style={marginleft} value={selects}
                                                        onChange={e => setSelects(e.target.value)}>

                                                    {studentdata.map((student) => {
                                                        return (<option>{student.name}</option>)
                                                    })}
                                                </select>
                                            </div>

                                        </div>
                                        <div className='child1'>
                                            <div ref={semesterRef} style={boxStyle}>
                                                {semester.name}
                                            </div>
                                        </div>
                                        <div className='child2'>

                                            <div className="flex-container">

                                                {semester.learningGoals.map((learninggoal) => {
                                                    learningGoalDecision = '';
                                                    learningGoalStyle = {
                                                        border: "grey solid 2px",
                                                        borderRadius: "10px",
                                                        padding: "5px",
                                                        display: 'inline-block'
                                                    }

                                                    lgid = lgid + 'g';
                                                    grid2 = grid2 + 'c';
                                                    lgRef.current = lgRef.current + 1;
                                                    {
                                                        learninggoal.skills.map((skill) => {
                                                            {
                                                                studentObject.studentskills.find(item => item.id == skill.id).skill1 == 'Orienting'
                                                                && <LearningGoalList learningGoal={learninggoal}
                                                                                     grade={Grades.ORIENTATING}/>
                                                                learningGoalStyle = Grades.ORIENTATING;
                                                                learningGoalDecision = 'Orienting'
                                                            }

                                                            {
                                                                (learningGoalDecision != 'Orienting' && studentObject.studentskills.find(item => item.id == skill.id).skill1 == 'Beginning')
                                                                && <LearningGoalList learningGoal={learninggoal}
                                                                                     grade={Grades.BEGINNING}/>
                                                                learningGoalStyle = Grades.BEGINNING;
                                                                learningGoalDecision = 'Beginning'
                                                            }

                                                            {
                                                                (learningGoalDecision != 'Orienting' && learningGoalDecision != 'Beginning' &&
                                                                    studentObject.studentskills.find(item => item.id == skill.id).skill1 == 'Proficient')
                                                                && <LearningGoalList learningGoal={learninggoal}
                                                                                     grade={Grades.PROFICIENT}/>
                                                                learningGoalStyle = Grades.BEGINNING;
                                                                learningGoalDecision = 'Proficient'
                                                            }

                                                            {
                                                                (learningGoalDecision != 'Orienting' && learningGoalDecision != 'Beginning' &&
                                                                    learningGoalDecision != 'Proficient' && studentObject.studentskills.find(item => item.id == skill.id).skill1 == 'Advanced')
                                                                && <LearningGoalList learningGoal={learninggoal}
                                                                grade = {Grades.ADVANCED}/>
                                                                learningGoalStyle = Grades.ADVANCED;
                                                                learningGoalDecision = 'Advanced'
                                                            }
                                                        })
                                                    }
                                                    return (
                                                        <div className='flex-items'>
                                                            <div className='parent2'>
                                                                <div className='child21'>
                                                                    {/*<LearningGoalList key={learninggoal.id}*/}
                                                                    {/*               learningGoal={learninggoal}*/}
                                                                    {/*               grade={learningGoalDecision}*/}
                                                                    {/*               id={lgid}*/}
                                                                    {/*/!*               ref={lgRef}*!/*/}
                                                                    {/*></LearningGoalList>*/}
                                                                    <p key={learninggoal.id} id={lgid} ref={lgRef}
                                                                       style={setLearningGoalStyle(learningGoalStyle)}>
                                                                        {learninggoal.name}
                                                                    </p>
                                                                    <Xarrow start={semesterRef} end={lgRef}
                                                                            startAnchor={'top'} endAnchor={'bottom'}
                                                                            color='#8f5a46' strokeWidth={25}
                                                                            showHead={false}/>
                                                                </div>
                                                                <div className='child22'>
                                                                    <div className="flex-container">

                                                                        {learninggoal.skills.map((skill) => {
                                                                            i = i + 1;

                                                                            let boxstyle2;

                                                                            {
                                                                                studentObject.studentskills.find(item => item.id == i).skill1 == 'Orienting' &&
                                                                                <SkillList learningGoal={learninggoal}
                                                                                           grade={Grades.ORIENTATING}/>
                                                                            }

                                                                            if (studentObject.studentskills.find(item => item.id == i).skill1 == 'Orienting') {
                                                                                boxstyle2 = {
                                                                                    border: "#A41704 solid 5px",
                                                                                    borderRadius: "50%",
                                                                                    width: "40px",
                                                                                    height: "40px",
                                                                                    padding: "10px",
                                                                                    display: 'inline-block',
                                                                                    background: 'linear-gradient(to right, rgb(230 48 22) 0px, rgb(233 98 42) 100%)',
                                                                                    color: 'black'
                                                                                };
                                                                            }
                                                                            if (studentObject.studentskills.find(item => item.id == i).skill1 == 'Beginning') {
                                                                                boxstyle2 = {
                                                                                    border: "rgb(217 131 3) solid 5px",
                                                                                    borderRadius: "50%",
                                                                                    width: "40px",
                                                                                    height: "40px",
                                                                                    padding: "10px",
                                                                                    display: 'inline-block',
                                                                                    background: 'linear-gradient(to right,#ffa400 0,#ffd100 100%)',
                                                                                    color: 'black'
                                                                                };
                                                                            }
                                                                            if (studentObject.studentskills.find(item => item.id == i).skill1 == 'Proficient') {
                                                                                boxstyle2 = {
                                                                                    border: "#007900 solid 5px",
                                                                                    borderRadius: "50%",
                                                                                    width: "40px",
                                                                                    height: "40px",
                                                                                    padding: "10px",
                                                                                    display: 'inline-block',
                                                                                    background: 'linear-gradient(to right, rgb(26 163 6) 0px, rgb(3 247 125) 100%)',
                                                                                    color: 'black'
                                                                                };
                                                                            }
                                                                            if (studentObject.studentskills.find(item => item.id == i).skill1 == 'Advanced') {
                                                                                boxstyle2 = {
                                                                                    border: "rgb(2 141 139) solid 5px",
                                                                                    borderRadius: "50%",
                                                                                    width: "40px",
                                                                                    height: "40px",
                                                                                    padding: "10px",
                                                                                    display: 'inline-block',
                                                                                    background: 'linear-gradient(to right, rgb(20 157 154) 0px, rgb(6 237 232) 100%)',
                                                                                    color: 'black'
                                                                                };
                                                                            }
                                                                            skillRef.current = skillRef.current + 1;

                                                                            /*document.getElementById(lgid).style={border: "rgb(2 141 139) solid 5px", borderRadius: "50%", width:"50px",height:"50px",padding: "10px",display: 'inline-block',background:'linear-gradient(to right, rgb(20 157 154) 0px, rgb(6 237 232) 100%)',color:'black'}*/
                                                                            return (
                                                                                <div className='flex-items'>

                                                                                    <a
                                                                                        data-tooltip-id="my-tooltip"
                                                                                        data-tooltip-content={skill.name}
                                                                                        data-tooltip-place="top"
                                                                                    >

                                                                                        <div key={skill.id}
                                                                                             ref={skillRef}
                                                                                             style={boxstyle2}>

                                                                                            {skill.id}

                                                                                        </div>

                                                                                    </a>

                                                                                    <Tooltip id="my-tooltip"/>
                                                                                    <Xarrow start={lgRef} end={skillRef}
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
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    <div id={'bottomref'} style={margintop}></div>
                    <div><Xarrow start={semesterRef} end={'bottomref'} endAnchor={'top'} startAnchor={'bottom'}
                                 color='#8f5a46' strokeWidth={30} showHead={false} zIndex={1}></Xarrow></div>

                </div>
            )
        }
        return (<div>Loading...</div>)
    }

    function changeaaa() {
        if (aaa == "1") {
            aaa = "2"
        }
        if (aaa == "2") {
            aaa = "1"
        }
        console.log(aaa);
    }

    function Show() {

        if (aaa == 1) {
            return (
                <div>
                    <Showdata/>
                </div>
            )
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <Show/>
            </header>
        </div>
    );
}


export default App;
