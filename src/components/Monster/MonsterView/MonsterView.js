import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import { Row, Col } from "antd"

import type { Monster } from "types"
import { MonsterAPI, RecipeAPI } from "api"
import Facts from "./Facts"
import GrowthRates from "./GrowthRates"
import Recipes from "./Recipes"
import "./MonsterView.css"

/**
 * Alphabetical comparator, optionally using a data key to access a nested value.
 */
const alphabetical = (a, b, key) => (key ? a[key].localeCompare(b[key]) : a.localeCompare(b))

/**
 * Displays data for an individual monster.
 */
class MonsterView extends Component<Props> {
    /**
     * Attempts to retrieve the monster's sprite.
     *
     * There's probably a saner way to do this than `require`, but #yolo.
     *
     * @param {Monster} monster
     * @return {null|string}
     */
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
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
            </Row>
        )
    }
}

export default MonsterView
