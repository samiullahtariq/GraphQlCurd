import {useQuery, useMutation , gql} from '@apollo/client'

 //Mutation Part
 const  getStudent = gql`
 query getPost($id : String ){
        getPost(id : $id){
          id
          name 
          email
          password
          dateofbirth
          facebookProfile
        }
 }
 `

export const useCharacter = (id)=>{
    const {data ,loading, err} = useQuery(getStudent,
        {
         variables : {
           id : id
         }
       })

        return{  data,
                err ,
                loading}

 }


 //////////////////////////update Mutation Part///////////////////////

  //Mutation Part
  const  updateStudent = gql`
  mutation updatePost($id : String  ,$name: String , $email : String , $password : String , $dateofbirth : String , $facebookProfile : String){
         updatePost(id : $id ,post  :{name : $name , email : $email , password : $password , dateofbirth : $dateofbirth , facebookProfile : $facebookProfile}){
           id
           name 
           email
           password
           dateofbirth
           facebookProfile
         }
  }
  `

  export const useUpdate =(id)=>{
    const [updatePost, {error}] = useMutation(updateStudent ,{
      variables:{
        id : id
      }
    })

    return [updatePost]
  }

  

