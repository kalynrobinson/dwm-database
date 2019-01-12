import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";

import { FamilyAPI } from "api";
import type { Monster } from "types";
import { alphabetical } from "utilities/sorters";

import MonsterAPI from "api/MonsterAPI";

const MonsterIndex = () => {
    const monsters: Monster[] = Object.values(MonsterAPI.all());
    const families: Family[] = FamilyAPI.keys();

    const columns: $FlowTODO[] = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            sorter: (a, b) => alphabetical(a.name, b.name),
            render: (name) => <Link to={`/breeds/${name}`}>{name}</Link>,
        },
        {
            title: "Family",
            dataIndex: "family",
            key: "family",
            sorter: (a, b) => alphabetical(a.family, b.family),
            filters: families.map((family) => ({
                text: family,
                value: family,
            })),
            onFilter: (value, record) => record.family === value,
            render: (family) => (
                <Link to={`/families/${family}`}>{family}</Link>
            ),
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
                        return accu === null ? [elem] : [...accu, ", ", elem];
                    }, null),
        },
    ];

    return (
        <div style={{ background: "#fff" }}>
            <Table
                dataSource={monsters}
                columns={columns}
                rowKey="name"
                className="ant-table--card"
            />
        </div>
    );
};

export default MonsterIndex;
