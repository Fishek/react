import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos' ,
    {
        headers: {
Authorization: 'Client-ID xrVr1cOnimTOoE2Y8APj4YD1gydIwb4dj1yGRvITZfw'

        },

        params: {
query: term,

        },
    });

    console.log(response)
    return response.data.results;
};


export default searchImages;