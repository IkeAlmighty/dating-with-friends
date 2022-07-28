import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (!user)
    return (
      <div>
        <h1>Welcome to Dating with Friends!</h1>
        <Link href="/api/auth/login">
          <a>Click To Login/Signup</a>
        </Link>
      </div>
    );
  else {
    return <div>{user.name}</div>;
  }
}
