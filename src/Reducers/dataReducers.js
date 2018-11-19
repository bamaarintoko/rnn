export const initialGet = {
    status          : false,
    status_get      : false,
    data            : [],
    message         : ""
}
export function redData(state = initialGet, action) {
    switch (action.type) {
        case "GET":
            return {
                status          : true,
                status_get      : true,
                data            : [],
                message         : "asd"
            }
        default :
            return state
    }
}