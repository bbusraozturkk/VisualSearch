import axios from "axios";

const searchImages = async (term) =>{
   const response = await axios.get ('https://api.unsplash.com/search/photos',{
        headers: {
Authorization:'Client-ID sV5kzO1RUuNFeDkf23us2PdMzS__m69hI-U23v4sZjA'
        },
        params: {
query: term,
        }

    });
    
    return response.data.results;
};

export default searchImages;