/* eslint-disable react/prop-types */
import UserPreview from './UserPreview.jsx'

function MainInfo({users,updateUser,deleteUser,setSelectedUser,setOpenTasksPosts,selectedUser}){

    return(
        <>
        {users.length && users.map(user => <UserPreview key={user.id} user={user} updateUser={updateUser} deleteUser={deleteUser} setSelectedUser={setSelectedUser} setOpenTasksPosts={setOpenTasksPosts} selectedUser={selectedUser}/>)}
        </>
    )
}

export default MainInfo