import './user.css'

export const User = ({user}) =>{
    return(
        <>
        <div className="userCard">
            <p><b>{user.name}</b></p>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
        </>
    )
}