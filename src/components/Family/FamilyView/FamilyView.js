import React from "react";
import { Col, Row } from "antd";

import { FamilyAPI, MonsterAPI } from "api";
import type { Family, Monster } from "types";

import AvailableSkills from "./AvailableSkills";
import AverageGrowthRates from "./AverageGrowthRates";
import FamilyCard from "../FamilyCard";

/**
 * Displays data for an individual family.
 */
const FamilyView = ({ match }) => {
    const family: Family = FamilyAPI.get(match.params.family);
    const monsters: Monster[] = MonsterAPI.where("family", family);

    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} type="flex">
            <Col xs={24} sm={12} md={12} lg={8} xl={6} className="mb-3">
                <FamilyCard title={family} monsters={monsters} />
            </Col>

            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                <AverageGrowthRates monsters={monsters} />
            </Col>

            <Col xs={24} sm={24} md={24} lg={10} xl={10} className="mb-3">
                <AvailableSkills monsters={monsters} />
            </Col>
        </Row>
    );
};

export default FamilyView;
