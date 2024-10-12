import axios from "axios";
import { ApiUrls } from "../../common/helpers/server";

const allTasks = async () => {
    try {
        const res = await axios.get(ApiUrls.activities.tasks)
        return res.data
    }
    catch {
        return null
    }
}
const userTasks = async () => {
    try {
        // const res = await axios.get(ApiUrls.activities.userTasks)
        // return res.data
    }
    catch {
        return null
    }
}
export { allTasks, userTasks }