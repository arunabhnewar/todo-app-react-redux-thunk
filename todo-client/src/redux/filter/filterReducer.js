import { COLOR_CHANGED, STATUS_CHANGED } from "./filterActionType";
import { initialState } from "./initialState";

// Create reducer function
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUS_CHANGED:
            return {
                ...state,
                status: action.payload,
            }

        case COLOR_CHANGED:
            const { color, changeType } = action.payload;

            switch (changeType) {
                case 'added':
                    return {
                        ...state,
                        colors: [
                            ...state.colors,
                            color,
                        ]
                    }

                case 'removed':
                    return {
                        ...state,
                        colors: state.colors.filter(existColor => existColor !== color),
                    }

                default:
                    return state;
            }


        default:
            return state;
    }
}

export default filterReducer;