import { useEffect } from "react"
import { useState } from "react"
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useCharacter, useUpdate } from './singleQuery'

const UpdateUser = () => {

   //Using params hook
  const {id} = useParams()
  // using navigate hook 
  const navigate = useNavigate()
   //custom hook for updated data
   const [updatePost] = useUpdate(id)
     console.log([updatePost])

    //useState
    const [user , setUser] = useState({
      name : "",
      email : "",
      password : "",
      dateofbirth : "",
      facebookProfile : ""

    })
    //Destructuring
    const {name , email , password , dateofbirth , facebookProfile} = user
    // loading user throught custom hook that use query
    const {data , loading , err} = useCharacter(id)
    console.log({data , loading , err})
    
    const Load_Users = async()=>{
    //custom hook
          setUser(data.getPost)
          console.log(setUser)
    }
    //useEffect to call the data
       useEffect(() => {
        Load_Users()
    }, [])
   
    // Changing the data on InputChange Event
    let InputChange = (e)=>{
      setUser({...user , [e.target.name] : e.target.value})
  }

    //Submit function to send Data to backend (Mutation)
    const Submit =async (e)=>{

      e.preventDefault()
       
         //updatedPost from our custom hook that we define in single query that use Mutation
      const result =await updatePost({
          variables :{
              name : name,
              email : email,
              password : password,
              dateofbirth : dateofbirth,
              facebookProfile : facebookProfile
          }
       })
        
       console.log(result)
       navigate("/")
    }
    
  return (
    //All the body Starting Here
    <>
    {loading ? "Data is Loading Pls wait" :
    <div className="container ">
    <div className="w-75 mx-auto shadow p-5" style={{marginTop : "60px"}}>
      <h2 className="text-center mb-4">Update User</h2>
      {/* Form Starts Here */}
      <form onSubmit={e => Submit(e)}>
      {/* NAME FIELD */}
        <div className="form-group m-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={e => InputChange(e)}
          />
        </div> 
       {/* EMAIL FIELD */}
        <div className="form-group m-2">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter Your email"
            name="email"
            value={email}
            onChange={e => InputChange(e)}
          />
        </div>
        {/* PASSWORD FIELD */}
        <div className="form-group m-2">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Enter Your password"
            name="password"
            value={password}
            onChange={e => InputChange(e)}
          />
        </div>
        {/* DATE OF BIRTH */}
        <div className="form-group m-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Date"
            name="dateofbirth"
            value={dateofbirth}
            onChange={e => InputChange(e)}
          />
        </div>
      {/* FACEBOOK PROFILE */}
      <div className="form-group m-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your facebook url"
            name="facebookProfile"
            value={facebookProfile}
            onChange={e => InputChange(e)}
          />
        </div>
       {/* BUTTON  */}
        <div className="d-grid m-2">
        <button className="btn btn-primary">Update Student</button>
        </div>
      </form>
      {/* Form Ended */}
    </div>
  </div>
}
  </>
  );  
}
export default UpdateUser
