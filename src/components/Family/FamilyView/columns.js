import React from "react";
import { Link } from "react-router-dom";

import type { Family, Skill } from "types";
import { alphabetical } from "utilities/sorters";

/**
 * Columns for table of available skills.
 */
const columns = [
    {
        title: "#",
        dataIndex: "monsters.length",
        defaultSortOrder: "descend",
        sorter: (a: Family, b: Family) => a.monsters.length - b.monsters.length,
    },
    {
        title: "Skill",
        dataIndex: "name",
        sorter: (a: Skill, b: Skill) => alphabetical(a.name, b.name),
        render: (skill: string) => <Link to={`/skills/${skill}`}>{skill}</Link>,
    },
    {
        title: "Monsters",
        dataIndex: "monsters",
        render: (monsters) =>
            monsters
                .map((monster: string) => (
                    <Link to={`/breeds/${monster}`} key={`link-${monster}`}>
                        {monster}
                    </Link>
                ))
                .reduce((accu, elem) => {
                    return accu === null ? [elem] : [...accu, ", ", elem];
                }, null),
    },
];

export default columns;
