import api from './api';

export type EpisodeType = {
    id: number;
    name: string;
    synopsis: string;
    order: number;
    videoUrl: string;
    secondsLong: number;
}

export type CourseType = {
    id: number;
    name: string;
    thumbnailUrl: string;
    synopsis: string;
    episodes?: EpisodeType;
}

const courseService = {
    getNewestCourse: async () => {
        const res = await api.get("/courses/newest").catch((error) => {
            console.log(error.data.message);

            return error;
        })

        return res;
    }
}

export default courseService;