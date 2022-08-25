import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home({ planets }) {
  const router = useRouter();
  useEffect(() => {
    router.push('/mercury');
  }, []);
  return <></>;
}
