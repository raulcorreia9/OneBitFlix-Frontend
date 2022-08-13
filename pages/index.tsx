import Head from "next/head";

//Components
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "../src/components/homeNoAuth/presentationSection";
import CardsSection from "../src/components/homeNoAuth/cardsSection";
//Style
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
        <div className={ styles.sectionBackground }>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
          <CardsSection />
      </main>
    </>
  );
};

export default HomeNoAuth;