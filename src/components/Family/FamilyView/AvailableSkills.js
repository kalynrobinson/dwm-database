import React from "react";
import { Card, Table } from "antd";
import sortBy from "lodash.sortby";

import type { Monster } from "types";
import columns from "./columns";
import "./AvailableSkills.css";

type DataEntry = { name: string, monsters: Monster[] };
type Props = { monsters: Monster[] };

const AvailableSkills = ({ monsters }: Props) => {
    // build skill-monsters key-value pairs
    const skillsObj: SKill[] = monsters.reduce((skills, monster) => {
        monster.skills.forEach((skill) => {
            if (skills[skill]) skills[skill].push(monster.name);
            else skills[skill] = [monster.name];
        });
        return skills;
    }, {});

    // map key-value pairs to an array of objects for the table to consume
    let skills: DataEntry[] = Object.entries(skillsObj).map(
        ([name, monsters]) => ({
            name,
            monsters,
        }),
    );
    skills = sortBy(skills, ["monsters.length", "name"]);

    return (
        <Card title="Available Skills" className="ant-card--no-padding">
            <Table
                dataSource={skills}
                columns={columns}
                rowKey="name"
                size="medium"
                className="ant-table--card"
            />
        </Card>
    );
};

export default AvailableSkills;
