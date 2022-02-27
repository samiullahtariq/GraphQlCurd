import { useState ,useEffect} from "react"
import { useNavigate ,useParams } from "react-router-dom"
import { useClass, useUpdate } from "./singleQuery"

const UpdateClass = () => {

  const navigate = useNavigate()

  const {id} = useParams()

  const {data , loading , error} = useClass(id)
   console.log({data , loading , error})

   const Load_Users = async()=>{
    //custom hook
          setUser(data.getClass)
          console.log(setUser)
    }
    //useEffect to call the data
       useEffect(() => {
        Load_Users()
    }, [])
   //update hook

   const [updateClass , {err}] = useUpdate(id)

   
    //useState
    const [user, setUser] = useState({
      subject :"",
      teacherName : "",
      duration : "",
      time : ""
  })
  //Destructuring
  const {subject , teacherName , duration , time} = user
    // input Funtion used in form fields
  const InputChange = (e)=>{
      setUser({...user , [e.target.name] : e.target.value})
  }
  

    //Submit function to send Data to backend (Mutation)
    const Submit =async (e)=>{

      e.preventDefault()
      const result =await updateClass({
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
    <div className="container ">
    <div className="w-75 mx-auto shadow p-5" style={{marginTop : "60px"}}>
      <h2 className="text-center mb-4">Updating the Class Fields</h2>
      {/* Form Starts Here */}
      <form onSubmit={e => Submit(e)}>
      {/* Subject */}
        <div className="form-group m-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="subject"
            value={subject}
            onChange={e => InputChange(e)}
          />
        </div>
       {/* teacher */}
        <div className="form-group m-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your teacher Name here"
            name="teacherName"
            value={teacherName}
            onChange={e => InputChange(e)}
          />
        </div>
        {/* duration */}
        <div className="form-group m-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your class duration"
            name="duration"
            value={duration}
            onChange={e => InputChange(e)}
          />
        </div>
        {/* time */}
        <div className="form-group m-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your time"
            name="time"
            value={time}
            onChange={e => InputChange(e)}
          />
        </div>
       {/* BUTTON  */}
        <div className="d-grid m-2">
        <button className="btn btn-primary">Update Class Data</button>
        </div>

      </form>
      {/* Form ends here */}
    </div>
  </div>  
  );  
}
export default UpdateClass
