import resistances from "./data/resistances";

const ResistanceAPI = {
    all: () => resistances,
    get: (id) => resistances.find(({ name }) => name === id),
};

export default ResistanceAPI;
