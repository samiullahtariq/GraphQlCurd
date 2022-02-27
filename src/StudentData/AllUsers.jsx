
import {useQuery,useMutation , gql} from '@apollo/client'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'





const AllUsers = ()=>{


  // delete mutation starts here

  const DeleteUser = gql`
  mutation deletePost($id : String){
    deletePost(id : $id)
  }
  `
  const [deletePost ,{err}] = useMutation(DeleteUser)

  const removedel  = async (id)=>{
        await deletePost({
           variables :{
             id : id
           }
         })
  }

  
//student query Starts here
useEffect(() => {
    getAllStd()
}, []);



  const getAllStd =()=> gql`
 { getAllStd{
    id
    name 
    email 
    facebookProfile
  }}
`

    const {loading , error , data} = useQuery(getAllStd())
    if(loading) return "Loading"
    if (error) return "Error Occured"


    //return starts here
    return(
        <>
<div className="container">
            <div className="py-4">
            <div className="container">
      <div className="py-4">
      {/* Table Starts Here */}
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Profile</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* Table body starts Here */}
          <tbody>
          {/* Mapping the Data which we got through Query */}
            {
                data.getAllStd.map((value , index)=>{
                  console.log(value)
                    return(
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.facebookProfile}</td>
                            <td>
                              <Link to={`/student/edit/${value.id}`} className='btn btn-primary btn-sm'>Update</Link>
                               &nbsp;
                               <Link to={`/student/view/${value.id}`} className='btn btn-sm btn-outline-primary'>View</Link>
                               &nbsp;
                               <Link to='' className='btn btn-sm btn-danger' onClick={()=>{removedel(value.id)}}>Delete</Link>
                            </td>
                        </tr>
                    )
                })
            }
          </tbody>
          {/* Table Body Ends Here */}
        </table>
      </div>
    </div>
            </div>
        </div>
        </>
    )
}

export default AllUsers