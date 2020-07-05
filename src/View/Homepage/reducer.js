import {
    ADD_POSTS,
} from "./constants";

const initialState = {
    postListRequest: false,
    postListSuccess: false,
    postListFail: false,
    postList: [],
    errorMessage: "",


};

const postReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POSTS:
            return {
                ...state,
                postListRequest: false,
                postListSuccess: true,
                postListFail: false,
                postList: action.payload,
                errorMessage: "",
            };

        default:
            return state;
    }
};

export default postReducer;
