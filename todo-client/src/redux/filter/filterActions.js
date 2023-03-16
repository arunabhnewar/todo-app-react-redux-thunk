import { COLOR_CHANGED, STATUS_CHANGED } from "./filterActionType";

// Filter Status Changed Action Create
export const statusChangedAction = (status) => {
    return {
        type: STATUS_CHANGED,
        payload: status,
    }
};


// Filter Color Changed Action Create
export const colorChangedAction = (color, changeType) => {
    return {
        type: COLOR_CHANGED,
        payload: {
            color,
            changeType,
        }
    }
};