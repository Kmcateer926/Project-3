import axios from "axios";

export default {

    savePost: function (parentData) {
        return axios.post("/api/parent", parentData);
    }

}