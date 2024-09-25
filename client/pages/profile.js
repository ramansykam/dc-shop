import { useSession, signIn } from 'next-auth/react';

export default function ProfilePage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn('google');
    },
  });

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Your Profile</h1>
      <p>Name: {session.user.name}</p>
      <p>Email: {session.user.email}</p>
    </div>
  );
}
