import useSWR from 'swr';
import styles from '../../../../styles/slideCategory.module.scss';
import courseService from '../../../services/courseService';
import SlideComponent from '../../common/slideComponent';

const FavoriteCategory = () => {
    const { data, error } = useSWR("/favorites", courseService.getFavCourses);
    
    if(error) {
        return error;
    }

    if(!data) {
        return (<><p>Loading...</p></>)
    }
    
    return (
        <>
            <p className={ styles.titleCategory }>MINHA LISTA</p>
            { data.data.courses.length >= 1 ? (
                <SlideComponent course={ data.data.courses }/>
            ) : (
                <p className='text-center pt-3 h5'>
                    <strong>Você não possui cursos favoritados</strong>
                </p>
            ) }
        </>
    );
};

export default FavoriteCategory;
