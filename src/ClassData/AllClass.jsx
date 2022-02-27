
import {useQuery, useMutation , gql} from '@apollo/client'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'



const AllClass = ()=>{

  //Delete Class Data
  const DeleteClass = gql`
  mutation deleteClass($id : String){
    deleteClass(id : $id)
  }
  `
  const [deleteClass ,{err}] = useMutation(DeleteClass)

  const removedel  = async (id)=>{
        await deleteClass({
           variables :{
             id : id
           }
         })
  }

  // use effect to call all Class Query
 // Query

    const getAllClass =()=> gql`
 { getAllClass{
   id
    subject
    teacherName
    duration
    time
  }}
`
useEffect(() => {
  getAllClass()
}, []);

    const {loading , error , data} = useQuery(getAllClass())


    return(
        <>
{loading ? <h1>Data is loading</h1>:<div className="container">
            <div className="py-4">
            <div className="container">
      <div className="py-4">
      {/* Table Starts Here */}
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Subject</th>
              <th scope="col">TeacherName</th>
              <th scope="col">Duration</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* Table body starts Here */}
          <tbody>
          {/* Mapping the Data which we got through Query */}
            {
                data.getAllClass.map((value , index)=>{
                  console.log(value)
                    return(
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{value.subject}</td>
                            <td>{value.teacherName}</td>
                            <td>{value.duration}</td>
                            <td>
                              <Link to={`/class/edit/${value.id}`} className='btn btn-sm btn-primary'>Update</Link>
                              &nbsp;
                              <Link to={`/class/view/${value.id}`} className='btn btn-sm btn-outline-primary'>View</Link>
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
        </div>}
        </>
    )
}
export default AllClass