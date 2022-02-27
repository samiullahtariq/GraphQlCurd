import {useMutation , gql} from '@apollo/client'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddClass = () => {

  const navigate = useNavigate()

    //Mutation Part
     const  createClassData = gql`
     mutation createClass($subject: String , $teacherName : String , $duration : String , $time : String ){
            createClass(class  :{subject : $subject , teacherName : $teacherName , duration : $duration , time : $time }){
              id
              subject 
              teacherName
              duration
              time
            }
     }
     `

     const [createClass, {err}] = useMutation(createClassData)

     if(err){ console.log("There Occured and Error")}
    
    //useState

    const [subject , setSubject] = useState("")
    const [teacherName , setTeacherName] = useState("")
    const [duration , setDuration] = useState("")
    const [time , setTime] = useState("")
  
  

    //Submit function to send Data to backend (Mutation)
    const Submit =async (e)=>{

      e.preventDefault()
       

      const result =await createClass({
          variables :{
              subject  : subject,
              teacherName : teacherName,
              duration : duration,
              time : time
          }
       })
        
       console.log(result)
       navigate("/class")
    }
    
  return (
    //All the body Starting Here
    <div className="container">
    <div className="w-75 mx-auto shadow p-5" style={{marginTop : "60px"}}>
      <h2 className="text-center mb-4">Add Class</h2>
      {/* Form Starts Here */}
      <form onSubmit={e => Submit(e)}>
      {/* Subject */}
        <div className="form-group m-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Subject Name"
            onChange={e => setSubject(e.target.value)}
          />
        </div>         
       {/* teacher */}
        <div className="form-group m-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your teacher Name here"
            onChange={e => setTeacherName(e.target.value)}
          />
        </div>
        {/* duration */}
        <div className="form-group m-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your class duration in Minutes"
            onChange={e => setDuration(e.target.value)}
          />
        </div>
        {/* time */}
        <div className="form-group m-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Starting Class Time"
            onChange={e => setTime(e.target.value)}
          />
        </div>
       {/* BUTTON  */}
        <div className="d-grid m-2">
        <button className="btn btn-primary">Add Class </button>
        </div>
      </form>
    </div>
  </div>  
  );  
}
export default AddClass
