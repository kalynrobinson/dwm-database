import monsters from "./data/breeds"

const MonsterAPI = {
    all: () => monsters,
    get: (id) => monsters[id],
}

export default MonsterAPI
