import React from "react";

import { growthStats } from "enums";
import type { Monster } from "types";

import GrowthRates from "components/Monster/MonsterView/GrowthRates";

type Props = { monsters: Monster[] };

/**
 * Displays data for an individual family.
 */
const AverageGrowthRates = ({ monsters }: Props) => {
    // calculate average growth rates
    const averages: { [string]: number } = monsters.reduce((avg, { stats }) => {
        growthStats.forEach((stat) => {
            avg[stat] = avg[stat] ? avg[stat] + stats[stat] : stats[stat];
        });
        return avg;
    }, {});
    Object.keys(averages).forEach((stat) => {
        averages[stat] = (averages[stat] / monsters.length).toFixed(2);
    });

    return <GrowthRates title="Average Growth" stats={averages} />;
};

export default AverageGrowthRates;
