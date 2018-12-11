import React from "react";
import { Card, Icon, Table, Tooltip } from "antd";

import { StatAPI } from "api";

type DataEntry = { stat: string, value: number };
type Props = {
    stats: { [key: string]: string },
    title?: string,
};

/** Stats that are "growth" stats, i.e. excluding SX, FL, and ME */
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
 * Displays monster's max level and growth rates in a data table.
 */
const GrowthRates = ({ stats, title }: Props) => {
    const growthRates: DataEntry = Object.entries(stats).reduce(
        (acc, [stat, value]) =>
            growthStats.indexOf(stat) >= 0 ? [...acc, { stat, value }] : acc,
        [],
    );

    const columns = [
        {
            dataIndex: "stat",
            key: "growth-stat",
            className: "text-dark",
            render: (value) => {
                const { name } = StatAPI.get(value);
                return (
                    <Tooltip placement="topLeft" title={name}>
                        <Icon
                            type="question-circle"
                            className="mr-2"
                            alt={name}
                        />
                        {value}
                    </Tooltip>
                );
            },
        },
        {
            dataIndex: "value",
            key: "growth-value",
        },
    ];

    return (
        <Card title={title} bordered={false} className="mb-3">
            <Table
                dataSource={growthRates}
                pagination={false}
                columns={columns}
                size="medium"
                rowKey="stat"
                onHeaderRow={(col, ndx) => ({ className: "sr-only" })}
            />
        </Card>
    );
};

GrowthRates.defaultProps = {
    title: "Growth Rates",
};

export default GrowthRates;
