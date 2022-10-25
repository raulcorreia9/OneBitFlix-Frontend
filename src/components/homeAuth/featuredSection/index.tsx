import styles from './styles.module.scss';
import useSWR from 'swr';
import courseService, { CourseType } from '../../../services/courseService';
import { Button, Container } from 'reactstrap';
import Link from 'next/link';
//Components
import HeaderAuth from '../../common/headerAuth';
import SpinnerComp from '../../common/spinner';

const FeaturedSection = () => {
    const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);
    
    if(error) {
        return error;
    }

    if(!data) {
        return <SpinnerComp />
    }

    return (
        <>
            { 
                data.data?.map((course: CourseType) => (
                    <div
                        style={{ 
                            backgroundImage: `linear-gradient(to bottom, #6666661a, #151515),
                            url(${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl})`,
                            backgroundSize: "cover", backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            height: "480px" 
                        }} 
                        key={ course.id }
                    >
                        <HeaderAuth />
                        <Container className='pt-4'>
                            <p className={ styles.title }>{ course.name }</p>
                            <p className={ styles.description }>{ course.synopsis }</p>
                            <Link href={ `/course/${ course.id }` }>
                                <Button outline color='light' className={ styles.button }>
                                    ACESSE AGORA!
                                    <img 
                                        src="/buttonPlay.svg" 
                                        alt="button image"
                                        className={ styles.buttonImg } 
                                    />
                                </Button>
                            </Link>
                        </Container> 
                    </div>
                ))[0]
            }
        </>
    );
};

export default FeaturedSection;