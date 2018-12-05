import families from "./data/families"

const FamilyAPI = {
    all: () => families,
    keys: () => Object.keys(families),
    get: (id) => families[id.toUpperCase()],
}

export default FamilyAPI
