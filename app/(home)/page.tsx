import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import UserProfile from "@/components/UserProfile";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <header>
        <h1>I dont know what this project is yet</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/admin">Admin Dashboard</a>
          <a href="/admin/users">Manage Users</a>
          <UserProfile />
        </nav>
      </header>
      <main>

      </main>
      <footer>&copy; {new Date().getFullYear()} Natãn Schneider. All Rights Reserved.</footer>
    </div>
  );
}
