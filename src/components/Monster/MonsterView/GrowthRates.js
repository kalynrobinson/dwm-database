import React from "react"
import { Card, Icon, Table, Tooltip } from "antd"

import { StatAPI } from "api"

type DataEntry = { stat: string, value: number }

const growthStats = ["Max LVL", "EXP", "HP", "MP", "ATK", "DEF", "AGI", "INT"]

const GrowthRates = ({ monster }) => {
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
            <Table dataSource={growthRates} pagination={false} columns={columns} size="medium" />
        </Card>
    )
}

export default GrowthRates
