import SkillGrade from "./SkillGrade";

export default function SkillList({skills, student}){

    const grades = new Map();
    const gradeList = student.studentskills;

    gradeList.forEach(skill =>
        grades.set(skill.id, skill.skill1)
    );

    return (
        <section className= "d-flex flex-row">
            {skills.map(skill => <SkillGrade key={skill.id} skill={skill} grades={grades}/>)}
        </section>
    )
}