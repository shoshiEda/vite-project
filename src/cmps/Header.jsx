/* eslint-disable react/prop-types */

function Header({setIsAddUser,filterBy,setFilterBy}){
    return(
        <section className="header">
            <span>search  </span>
            <input type='text' value={filterBy} onChange={(e)=>setFilterBy(e.target.value)}/>
            <button onClick={()=>setIsAddUser(true)}>add</button>
        </section>
    )
}

export default Header
