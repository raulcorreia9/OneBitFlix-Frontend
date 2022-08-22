import Head from "next/head";
import FavoriteCategory from "../src/components/homeAuth/favoriteCategory";
import FeaturedSection from "../src/components/homeAuth/featuredSection";
import NewestCategory from "../src/components/homeAuth/newestCategory";

const HomeAuth = () => {
    return (
        <>
        <Head>
            <title>Onebitflix - Home</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
            <FeaturedSection />
            <NewestCategory />
            <FavoriteCategory />
        </main>
        </>
    );
};

export default HomeAuth;