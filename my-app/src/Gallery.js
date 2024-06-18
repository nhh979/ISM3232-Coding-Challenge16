import Profile from "./Profile"

export default function Gallery ({members}) {
    return (
        <div className='gallery'>
            {members.map(member => 
                <Profile 
                    name={member.name}
                    role={member.role}
                    photoURL={member.photoURL} 
                />
            )}
        </div>
    )
}