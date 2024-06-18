
export default function Profile ({name, role, photoURL}) {
    return (
        <div className="profile">
            <h1 className='name'>{name}</h1>
            <p className='role'>{role}</p>
            <img className='photo' src={photoURL} alr={`Profile of ${name}`}/>
        </div>
    )
}