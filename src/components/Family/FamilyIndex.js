import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Icon, List, Row } from "antd";

import type { Family, Monster } from "types";
import { FamilyAPI, MonsterAPI } from "api";

/**
 * Displays data for an individual family.
 */
const FamilyIndex = ({ match }) => {
    const families: Family[] = Object.keys(FamilyAPI.all()).sort();
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
                    <FamilyCard family={family} monsters={monsters[family]} />
                </Col>
            ))}
        </Row>
    );
};

const FamilyCard = ({ family, monsters }) => (
    <Card
        title={
            <Link to={`/families/${family}`} className="align-items-center">
                <Icon type="link" className="mr-2" alt="" />
                <span className="text-dark">{family}</span>
            </Link>
        }
        bordered={false}
        className="height-full"
    >
        <List
            className="mt-3"
            grid={{
                gutter: 8,
                xs: 2,
                sm: 1,
                md: 2,
                lg: 2,
            }}
            itemLayout="horizontal"
            dataSource={monsters}
            bordered={false}
            pagination={false}
            renderItem={({ name }) => (
                <List.Item>
                    <Link to={`/breeds/${name}`} className="mx-5">
                        {name}
                    </Link>
                </List.Item>
            )}
        />
    </Card>
);

export default FamilyIndex;
