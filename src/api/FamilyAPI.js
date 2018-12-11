import families from "./data/families";

const FamilyAPI = {
    all: () => families,
    keys: () => Object.keys(families),
    get: (id) =>
        Object.keys(families).find((family) => family === id.toUpperCase()),
};

export default FamilyAPI;
