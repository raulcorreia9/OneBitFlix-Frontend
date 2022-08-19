import Head from "next/head";
import HeaderAuth from "../src/components/common/headerAuth";

const HomeAuth = () => {
    return (
        <>
        <Head>
            <title>Onebitflix - Home</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
            <p>
                <HeaderAuth />
            </p>
        </main>
        </>
    );
};

export default HomeAuth;