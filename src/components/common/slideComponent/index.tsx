import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const SlideComponent = () => {
    return (
        <>
            <Splide options={{
                type:"loop",
                perPage: 4,
                perMove: 1,
                pagination: false
            }}>
                <SplideSlide>

                </SplideSlide>
            </Splide>
        </>
    )
}

export default SlideComponent;