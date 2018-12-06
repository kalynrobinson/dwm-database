import React from "react"
import { Card, Icon, Table, Tooltip } from "antd"

import { StatAPI } from "api"
import type { Monster } from "types"

type DataEntry = { stat: string, value: number }
type Props = { monster: Monster }

/** Stats that are "growth" stats, i.e. excluding SX, FL, and ME */
const growthStats: string[] = ["Max LVL", "EXP", "HP", "MP", "ATK", "DEF", "AGI", "INT"]

/**
 * Displays monster's max level and growth rates in a data table.
 */
const GrowthRates = ({ monster }: Props) => {
    const growthRates: DataEntry = Object.entries(monster.stats).reduce(
        (acc, [stat, value]) => (growthStats.indexOf(stat) >= 0 ? [...acc, { stat, value }] : acc),
        [],
    )

    const columns = [
        {
            dataIndex: "stat",
            key: "growth-stat",
            render: (value) => (
                <Tooltip placement="topLeft" title={StatAPI.get(value).name}>
                    <Icon type="question-circle" className="mr-2" />
                    {value}
                </Tooltip>
            ),
        },
        {
            dataIndex: "value",
            key: "growth-value",
        },
    ]

    return (
        <Card title="Growth Rates" bordered={false} className="ant-card--hide-thead">
            <Table dataSource={growthRates} pagination={false} columns={columns} size="medium" rowKey="stat" />
        </Card>
    )
}

export default GrowthRates
