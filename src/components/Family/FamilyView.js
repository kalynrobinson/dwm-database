import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Icon, List, Row, Table, Tooltip } from "antd";
import sortBy from "lodash.sortby";

import type { Family, Monster } from "types";
import { FamilyAPI, MonsterAPI } from "api";

const alphabetical = (a, b) => a.name.localeCompare(b.name);
const growthStats: string[] = [
    "Max LVL",
    "EXP",
    "HP",
    "MP",
    "ATK",
    "DEF",
    "AGI",
    "INT",
];
/**
 * Displays data for an individual family.
 */
const FamilyView = ({ match }) => {
    const family: Family = FamilyAPI.get(match.params.family);
    const monsters: Monster[] = MonsterAPI.where("family", family);

    // build skill-monsters key-value pairs
    const skillsObj: SKill[] = monsters.reduce((skills, monster) => {
        monster.skills.forEach((skill) => {
            if (skills[skill]) skills[skill].push(monster.name);
            else skills[skill] = [monster.name];
        });
        return skills;
    }, {});

    // map key-value pairs to an array of objects for the table to consume
    const skillsArr = Object.entries(skillsObj).map(([name, monsters]) => ({
        name,
        monsters,
    }));
    const skills = sortBy(skillsArr, ["monsters.length", "name"]);

    // calculate average growth ratse
    const averages = monsters.reduce((avg, { stats }) => {
        growthStats.forEach((stat) => {
            avg[stat] = avg[stat] ? avg[stat] + stats[stat] : stats[stat];
        });
        return avg;
    }, {});
    Object.keys(averages).forEach((stat) => {
        averages[stat] = averages[stat] / monsters.length;
    });
    console.log(averages);

    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} type="flex">
            <Col
                key={family}
                xs={24}
                sm={12}
                md={12}
                lg={8}
                xl={6}
                className="mb-3"
            >
                <FamilyCard family={family} monsters={monsters} />
            </Col>
            <Col
                key={family}
                xs={24}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className="mb-3"
            >
                <Card title="Available Skills">
                    <Table
                        dataSource={skills}
                        columns={columns}
                        rowKey="name"
                        size="medium"
                        className="ant-table--margin"
                    />
                </Card>
            </Col>
        </Row>
    );
};

const columns = [
    {
        title: "#",
        dataIndex: "monsters.length",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.monsters.length - b.monsters.length,
    },
    {
        title: "Skill",
        dataIndex: "name",
        sorter: alphabetical,
        render: (skill) => <Link to={`/skills/${skill}`}>{skill}</Link>,
    },
    {
        title: "Monsters",
        dataIndex: "monsters",
        render: (monsters) =>
            monsters
                .map((monster) => (
                    <Link to={`/breeds/${monster}`} key={`link-${monster}`}>
                        {monster}
                    </Link>
                ))
                .reduce((accu, elem) => {
                    return accu === null ? [elem] : [...accu, ", ", elem];
                }, null),
    },
];

const FamilyCard = ({ family, monsters }) => (
    <Card title={family} bordered={false} className="height-full">
        <List
            className="mt-3"
            grid={{
                gutter: 8,
                xs: 2,
                sm: 1,
                md: 2,
                lg: 2,
            }}
            itemLayout="horizontal"
            dataSource={monsters}
            bordered={false}
            pagination={false}
            renderItem={({ name }) => (
                <List.Item>
                    <Link to={`/breeds/${name}`} className="mx-5">
                        {name}
                    </Link>
                </List.Item>
            )}
        />
    </Card>
);

export default FamilyView;
