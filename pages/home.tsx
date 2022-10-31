import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../src/components/common/footer";
import SpinnerComp from "../src/components/common/spinner";
import FavoriteCategory from "../src/components/homeAuth/favoriteCategory";
import FeaturedCategory from "../src/components/homeAuth/featuredCategory";
import FeaturedSection from "../src/components/homeAuth/featuredSection";
import ListCategory from "../src/components/homeAuth/listCategories";
import NewestCategory from "../src/components/homeAuth/newestCategory";

const HomeAuth = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!sessionStorage.getItem("onebitflix-token")) {
            router.push("/login");
        }else {
            setLoading(false)
        }
    }, [])

    if(loading) {
        return <SpinnerComp />
    }

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
            <FeaturedCategory />
            <ListCategory />
            <Footer />
        </main>
        </>
    );
};

export default HomeAuth;