import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import Head from "next/head";
import { Button, Container } from "reactstrap";
//Components
import HeaderAuth from "../../src/components/common/headerAuth";
//Services
import courseService, { CourseType, EpisodeType } from "../../src/services/courseService";

import styles from "../../styles/coursePage.module.scss";
import SpinnerComp from "../../src/components/common/spinner";
import EpisodeList from "../../src/components/episodeList";

const CoursePage = () => {
    const [course, setCourse] = useState<CourseType>();
    const [liked, setLiked] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const router = useRouter();
    const { id } = router.query;

    const getCourse = async function () {
        if(typeof id !== "string") {
            return;
        }
        const res = await courseService.getEpisodes(id);
        if(res.status === 200) {
            setCourse(res.data);
            setLiked(res.data.liked);
            setFavorited(res.data.favorited);
        }
    };

    useEffect(() => {
        getCourse();
    }, [id])

    const handleLikeCourse = async () => {
        if(typeof id !== "string") {
            return;
        }

        if(liked) {
            await courseService.removeLike(id);
            setLiked(false);
        }else {
            await courseService.like(id);
            setLiked(true);
        }
    }

    const handleFavoriteCourse = async () => {
        if(typeof id !== "string") {
            return;
        }

        if(favorited) {
            await courseService.removeFav(id);
            setFavorited(false);
        }else {
            await courseService.addToFav(id);
            setFavorited(true);
        }
    }

    if(course === undefined) {
        return <SpinnerComp />
    }

    return (
        <>
        <Head>
            <title>Onebitflix - { course?.name }</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
            <div style={{
                backgroundImage: `linear-gradient(to bottom, #6666661a, #151515),
                url(${process.env.NEXT_PUBLIC_BASEURL}/${course?.thumbnailUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "450px"
            }}>
                <HeaderAuth />
            </div>
            <Container className={styles.courseInfo}>

                <p className={styles.courseTitle}>{course?.name}</p>
                <p className={styles.courseDescription}>{course?.synopsis}</p>
                <Button outline className={styles.courseBtn}>
                    ASSISTIR AGORA!
                    <img 
                        src="/buttonPlay.svg"
                        alt="button image"
                        className={styles.buttonImg}
                    />
                </Button>
                <div className={styles.interactions}>
                    { liked === false ? (
                        <img 
                        src="/course/iconLike.svg"
                        alt="likeImage"
                        className={styles.interactionImage}
                        onClick={handleLikeCourse}
                    />
                    ) : (
                        <img 
                        src="/course/iconLiked.svg"
                        alt="likeImage"
                        className={styles.interactionImage}
                        onClick={handleLikeCourse}
                    />
                    )}
                    { favorited === false ? (
                        <img 
                        src="/course/iconAddFav.svg"
                        alt="likeImage"
                        className={styles.interactionImage}
                        onClick={handleFavoriteCourse}
                    />
                    ) : (
                        <img 
                        src="/course/iconFavorited.svg"
                        alt="likeImage"
                        className={styles.interactionImage}
                        onClick={handleFavoriteCourse}
                    />
                    )}
                </div>
            </Container>
            <Container className={styles.episodeInfo}>
                <p className={styles.episodeDivision}>EPISÓDIOS</p>
                <p className={styles.episodeLength}>
                    {course?.episodes?.length} episódios
                </p>
                {course?.episodes?.map((episode: EpisodeType) => (
                    <EpisodeList key={episode.id} episode={episode}/>
                ))}
            </Container>
        </main>
        </>
    );
};

export default CoursePage;
