import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
//Services
import courseService, { CourseType } from "../../../src/services/courseService";
//Components
import HeaderGeneric from "../../../src/components/common/headerGeneric";

import styles from "../../../styles/episodePlayer.module.scss";
import SpinnerComp from "../../../src/components/common/spinner";
import { Button, Container } from "reactstrap";
import ReactPlayer from "react-player";

const EpisodePlayer = () => {
  const router = useRouter();
  const [course, setCourse] = useState<CourseType>();
  const episodeOrder = parseFloat(router.query.id?.toString() || "");
  const courseId = router.query.courseid?.toString() || "";

  const getCourse = async function () {
    if (typeof courseId !== "string") {
      return;
    }
    const res = await courseService.getEpisodes(courseId);
    if (res.status === 200) {
      console.log("ok");
      setCourse(res.data);
    }
  };

  const handleLastEpisode = () => {
    router.push(`/course/episode/${episodeOrder - 1 }?courseid=${courseId}`)
  }

  const handleNextEpisode = () => {
    router.push(`/course/episode/${episodeOrder + 1 }?courseid=${courseId}`)
  }

  useEffect(() => {
    getCourse();
  }, [courseId]);

  if (course?.episodes === undefined) {
    return <SpinnerComp />;
  }

  return (
    <>
      <Head>
        <title>Onebitflix - {course.episodes[episodeOrder].name}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <HeaderGeneric
          logoUrl="/home"
          btnContent={"Voltar para o curso"}
          btnUrl={`/course/${courseId}`}
        />
        <Container className="d-flex flex-column align-items-center gap-3 pt-5">
          <p className={styles.episodeTitle}>
            {course.episodes[episodeOrder].name}
          </p>
          {typeof window == "undefined" ? null : (
            <ReactPlayer
              className={styles.player}
              url={`${
                process.env.NEXT_PUBLIC_BASEURL
              }/episodes/stream?videoUrl=${
                course.episodes[episodeOrder].videoUrl
              }&token=${sessionStorage.getItem("onebitflix-token")}`}
              controls
            />
          )}
          <div className={ styles.episodeButtonDiv }>
              <Button 
                className={ styles.episodeButton}
                disabled={ episodeOrder === 0 ? true : false }
                onClick={ handleLastEpisode }
              >
                <img 
                    src="/episode/iconArrowLeft.svg" 
                    alt="Left Arrow"
                    className={ styles.arrowImg } 
                />
              </Button>
              <Button 
                className={ styles.episodeButton}
                disabled={ episodeOrder === (course.episodes.length - 1) ? true : false }
                onClick={ handleNextEpisode }
              >
                <img 
                    src="/episode/iconArrowRight.svg" 
                    alt="Right Arrow"
                    className={ styles.arrowImg } 
                />
              </Button>
          </div>
          <p className="text-center py-4">
              { course.episodes[episodeOrder].synopsis }
          </p>
        </Container>
      </main>
    </>
  );
};

export default EpisodePlayer;
