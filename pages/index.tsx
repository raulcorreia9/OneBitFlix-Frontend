import Head from "next/head";
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import styles from "../styles/HomeNoAuth.module.scss";

const HomeNoAuth = () => {
  return (
    <>
      <Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title" />
        <meta name="description" 
        content="
        Tenha acesso aos melhores conteudos
        de programação de uma forma simples e fácil!
        "/>
      </Head>
      <main>
        <HeaderNoAuth />
      </main>
    </>
  );
};

export default HomeNoAuth;