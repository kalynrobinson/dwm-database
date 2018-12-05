import recipes from "./data/recipes"

const RecipeAPI = {
    all: () => recipes,
    getFrom: (id) => recipes.filter(({ offspring }) => offspring === id),
    getTo: (id) => recipes.filter(({ base, mate }) => base === id || mate === id),
}

export default RecipeAPI
