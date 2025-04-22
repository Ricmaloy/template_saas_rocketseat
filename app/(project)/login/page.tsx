import { handleAuth } from "@/app/actions/handle-auth";

export default function Login() {
    return (
      <div className="flex flex-col gap-4 justify-center items-center h-screen">
        <p>Login</p>
        <form
          action={handleAuth}
        >
            <button className="border py-2 px-4 cursor-pointer" type="submit">Sign In with Google</button>
        </form>
      </div>
    );
  }
  