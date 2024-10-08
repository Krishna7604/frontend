import { useEffect,useState } from "react";
import WorkoutDetails from "../components/workoutdetails";
import WorkoutForm from "../components/WorkoutForm";

const Home=()=>{
    const [workout,setworkout]=useState(null)
    useEffect(()=>{
        const fetchworkout= async ()=>{
            const response=await fetch("/api/workout")
            const res=await response.json()
            
            if (response.ok){
                setworkout(res)

            }
            
        }
        fetchworkout()
    },[])
    
    return (
        <div className="home">
            <div className="workouts">
                {workout && workout.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm/>
            
        </div>
    )
}
export default Home;