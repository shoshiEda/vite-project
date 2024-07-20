/* eslint-disable react/prop-types */
import { useState } from 'react'

function AddUser({setIsAddUser,addUser}){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [isErr, setIsErr] = useState(false)
    const [isMsg, setIsMsg] = useState(false)



    function add(name,email)
    {
        if(!name)
        {
            setIsErr(true)
            return
        }
        addUser(name,email)
        setEmail("")
        setName("")
        setIsErr(false)
        addMsg()
    }

    function addMsg(){
        setIsMsg(true)
        setTimeout(()=>setIsMsg(false),2000)
    }

    return(
        <section className='add-section' >
            add naw user:
            <div className="add-user">
                {isErr && <p>You need to enter a name</p>}
            name:<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <br/>
            email:<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br/>
            <button onClick={()=>setIsAddUser(false)}>cancel</button>
            <button onClick={()=>add(name,email)}>add</button>
            </div>
            {isMsg && <div className='msg'>The user successfully added <br/><i className="fa-solid fa-check"></i></div>}
        </section>
    )

}

export default AddUser