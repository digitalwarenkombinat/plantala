import Link from 'next/link';

export default function CustomLink({ children, href }) {
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
