import React from "react"
import { Link } from "react-router-dom"
import { Card, Table } from "antd"

const alphabetical = (a, b, key) => (key ? a[key].localeCompare(b[key]) : a.localeCompare(b))

const Recipes = ({ recipes, monster, title }) => (
    <Card title={title} bordered={false} className="ant-card--growth">
        <Table
            dataSource={recipes}
            pagination={false}
            columns={[
                {
                    title: "Pedigree",
                    dataIndex: "base",
                    sorter: (a, b) => alphabetical(a, b, "base"),
                    render: (base) => <Link to={`/breeds/${base}`}>{base}</Link>,
                },
                {
                    title: "Mate",
                    dataIndex: "mate",
                    key: "mate",
                    sorter: (a, b) => alphabetical(a, b, "mate"),
                    render: (mate) => <Link to={`/breeds/${mate}`}>{mate}</Link>,
                },
                {
                    title: "Offspring",
                    dataIndex: "offspring",
                    sorter: (a, b) => alphabetical(a, b, "offspring"),
                    render: (offspring = monster.name) => <Link to={`/breeds/${offspring}`}>{offspring}</Link>,
                },
            ]}
            size="medium"
            rowKey={(record) => `${record.base}-${record.mate}`}
        />
    </Card>
)

export default Recipes
