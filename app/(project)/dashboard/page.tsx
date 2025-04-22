import { redirect } from "next/navigation";
import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";

export default async function Dashboard() {
    const session = await auth();

    console.log(session)
    if(!session) {
      redirect('/login')  
    }

    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p>Protected Dashboard</p>
        <p>email: {session?.user?.email ? session?.user?.email :  "Usuario nao esta loagdo"}</p>

        {session.user?.email && (
            <form action={handleAuth}>
                <button className="border py-2 px-4 cursor-pointer" type="submit">Logout</button>

            </form>
        )}

    </div>
    );
  }
  