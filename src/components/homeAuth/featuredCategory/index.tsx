import useSWR from 'swr';
import styles from '../../../../styles/slideCategory.module.scss';
import courseService from '../../../services/courseService';
import SlideComponent from '../../common/slideComponent';
import SpinnerComp from '../../common/spinner';

const FeaturedCategory = function () {
    const { data, error } = useSWR("/featured", courseService.getFavCourses);
    
    if(error) {
        return error;
    }

    if(!data) {
        return <SpinnerComp />;
    }
    
    return (
        <>
            <p className={ styles.titleCategory }>EM DESTAQUE</p>
            <SlideComponent course={ data.data } />
        </>
    );
};

export default FeaturedCategory;