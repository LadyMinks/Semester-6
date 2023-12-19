import SkillList from "./SkillList";

export default function ({learningGoal, student}){

    const grades = new Map();
    const gradeList = student.studentskills;

    gradeList.forEach(skill =>
        grades.set(skill.id, skill.skill1)
    );

    return(
        <div className="d-flex flex-column">
            <section className = "d-flex flex-row">
                <SkillList skills={learningGoal.skills} grades = {grades} ></SkillList>
            </section>
        </div>
    )

}