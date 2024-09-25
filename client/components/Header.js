import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

function Header() {
  const { data: session } = useSession();

  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/cart">Cart</Link>
        {session ? (
          <>
            <Link href="/profile">{session.user.name}</Link>
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <button onClick={() => signIn('google')}>Sign In</button>
        )}
      </nav>
    </header>
  );
}

export default Header;
