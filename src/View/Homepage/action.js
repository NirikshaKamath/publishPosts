import {
    ADD_POSTS,

} from "./constants";


//listPost

export function addPosts(data) {
    return {
        type: ADD_POSTS,
        payload: data
    };
}

