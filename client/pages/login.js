import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => signIn('google')}>Sign In with Google</button>
    </div>
  );
}
