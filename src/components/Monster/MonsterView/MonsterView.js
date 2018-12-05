import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import { Card, Table as AntTable, Row as AntRow, Col } from "antd"

import type { Monster } from "types"
import { MonsterAPI, RecipeAPI } from "api"
import Facts from "./Facts"
import "./MonsterView.css"
import GrowthRates from "./GrowthRates"

const alphabetical = (a, b, key) => (key ? a[key].localeCompare(b[key]) : a.localeCompare(b))

class MonsterView extends Component<Props> {
    getImage(monster) {
        try {
            return require(`assets/images/breeds/${monster.name}.png`)
        } catch (_) {
            return null
        }
    }

    render() {
        const { match } = this.props
        const monster: Monster = MonsterAPI.get(match.params.breed)

        /** redirect if monster doesn't exist */
        if (!monster) return <Redirect push to="/404" />

        const img = this.getImage(monster)

        const recipesTo = RecipeAPI.getTo(monster.name).sort((a, b) => alphabetical(a, b, "base"))
        const recipesFrom = RecipeAPI.getFrom(monster.name).sort((a, b) => alphabetical(a, b, "offspring"))

        return (
            <AntRow gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col xs={24} sm={12} md={8} lg={8} xl={6}>
                    <Facts monster={monster} img={img} />

                    <GrowthRates monster={monster} />
                </Col>

                <Col xs={24} sm={12} md={9} lg={8} xl={8}>
                    <Recipes recipes={recipesFrom} monster={monster} title="Recipes From" />
                </Col>

                <Col xs={24} sm={12} md={9} lg={8} xl={8}>
                    <Recipes recipes={recipesTo} monster={monster} title="Recipes To" />
                </Col>
            </AntRow>
        )
    }
}

const Recipes = ({ recipes, monster, title }) => (
    <Card title={title} bordered={false} className="ant-card--growth">
        <AntTable
            dataSource={recipes}
            pagination={false}
            columns={[
                {
                    title: "Pedigree",
                    dataIndex: "base",
                    key: "base",
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
                    key: "offspring",
                    sorter: (a, b) => alphabetical(a, b, "offspring"),
                    render: (offspring = monster.name) => <Link to={`/breeds/${offspring}`}>{offspring}</Link>,
                },
            ]}
            size="medium"
        />
    </Card>
)

export default MonsterView
