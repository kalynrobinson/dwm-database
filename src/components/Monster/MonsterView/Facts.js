import React, { Fragment } from "react";
import { Card, Icon, Table, Tooltip } from "antd";
import { Link } from "react-router-dom";

import { StatAPI } from "api";
import type { Stat } from "types";
import "./Facts.css";

type Probability = { male: number, female: number };
const SX: Probability[] = [
    { male: 100, female: 0 },
    { male: 90, female: 10 },
    { male: 50, female: 50 },
    { male: 83, female: 17 },
];

type Column = { dataIndex: string, key: string, className?: string };
const columns: Column = [
    {
        dataIndex: "stat",
        key: "facts-stat",
        className: "text-dark",
    },
    {
        dataIndex: "value",
        key: "facts-value",
    },
];

const Facts = ({ monster, img }) => {
    const sxProb: Probability = SX[monster.stats.SX];

    const dataSource = [
        {
            stat: "Family",
            value: (
                <Link to={`/families/${monster.family}`}>{monster.family}</Link>
            ),
        },
        {
            stat: "Skills",
            value: monster.skills
                .map((skill) => (
                    <Link to={`/skills/${skill}`} key={`link-${skill}`}>
                        {skill}
                    </Link>
                ))
                .reduce((accu, elem) => {
                    return accu === null ? [elem] : [...accu, " / ", elem];
                }, null),
        },
        {
            stat: "Sex",
            value: (
                <Fragment>
                    <span>
                        <Icon
                            type="man"
                            className="icon icon--man"
                            alt="Male"
                            title="Male"
                        />
                        &nbsp;{sxProb.male}%
                    </span>
                    {` / `}
                    <span>
                        <Icon
                            type="woman"
                            className="icon icon--woman"
                            alt="Female"
                            title="Male"
                        />
                        &nbsp;
                        {sxProb.female}%
                    </span>
                </Fragment>
            ),
        },
        {
            stat: "Location",
            value:
                monster.locations && monster.locations.length
                    ? monster.locations.map((loc) => (
                          <span key={`location-${loc}`} className="mr-2">
                              {loc}
                          </span>
                      ))
                    : "Unknown",
        },
    ];

    const { ME, FL } = monster.stats;
    const metalSlime: Stat = ME && StatAPI.get("ME");
    const flying: Stat = FL && StatAPI.get("FL");

    return (
        <Card
            title={
                <Fragment>
                    <span className="mr-2">{monster.name}</span>
                    {!!ME && (
                        <Tooltip
                            placement="topLeft"
                            title={`${metalSlime.name} - ${
                                metalSlime.description
                            }`}
                        >
                            <Icon
                                type="gold"
                                className="mr-2"
                                alt="MetalSlime Family"
                            />
                        </Tooltip>
                    )}
                    {!!FL && (
                        <Tooltip
                            placement="topLeft"
                            title={`${flying.name} - ${flying.description}`}
                        >
                            <Icon type="cloud" alt="Flying Monster" />
                        </Tooltip>
                    )}
                </Fragment>
            }
            bordered={false}
            className="ant-card--no-padding mb-3"
        >
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                rowKey={(record) => record.stat}
                onHeaderRow={(col, ndx) => ({ className: "sr-only" })}
            />
        </Card>
    );
};

export default Facts;
