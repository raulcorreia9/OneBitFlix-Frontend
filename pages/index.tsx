import { ReactNode } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
//Components
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "../src/components/homeNoAuth/presentationSection";
import CardsSection from "../src/components/homeNoAuth/cardsSection";
import SlideSection from "../src/components/homeNoAuth/slideSection";
//Style
import styles from "../styles/HomeNoAuth.module.scss";
//Services
import courseService, { CourseType } from "../src/services/courseService";
import Footer from "../src/components/common/footer";

interface IndexPageProps {
  chrildren?: ReactNode;
  course: CourseType[];
} 

const HomeNoAuth = ({ course }: IndexPageProps) => {
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
          <SlideSection newestCourses={ course }/>
          <Footer />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewestCourse();
  return {
    props: {
      course: res.data
    },
    revalidate: 3600 * 24,
  }
}

export default HomeNoAuth;