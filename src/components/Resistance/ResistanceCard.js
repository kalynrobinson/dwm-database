import React from "react";
import { Card, List } from "antd";
import { Link } from "react-router-dom";

import type { CommonProps, Monster } from "types";

type Props = CommonProps & {
    monsters: Monster[],
    title: React.Node,
};

const ResistanceCard = ({ skills, title, className }: Props) => (
    <Card title={title} bordered={false} className={className}>
        <List
            grid={{
                gutter: 8,
                xs: 2,
                sm: 1,
                md: 2,
                lg: 2,
            }}
            itemLayout="horizontal"
            dataSource={skills}
            bordered={false}
            pagination={false}
            renderItem={(skill: string) => (
                <List.Item>
                    <Link to={`/skills/${skill}`}>{skill}</Link>
                </List.Item>
            )}
        />
    </Card>
);

export default ResistanceCard;
