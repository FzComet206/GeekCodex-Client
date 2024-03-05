import axios, { AxiosResponse} from 'axios';

export interface Me{
    userid: number;
    username: string;
    token: string; 
}

const me = async (): Promise<Me> => {

    console.log("ping");
    
    try {
        const response: AxiosResponse<Me> = await axios.get(
        process.env.API_URL + "/auth/me",
        { headers: { 'Content-Type': 'application/json' }, withCredentials: true} ,
        );

        return response.data;

    } catch (error) {
        return {userid: 0, username: "", token: ""}
    };
}

export { me };