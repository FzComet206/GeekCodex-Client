import axios, { AxiosResponse} from 'axios';

export interface PostResponse{
}

export interface Post{
}

const post = async (formData: FormData): Promise<PostResponse> => {

    try {
        const response: AxiosResponse<Post> = await axios.post(
        process.env.API_URL + "/auth/post",
        formData, 
        { headers: { 'Content-Type' : 'multipart/form-data' } ,withCredentials: true });

        console.log(response.data)
        return response.data;

    } catch (error) {
        return {};
    };
}

export { post };