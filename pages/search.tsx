import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
//Services
import courseService, { CourseType } from "../src/services/courseService";
//Components
import Footer from "../src/components/common/footer";
import HeaderAuth from "../src/components/common/headerAuth";
import SearchCard from "../src/components/searchCard";

import { Container } from "reactstrap";

import styles from "../styles/search.module.scss";
import SpinnerComp from "../src/components/common/spinner";

const Search = () => {
  const router = useRouter();
  const searchName: any = router.query.name!;
  const [searchResult, setSearchResult] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem("onebitflix-token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <SpinnerComp />;
  }

  const searchCourses = async () => {
    const res = await courseService.getSearch(searchName);
    setSearchResult(res.data.courses);
  };

  useEffect(() => {
    searchCourses();
  }, [searchName]);

  return (
    <>
      <Head>
        <title>Onebitflix - {searchName}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <HeaderAuth />
        </div>
        <section className={styles.mainContent}>
          {searchResult.length >= 1 ? (
            <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
              {searchResult?.map((course) => (
                <SearchCard key={course.id} course={course} />
              ))}
            </Container>
          ) : (
            <p className={styles.noSearchText}>Nenhum resultado encontrado!</p>
          )}
        </section>
        <div className={styles.footer}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Search;
