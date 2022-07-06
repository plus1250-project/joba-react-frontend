import {
    INDUSTRY_NAME
} from "../actions/industry.js";
  
export default function changeIndustryName(state = {
industryName: "test",
    }, action) {
    switch (action.type) {
        case INDUSTRY_NAME:
        return {
            ...state,
            industryName: action.industryName,
        };
        default:
        return state;
    }
}