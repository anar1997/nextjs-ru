import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import youtubeImg from '../public/youtube.png'
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,300;1,300&display=swap" rel="stylesheet"/>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Image 
      src={youtubeImg}
      width={500}
      height={350}
      alt="preview"
      placeholder="blur"
      />
    </Layout>
  );
}
