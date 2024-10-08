import { useState } from "react"

const WorkoutForm=()=>{
    const [title,settitle]=useState('')
    const [reps,setreps]=useState('')
    const [load,setload]=useState('')
    const [error,seterror]=useState(null)
    const handlesubmit=async (e)=>{
        e.preventDefault()
        const workout={title,reps,load}
        const responce=await fetch('/api/workout',
            {
                method:'POST',
                body:JSON.stringify(workout),
                headers:{"content-type":"application/json"}
            })
        const json=await responce.json()
        if(!responce.ok){
            seterror(json.error)
        }
        if (responce.ok){
            seterror(null)
            setload("")
            settitle('')
            setreps('')
            console.log("new workout is added")

        }


    }

    return (

        <div className="workoutform">
            <form className="form" onSubmit={handlesubmit}>
                <h4>Add new workout</h4>
                <br/>
                <label>Name</label>
                <input type="text"
                onChange={(e)=>{settitle(e.target.value)}}
                value={title}/>
                <br/>
                <label>reps: </label>
                <input type="number"
                onChange={(e)=>{setreps(e.target.value)}}
                value={reps}/>
                <br/>
                <label>load(kg): </label>
                <input type="number"
                onChange={(e)=>{setload(e.target.value)}}
                value={load}/>
                <br/>
                <button>Add workout</button>
                {error && <div className="error">{error}</div>}
                
            </form>
        </div>
    )
}
export default WorkoutForm