import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { CourseType } from "../../../services/courseService";
import SlideCard from "../slideCard";

interface props {
    course: CourseType[];
}

const SlideComponent = ({ course }: props) => {
    let slideCount = 0;
    if(course.length > 4) {
        slideCount = 4;
    } else {
        slideCount = course.length;
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center py-4">
                <Splide options={{
                    type:"loop",
                    perPage: slideCount,
                    perMove: 1,
                    width: slideCount * 300,
                    pagination: false,
                    arrows: course.length > 4 ? true : false,
                    drag: course.length > 4 ? true : false,
                    breakpoints: {
                        1200: {
                            perPage: slideCount >= 2 ? 2 : 1,
                            width: slideCount >= 2 ? 600 : 300,
                            arrows: course.length > 2 ? true : false,
                            drag: course.length > 2 ? true : false,
                        },
                        600: {
                            perPage: 1,
                            width: 300,
                            arrows: course.length > 1 ? true : false,
                            drag: course.length > 1 ? true : false,
                        },
                        300: {
                            width: 270
                        }
                    }
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