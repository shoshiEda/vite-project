/* eslint-disable react/prop-types */
import { useState } from 'react'
import Todos from './Todos.jsx'
import Posts from './Posts.jsx'

function TasksAndPosts({user,markAsCompleted,addPost,addTodo}){

    const [isAddTodo,setIsAddTodo] = useState(false)
    const [isAddPost,setIsAddPost] = useState(false)
    const [newTodo,setNewTodo] = useState("")
    const [newPost,setNewPost] = useState({title:"",body:""})

    if(!user) return <div>Loading...</div>
return(
    <>
    {isAddTodo?
    <div className='tasks-add'>
        <div className='task-add-around'>
            <p>add a new task</p>
            title:<input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
            <br/>
            <button onClick={()=>{setIsAddTodo(false);addTodo(newTodo)}}>add</button>
        <button onClick={()=>setIsAddTodo(false)}>close</button>
        </div>
    </div>
    :
    <div className='todos-and-posts'>
        <div className='tasks-title'>
            <span>Todos - user {user.id}</span>
            <button onClick={()=>setIsAddTodo(true)}>add</button>
        </div>
        {user.todos.map(todo => <Todos key={todo.id} todo={todo} markAsCompleted={markAsCompleted} />)}
    </div>}
    {isAddPost?
    <div className='tasks-add'>
        <div className='task-add-around'>
            <p>add a new post</p>
            title:<input type="text" value={newPost.title} onChange={(e)=>setNewPost({...newPost,title: e.target.value})}/>
            <br/>
            body:<input type="text" value={newPost.body} onChange={(e)=>setNewPost({...newPost,body: e.target.value})}/>
            <br/>
            <button onClick={()=>{setIsAddPost(false);addPost(newPost)}} >add</button>
            <button onClick={()=>setIsAddPost(false)}>close</button>
        </div>
    </div>
    :
    <div className='todos-and-posts'>
        <div className='tasks-title'>
            <span>Posts - user {user.id}</span>
            <button onClick={()=>setIsAddPost(true)}>add</button>
        </div>
        {user.posts.map(post => <Posts key={post.id} post={post}/>)}
    </div>}
    </>
)

}

export default TasksAndPosts