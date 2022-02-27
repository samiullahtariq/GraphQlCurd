import {useQuery, useMutation , gql} from '@apollo/client'



 //Query Part
 const  getSingleClass = gql`
 query getClass($id : String ){
        getClass(id : $id){
          id
          subject 
          teacherName
          duration
          time
        }
 }
 `

 export const useClass = (id)=>{
    const {data , loading, error} = useQuery(getSingleClass ,{
        variables :{
            id : id
        }
    })
    
    return {data , loading , error}
    
 }

 ///////////////////////////////////////////upadata Class Part////////////

 const  updateClassData = gql`
     mutation updateClass($id : String  ,$subject: String , $teacherName : String , $duration : String , $time : String ){
            updateClass(id : $id  ,class  :{subject : $subject , teacherName : $teacherName , duration : $duration , time : $time }){
              id
              subject 
              teacherName
              duration
              time
            }
     }
     `

     export const useUpdate = (id)=>{
        const [updateClass, {err}] = useMutation(updateClassData,{
            variables :{
                id : id
            }
        })

        return [updateClass , {err}]
     }

     