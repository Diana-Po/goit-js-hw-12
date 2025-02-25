import axios from "axios";

const API_KEY = "49001064-c7b72e374a4ae6399075933f6";
const BASE_URL = "https://pixabay.com/api/";

export let currentPage = 1; 

export function resetPage() {
    currentPage = 1;  
}

export async function fetchImages(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 40,
        page: currentPage,
    };

    try {
        const response = await axios.get(BASE_URL, { params });
        currentPage += 1; 
        return response.data;
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error;
    }
}
