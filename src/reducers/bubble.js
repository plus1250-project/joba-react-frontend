import {
    BUBBLE_NAME
} from "../actions/bubble.js";
  
export default function changeBubble(state = {
bubbleName: "global",
    }, action) {
    switch (action.type) {
        case BUBBLE_NAME:
        return {
            ...state,
            bubbleName: action.bubbleName,
        };
        default:
        return state;
    }
}