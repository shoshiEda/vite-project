/* eslint-disable react/prop-types */
import { useState } from 'react'

import UserAddress from './UserAddress.jsx'

function UserPreview({ user ,updateUser,deleteUser,setSelectedUser,setOpenTasksPosts,selectedUser}){

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [isMarked,setIsMarked] = useState(false)

    const[openAdress,setOpenAdress] = useState(false)

    const isDone = user.isDone?"":"todos-left"
   

    function toggleUserInfo(){
        setIsMarked(!isMarked)
        if(!isMarked){
            setOpenTasksPosts(true)
            setSelectedUser(user)
        }
        if(isMarked){
            setOpenTasksPosts(false)
            setSelectedUser({})
        }
        
    }
    

    

        

    return(
        <section className={isDone +" user-preview"} style={{backgroundColor:isMarked && (selectedUser.id===user.id)?"orange":""}} onClick={toggleUserInfo}>
            <p>id:{user.id}</p>
            name:<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <br/>
            email:<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br/>
            <div className={openAdress? 'main-btns-opened':'main-btns-closed'}>
                <button className='grey-btn' onClick={(e)=>{e.stopPropagation();setOpenAdress(true)}}>other data</button>
                {openAdress && <><br/><UserAddress address={user.address} setOpenAdress={setOpenAdress}/></>}
                <div className='btns'>
                <button onClick={(e)=>{e.stopPropagation();updateUser(user.id,name,email)}}>update</button>
                <button onClick={(e)=>{e.stopPropagation();deleteUser(user.id)}}>delete</button>
                </div>
                
            </div>
        </section>
    )
}

export default UserPreview
