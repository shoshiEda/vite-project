
import Header from './cmps/Header.jsx'
import MainInfo from './cmps/MainInfo.jsx'
import AddUser from './cmps/AddUser.jsx'
import TasksAndPosts from './cmps/TasksAndPosts.jsx'
import './App.css'
import { useState , useEffect } from 'react'
import axios from 'axios'


const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const TODOS_BY_USER = 'https://jsonplaceholder.typicode.com/todos?userId='
const POSTS_BY_USER = 'https://jsonplaceholder.typicode.com/posts?userId='



function App() {

  const[isAddUser,setIsAddUser] = useState(false)
  const [users, setUsers] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [filterBy,setFilterBy] = useState("")
  const [openTasksPosts,setOpenTasksPosts] = useState(false)
  const [selectedUser,setSelectedUser] = useState({})

  

    useEffect(()=>{    
    loadUsers()
  },[])

  useEffect(()=>{
    setFilterBy(filterBy.toLowerCase())
    setUsers(allUsers.filter(user => user.name.toLowerCase().includes(filterBy) || user.email.toLowerCase().includes(filterBy)))
  },[filterBy])
  
  async function loadUsers(){
    try{
      const { data } = await axios.get(USERS_URL)
      const todosByUserResponses = await Promise.all(data.map(user => axios.get(TODOS_BY_USER+user.id)))
      const todosByUser = todosByUserResponses.map(response => response.data)
      const isTodoCompleted = todosByUser.map(user => isTodoCompletedFunc(user))
      const postsByUserResponse = await Promise.all(data.map(user => axios.get(POSTS_BY_USER+user.id)))
      const postsByUser = postsByUserResponse.map(response => response.data)

      const newUsers =data.map((user,idx) => 
        (
          {id:user.id,
          name:user.name,
          email:user.email,
          address:user.address,
          todos:todosByUser[idx]||[],
          posts:postsByUser[idx] || [],
          isDone:isTodoCompleted[idx]}))
      setAllUsers(newUsers)
      setUsers(newUsers)
    }
    catch(err){
            console.log("err:",err)
    }
  }
  
  function updateUser(userId,name='',email='')
  {
    const updatedUsers = [...users]  
    for (let i = 0; i < updatedUsers.length; i++) {
      if (updatedUsers[i].id === userId) {
        updatedUsers[i] = { ...updatedUsers[i], name, email }
        break 
      }
    }
    setUsers(updatedUsers)
  
  }
  
  function deleteUser(userId)
  {
    setUsers(users.filter(user=>user.id!==userId))
  }
  
  function isTodoCompletedFunc(todos)
  {
    return !todos.some(todo=>!todo.completed)
  }
  
  



function addUser(name,email)
{
    const newUser = {id:users.length+1,name,email,isDone:true}
    setUsers(prevUsers => [...prevUsers, newUser])
}

console.log(users)
console.log(selectedUser)


  return (
    <section className='app'>
      <section className='main-info'>
      <Header setIsAddUser={setIsAddUser} filterBy={filterBy} setFilterBy={setFilterBy}/>
      <MainInfo users={users} updateUser={updateUser} deleteUser={deleteUser} setSelectedUser={setSelectedUser} setOpenTasksPosts={setOpenTasksPosts} />
      </section>
      <section className='right-side'>
      {isAddUser && <AddUser setIsAddUser={setIsAddUser} addUser={addUser}/>}
      {openTasksPosts && <TasksAndPosts user={selectedUser}/>}
      </section>
    </section>
  )
}

export default App
