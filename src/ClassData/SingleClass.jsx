
import { Link, useParams } from 'react-router-dom'
import { useClass } from './singleQuery'


const SingleClass = () => {
 
  const {id} = useParams()

   //using custom hook

   const {data , loading , err} = useClass(id)

     console.log({data ,loading ,err})
    
    
  return (
    //All the body Starting Here
    <div className="container py-4">
          <Link className="btn btn-primary" to="/class">
            Back to Class Page
          </Link>
          {/* Displaying The Fetched Data */}
          {loading ? <h1>Data is loading</h1>:<> <h1 className="display-4">User Id: {data.getClass.id}</h1>
          <hr />
          <ul className="list-group w-50">
          <li className="list-group-item"><span style={{fontWeight : "bolder" }}>Subject :</span>   {data.getClass.subject}</li>
            <li className="list-group-item"><span style={{fontWeight : "bolder" }}>TeacherName :</span>   {data.getClass.teacherName}</li>
            <li className="list-group-item"><span style={{fontWeight : "bolder" }}>Duration :</span>  {data.getClass.duration}</li>
          </ul></>}
        </div>
  );  
}
export default SingleClass
