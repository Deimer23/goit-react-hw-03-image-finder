import axios from "axios";

async function getImage(query, page){
    const response = await axios.get(`https://pixabay.com/api/?key=35985759-e1d6ff66bac9425b2a65b15e0&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`);    
    return response.data;
}

export default getImage;
