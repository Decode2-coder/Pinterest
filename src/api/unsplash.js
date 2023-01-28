import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID 6txKk7rwImSdvQTSsTEOr90Q1ZJ4gEkKM0Wv311YFX0"
    }
})