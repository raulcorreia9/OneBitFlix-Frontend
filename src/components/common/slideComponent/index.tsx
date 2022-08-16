import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { CourseType } from "../../../services/courseService";
import SlideCard from "../slideCard";

interface props {
    course: CourseType[];
}

const SlideComponent = ({ course }: props) => {
    return (
        <>
            <div className="d-flex flex-column align-items-center py-4">
                <Splide options={{
                    type:"loop",
                    perPage: 4,
                    perMove: 1,
                    width: 1200,
                    pagination: false,
                    }}>        
                    { course?.map((course) => (
                        <SplideSlide key={ course.id }>
                            {/* SlideCard espera uma props 'course'
                            Passamos esse 'course' como sendo o 'course' do map de todos os cursos */}
                            <SlideCard course={ course }/>
                        </SplideSlide>
                    )) }
                </Splide>
            </div>
        </>
    )
}

export default SlideComponent;