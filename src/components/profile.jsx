const ProFile=()=>{
return(
    <>
    <h1>Profile Card Challange</h1>
    <ProfileCard 
    name="Alice"
    age={30}
    grettings={
        <div>
        <strong>Hi,Alice</strong>
        </div>
    }
    >
        <p>Hobbies:Reading</p>
        <button>Contact</button>
    </ProfileCard>
    </>
)
}
export default ProFile;
function ProfileCard(name,age,grettings,children){
    // const{name,age,grettings,children}=props
    return(
        <>
        <h2>Name:{name}</h2>
        <p>Age:{age}</p>
        <div>{grettings}</div>
        <div>{children}</div>
        </>
    )
}