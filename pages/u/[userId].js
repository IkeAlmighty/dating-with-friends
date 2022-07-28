import { useUser } from "@auth0/nextjs-auth0";

export default function UserProfile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <div>
        <h1>Date Profile: {user.name}</h1>
      </div>
      <div>
        <h2>Stats:</h2>
      </div>
    </div>
  );
}
