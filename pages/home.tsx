import Head from "next/head";
import FeaturedSection from "../src/components/homeAuth/featuredSection";

const HomeAuth = () => {
    return (
        <>
        <Head>
            <title>Onebitflix - Home</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
            <FeaturedSection />
        </main>
        </>
    );
};

export default HomeAuth;