const BASE_SERVER_URL = "http://localhost:8000/api"
const bsu = BASE_SERVER_URL

const ApiUrls = {
    base: bsu,
    activities: {
        userTasks: bsu + "/activities/user-tasks",
        tasks: bsu + "/activities/tasks",
    },

}


export { BASE_SERVER_URL, ApiUrls }