import styles from '../../../../styles/slideCategory.module.scss';
import useSWR from "swr";
import categoriesService, { CategoryType } from "../../../services/categoriesService";
import ListCategoriesSlide from '../listCategoriesSlide';

const ListCategory = () => {
    const { data, error } = useSWR("/categories", categoriesService.getCategories);
    
    if(error) {
        return error;
    }

    if(!data) {
        return (<><p>Loading...</p></>)
    }
    
    return(
        <>
            {data.data.categories?.map((category: CategoryType) => (
               <ListCategoriesSlide 
                    key={ category.id }
                    categoryId={ category.id }
                    categoryName={ category.name } 
                />
            ))}
        </>
    );
};

export default ListCategory;