import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Table, Card } from "antd"

import { FamilyAPI } from "api"
import type { Monster } from "types"
import MonsterAPI from "api/MonsterAPI"

const alphabetical = (a, b) => a.name.localeCompare(b.name)

class MonsterIndex extends Component<Props> {
    render() {
        const monsters: Monster = Object.values(MonsterAPI.all())
        const families: Family = FamilyAPI.keys()

        const columns = [
            {
                title: "Name",
                dataIndex: "name",
                key: "name",
                sorter: alphabetical,
                render: (name) => <Link to={`/breeds/${name}`}>{name}</Link>,
            },
            {
                title: "Family",
                dataIndex: "family",
                key: "family",
                sorter: alphabetical,
                filters: families.map((family) => ({
                    text: family,
                    value: family,
                })),
                onFilter: (value, record) => record.family === value,
                render: (family) => <Link to={`/families/${family}`}>{family}</Link>,
            },
            {
                title: "Skills",
                dataIndex: "skills",
                key: "skills",
                render: (skills) =>
                    skills
                        .map((skill) => (
                            <Link key={skill} to={`/skills/${skill}`}>
                                {skill}
                            </Link>
                        ))
                        .reduce((accu, elem) => {
                            return accu === null ? [elem] : [...accu, ", ", elem]
                        }, null),
            },
        ]

        return (
            <div style={{ background: "#fff" }}>
                <Table dataSource={monsters} columns={columns} rowKey="name" />
                {/* monster index */}
            </div>
        )
    }
}

export default MonsterIndex
