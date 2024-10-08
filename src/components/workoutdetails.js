const WorkoutDetails =({workout})=>{
    return (
        <div className="workout-detail">
        <h4>{workout.title}</h4>
        <p><strong>load (kg):</strong>{workout.load}</p>
        <p><strong>count :</strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>


        </div>


    )
    
}
export default WorkoutDetails