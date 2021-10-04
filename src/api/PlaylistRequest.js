import axios from 'axios';

const PlaylistRequest = async(method, url, params) => {


    const { data } = await axios({
        method,
        url,
        data: params,
    });
    return data;
};

export default PlaylistRequest;
