import Link from 'next/link';
import getUsers from '../services/getUsers';

const Page = async() => {
    const userList = await getUsers()
    const users = await userList
    return (
        <div>
            {
                users.map(user=>(
                    <h1 className='p-5 text-center text-indigo-50 hover:bg-zinc-600 m-5 bg-blue-700 w-[25%]' key={user.id}>
                       <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </h1>
                ))

                
            }
        </div>
    );
};

export default Page;