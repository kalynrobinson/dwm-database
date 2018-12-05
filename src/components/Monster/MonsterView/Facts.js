import React, { Fragment } from "react"
import { Card, Icon, Table, Tooltip } from "antd"
import { Link } from "react-router-dom"

import { StatAPI } from "api"
import type { Stat } from "types"
import "./Facts.css"

const SX: { male: number, female: number }[] = [
    { male: 100, female: 0 },
    { male: 90, female: 10 },
    { male: 50, female: 50 },
    { male: 83, female: 17 },
]

const columns = [
    {
        dataIndex: "stat",
        key: "stat",
    },
    {
        dataIndex: "value",
        key: "value",
    },
]

const Facts = ({ monster, img }) => {
    const sxProb = SX[monster.stats.SX]

    const dataSource = [
        {
            stat: "Family",
            value: <Link to={`/families/${monster.family}`}>{monster.family}</Link>,
        },
        {
            stat: "Skills",
            value: monster.skills
                .map((skill) => (
                    <Link to={`/skills/${skill}`} className="mr-2">
                        {skill}
                    </Link>
                ))
                .reduce((accu, elem) => {
                    return accu === null ? [elem] : [...accu, ", ", elem]
                }, null),
        },
        {
            stat: "Sex",
            value: (
                <Fragment>
                    <span>
                        <Icon type="man" className="icon icon--man" />
                        &nbsp;{sxProb.male}%
                    </span>
                    &nbsp;/&nbsp;
                    <span>
                        <Icon type="woman" className="icon icon--woman" />
                        &nbsp;
                        {sxProb.female}%
                    </span>
                </Fragment>
            ),
        },
        {
            stat: "Location",
            value: (monster.locations || []).map((loc) => (
                <span key={`location-${loc}`} className="mr-2">
                    {loc}
                </span>
            )),
        },
    ]

    const ME: Stat = StatAPI.get("ME")
    const FL: Stat = StatAPI.get("FL")

    return (
        <Card
            title={
                <Fragment>
                    <span className="mr-2">{monster.name}</span>
                    <Tooltip placement="topLeft" title={`${ME.name} - ${ME.description}`}>
                        <Icon type="gold" className="mr-2" />
                    </Tooltip>
                    <Tooltip placement="topLeft" title={`${FL.name} - ${FL.description}`}>
                        <Icon type="cloud" />
                    </Tooltip>
                </Fragment>
            }
            bordered={false}
            className="mb-3 ant-card--hide-thead"
        >
            <Table dataSource={dataSource} columns={columns} pagination={false} />
        </Card>
    )
}

export default Facts
