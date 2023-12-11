//import { gettrees } from './fetchtree';
import { gettrees } from './fetchtree copy';
import { learninggoal } from './learninggoal';
import { semester } from './semester';
import { skill } from './skill';


export async function maptrees(){
var data = await gettrees();
console.log(data)
data.map((semester) => {
    <semester 
        name={semester.name}
        description={semester.description}
        learningGoals={semester.learningGoals}
        />
    console.log("%c" + semester.name, "color:" + "red" + ";font-weight:bold;")
    semester.learningGoals.map((learninggoal) =>{    
        <learninggoal 
            name={learninggoal.name}
            description={learninggoal.description}
            skills={learninggoal.skills} />
        console.log("%c" + 'Learninggoal:', "color:" + "red" + ";font-weight:bold;")
        console.log(learninggoal.name)
        console.log("%c" + 'skills:', "color:" + "red" + ";font-weight:bold;")
        learninggoal.skills.map((skill)=>{
            <skill 
                name={skill.name}
                description={skill.description}
                sources={skill.sources} />
            console.log(skill.name)
        }
        )
    })
})
}





