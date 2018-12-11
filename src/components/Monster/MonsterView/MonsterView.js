import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col } from "antd";

import { MonsterAPI, RecipeAPI } from "api";
import type { Monster } from "types";
import { alphabetical } from "utilities/sorters";

import Facts from "./Facts";
import GrowthRates from "./GrowthRates";
import Recipes from "./Recipes";
import "./MonsterView.css";

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
            return require(`assets/images/breeds/${monster.name}.png`);
        } catch (_) {
            return null;
        }
    }

    render() {
        const { match } = this.props;
        const monster: Monster = MonsterAPI.get(match.params.breed);

        /** redirect if monster doesn't exist */
        if (!monster) return <Redirect push to="/404" />;

        const img = this.getImage(monster);
        const recipesTo = RecipeAPI.getTo(monster.name).sort((a, b) =>
            alphabetical(a.base, b.base),
        );
        const recipesFrom = RecipeAPI.getFrom(monster.name).sort((a, b) =>
            alphabetical(a.offspring, b.offspring),
        );

        return (
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col xs={24} sm={12} md={12} lg={8} xl={6}>
                    <Facts monster={monster} img={img} />
                </Col>

                <Col xs={24} sm={12} md={12} lg={6} xl={4}>
                    <GrowthRates stats={monster.stats} />
                </Col>

                <Col xs={24} sm={24} md={24} lg={10} xl={14}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} sm={24} md={12} lg={24} xl={12}>
                            <Recipes
                                recipes={recipesFrom}
                                monster={monster}
                                title="Recipes From"
                            />
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={24} xl={12}>
                            <Recipes
                                recipes={recipesTo}
                                monster={monster}
                                title="Recipes To"
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default MonsterView;
