import groupBy from "lodash.groupby";

import monsters from "./data/breeds";

const MonsterAPI = {
    all: () => monsters,
    get: (id) => monsters[id],
    where: (property, value) =>
        Object.values(monsters).filter(
            (monster) => monster[property] === value,
        ),
    groupBy: (property) => groupBy(Object.values(monsters), property),
};

export default MonsterAPI;
