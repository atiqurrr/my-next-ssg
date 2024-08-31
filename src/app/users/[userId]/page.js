import getUsers from "@/app/services/getUsers";


const page =async (props) => {
    const userList = await getUsers()
    const users = await userList;
    console.log(users)
    const currentId = props.params.userId
    const userData = users[currentId-1]
    return (
        <div className="w-[50%] mt-10 p-6 text-white text-3xl font-bold bg-pink-900 mx-auto">
           <h1 className="bg-black mb-6">Welcome To users details</h1> 
            <h2>Name: {userData.name}</h2>
            <h3>UsersName : {userData.username}</h3>
            <h3>Email: {userData.email}</h3>
            <h3>Phone: {userData.phone}</h3>
            <h3>Website: {userData.website}</h3>
            <h3>Company Name: {userData.company.name}</h3>
            <h3>catchPhrase: {userData.company.catchPhrase}</h3>
            <h3>Bs: {userData.company.bs}</h3>
        </div>
    );
};

export default page;


export async function generateStaticParams(){
    const userList = getUsers()
    const users = await userList;

    return users.map(user=>({
        userId:user.id.toString()
    }))
   
}
    
