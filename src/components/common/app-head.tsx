import Head from 'next/head';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';

const inter = Inter({
  subsets: ['latin']
});

export function AppHead(): JSX.Element {
  const router = useRouter();
  const PUBLIC_URL = 'https://www.iksanarifki.me';
  const ogUrl = `${PUBLIC_URL}${router.asPath === '/' ? '' : router.asPath}`;

  return (
    <>
      <Head>
        <title>Iksan Arifki | Informatic Enginner</title>
        <meta
          name='description'
          content='An online portfolio and blog by M. Iksan Arifki projects, skills in Information Systems, and insights in tech, audit, and risk management.'
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/site.webmanifest' key='site-manifest' />
        <link rel='canonical' href={ogUrl} />
      </Head>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>
    </>
  );
}
