import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
//Services
import courseService, { CourseType } from '../src/services/courseService';
//Components
import HeaderAuth from '../src/components/common/headerAuth';

import styles from '../styles/search.module.scss';

const Search = () => {

    const router = useRouter();
    const searchName: any = router.query.name!;
    const [searchResult, setSearchResult] = useState<CourseType[]>([]);

    const searchCourses = async () => {
        const res = await courseService.getSearch(searchName);
        setSearchResult(res.data.courses);
    };

    useEffect(() => {
        searchCourses();
    }, [searchName])

    return(
        <>
            <Head>
                <title>Onebitflix - {searchName}</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <HeaderAuth />
                {searchResult?.map((course) => (
                    <div key={course.id}>
                        <p>{course.name}</p>
                    </div>
                ))}
            </main>
        </>
    );
}

export default Search;