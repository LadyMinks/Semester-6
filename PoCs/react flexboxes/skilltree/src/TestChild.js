export default function({learningGoal, grade}){

    return(
        <div className={grade}>
            {learningGoal.name}
        </div>
    )
}