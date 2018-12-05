import stats from "./data/stats"

const StatAPI = {
    all: () => stats,
    get: (id) => stats[id],
}

export default StatAPI
