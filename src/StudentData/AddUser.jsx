import {useMutation , gql} from '@apollo/client'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddUser = () => {

  const navigate = useNavigate()

    //Mutation Part
     const  createStudent = gql`
     mutation createPost($name: String , $email : String , $password : String , $dateofbirth : String , $facebookProfile : String){
            createPost(post  :{name : $name , email : $email , password : $password , dateofbirth : $dateofbirth , facebookProfile : $facebookProfile}){
              id
              name 
              email
              password
              dateofbirth
              facebookProfile
            }
     }
     `

     const [createPost, {err}] = useMutation(createStudent)

     if(err){ console.log("There Occured and Error")}
    
    //useState

    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [dateofbirth , setDateofbirth] = useState("")
    const [facebookProfile , setFacebookProfile] = useState("")
  

    //Submit function to send Data to backend (Mutation)
    const Submit =async (e)=>{

      e.preventDefault()
       

      const result =await createPost({
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
    <div className="container ">
      <div className="w-75 mx-auto shadow p-5" style={{marginTop : "60px"}}>
        <h2 className="text-center mb-4">Student Registeration</h2>
        {/* Form Starts Here */}
        <form onSubmit={Submit}>
        {/* NAME FIELD */}
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              onChange={(e)=>{
                let value = e.target.value
                setName(value)
              }}
            />
          </div>
         {/* EMAIL FIELD */}
          <div className="form-group m-2">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your email"
              onChange={(e)=>{
                let value = e.target.value
                setEmail(value)
              }}
            />
          </div>
          {/* PASSWORD FIELD */}
          <div className="form-group m-2">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter Your password"
              onChange={(e)=>{
                let value = e.target.value
                setPassword(value)
              }}
            />
          </div>
          {/* DATE OF BIRTH */}
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your DateofBirth"
              onChange={(e)=>{
                let value = e.target.value
                setDateofbirth(value)
              }}
            />
          </div>
        {/* FACEBOOK PROFILE */}
        <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your facebook url"
              onChange={(e)=>{
                let value = e.target.value
                setFacebookProfile(value)
              }}
            />
          </div>
         {/* BUTTON  */}
          <div className="d-grid m-2">
          <button className="btn btn-primary">Register Student</button>
          </div>
        </form>
      </div>
    </div>
  );  
}
export default AddUser
