import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CustomLink({ children, href }) {
  const router = useRouter();

  if (router.asPath === href) {
    return <>{children}</>;
  }

  return href.startsWith('/') || href === '' ? (
    <Link href={href} passHref>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
