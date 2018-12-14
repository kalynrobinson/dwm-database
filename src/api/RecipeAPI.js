import recipes from "./data/recipes";
import type { Monster } from "types";

// species-species
export const PRIORITY_1 = 0,
    // species-family
    PRIORITY_2 = 2,
    // family-species
    PRIORITY_3 = 3,
    // family-family
    PRIORITY_4 = 4;

const RecipeAPI = {
    all: (): Recipe[] => recipes,

    getFrom: (id: string): Recipe[] =>
        recipes.filter(({ offspring }) => offspring === id),

    getTo: (id: string): Recipe[] =>
        recipes.filter(({ base, mate }) => base === id || mate === id),

    getOffspring: (pedigree: Monster, mateIn: Monster): Recipe[] => {
        const results: Recipe[] = recipes
            .reduce((acc: Object, recipe: Recipe) => {
                const { base, mate } = recipe;
                // species-species
                if (pedigree.name === base && mateIn.name === mate) {
                    acc[PRIORITY_1] = recipe;
                }
                // species-family
                else if (pedigree.name === base && mateIn.family === mate) {
                    acc[PRIORITY_2] = recipe;
                }
                // family-species
                else if (pedigree.family === base && mateIn.name === mate) {
                    acc[PRIORITY_3] = recipe;
                }
                // family-family
                else if (pedigree.family === base && mateIn.family === mate) {
                    acc[PRIORITY_4] = recipe;
                }

                return acc;
            }, [])
            .filter((recipe) => recipe);

        return results.length
            ? results
            : [
                  {
                      base: pedigree.name,
                      mate: mateIn.family,
                      offspring: pedigree.name,
                  },
              ];
    },
};

export default RecipeAPI;
