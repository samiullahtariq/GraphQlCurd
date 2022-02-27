import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';

//Student Routes
import AddUser from './StudentData/AddUser';
import AllUsers from './StudentData/AllUsers';
import UpdateUser from './StudentData/UpdateUser'
import SingleUser from './StudentData/SingleUser'

//Class Routes
import AddClass from './ClassData/AddClass'
import AllClass from './ClassData/AllClass'
import SingleClass from './ClassData/SingleClass'
import UpdateClass from './ClassData/UpdateClass';


function App() {
 
  return (
    <>
     <Menu />
      <Routes>
       {/* Student Routes */}
        <Route path="/" element={<AllUsers/>}/>
        <Route path="/addStudent" element={<AddUser/>}/>
        <Route path="/student/edit/:id" element={<UpdateUser/>} />
        <Route path="/student/view/:id" element={<SingleUser/>} />


        {/* //Class Routes */}
        <Route path="/class" element={<AllClass/>} />
        <Route path="/addClass" element={<AddClass/>}/>
        <Route path="/class/edit/:id" element={<UpdateClass/>} />
        <Route path="/class/view/:id" element={<SingleClass/>} />
      </Routes>
    </>
  );
}

export default App;
