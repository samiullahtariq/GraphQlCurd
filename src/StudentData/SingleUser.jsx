
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useCharacter } from './singleQuery'

const SingleUser = () => {
 
    const {id} = useParams()

    const {data , loading , err} = useCharacter(id)
     console.log({data , loading , err})
     
     
    
  return (
    //All the body Starting Here
    <>
     {loading ? <h1>Data is loading</h1>:
    <div className="container py-4">
    
          <Link className="btn btn-primary" to="/">
            Back to Std Page
          </Link>
          {/* Displaying The Fetched Data */}
          <h1 className="display-4">User Id: {data.getPost.id}</h1>
          <hr />
          <ul className="list-group w-50">
            <li className="list-group-item"><span style={{ fontWeight : "bolder" }}> Name : </span> {data.getPost.name} </li>
            <li className="list-group-item"><span style={{ fontWeight : "bolder" }}> Email : </span> {data.getPost.email} </li>
            <li className="list-group-item"><span style={{ fontWeight : "bolder" }}> FacebookProfile : </span> {data.getPost.facebookProfile} </li>
          </ul>
        </div>}
        </>
  );  
}
export default SingleUser
