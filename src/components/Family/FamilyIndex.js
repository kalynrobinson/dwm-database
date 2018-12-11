import React from "react";
import { Link } from "react-router-dom";
import { Col, Icon, Row } from "antd";

import type { Monster } from "types";
import { FamilyAPI, MonsterAPI } from "api";

import FamilyCard from "./FamilyCard";

/**
 * Displays data for an individual family.
 */
const FamilyIndex = ({ match }) => {
    const families: string[] = Object.keys(FamilyAPI.all()).sort();
    const monsters: Monster[] = MonsterAPI.groupBy("family");

    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} type="flex">
            {families.map((family) => (
                <Col
                    key={family}
                    xs={24}
                    sm={12}
                    md={12}
                    lg={8}
                    xl={6}
                    className="mb-3"
                >
                    <FamilyCard
                        title={
                            <Link
                                to={`/families/${family}`}
                                className="align-items-center"
                            >
                                <Icon type="link" className="mr-2" alt="" />
                                <span className="text-dark">{family}</span>
                            </Link>
                        }
                        monsters={monsters[family]}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default FamilyIndex;
