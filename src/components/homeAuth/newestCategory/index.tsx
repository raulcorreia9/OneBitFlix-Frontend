import useSWR from "swr";
import courseService from "../../../services/courseService";
import SlideComponent from "../../common/slideComponent";
import styles from '../../../../styles/slideCategory.module.scss';
import SpinnerComp from "../../common/spinner";

const NewestCategory = () => {
    const { data, error } = useSWR("/newest", courseService.getNewestCourse);
    
    if(error) {
        return error;
    }

    if(!data) {
        return <SpinnerComp />;
    }
    
    return (
        <>
            <p className={ styles.titleCategory }>LANÇAMENTOS</p>
            <SlideComponent course={ data.data } />
        </>
    )
}

export default NewestCategory;