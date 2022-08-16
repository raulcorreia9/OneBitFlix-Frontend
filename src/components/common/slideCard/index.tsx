import styles from './styles.module.scss';
import { CourseType } from '../../../services/courseService';

interface props {
    course: CourseType;
}

const SlideCard = ({ course }: props) => {
    return (
        <>
            <div className={ styles.slide }>
                <img src={ `${process.env.NEXT_PUBLIC_BASEURL}/${ course.thumbnailUrl }` } alt={ course.name } className={ styles.slideImg }/>
                <p className= { styles.slideTitle }>{ course.name }</p>
                <p className= { styles.slideDescription }>{ course.synopsis }</p>
            </div>
        </>
    );
}

export default SlideCard;