import SkillList from "./SkillList";
import SkillGrade from "./SkillGrade";
import Xarrow from "react-xarrows";


export default function ({learningGoal, student}) {

    const grades = new Map();
    const gradeList = student.studentskills;

    gradeList.forEach(skill =>
        grades.set(skill.id, skill.skill1)
    );



    return (
        <div className="d-flex flex-row LearningGoalFlex ">
            {/*<section className="d-flex flex-row">*/}
            {/*    {learningGoal.skills.map(skill =>*/}
            {/*        <div>*/}
            {/*            <SkillGrade key={skill.id} skill={skill} grades={grades}/>*/}
            {/*            <Xarrow start={skill} end={"learningGoalId"}*/}
            {/*                    startAnchor={'top'}*/}
            {/*                    endAnchor={'bottom'}*/}
            {/*                    path={'smooth'}*/}
            {/*                    color='#8f5a46'*/}
            {/*                    strokeWidth={10}*/}
            {/*                    showHead={false}/>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</section>*/}

            <section id = {"learningGoalId"}>
                {learningGoal.name}
            </section>
        </div>
    )
}