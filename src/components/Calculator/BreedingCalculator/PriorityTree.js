import React, { Fragment } from "react";
import { Card, Icon, Table, Tooltip } from "antd";
import { Link } from "react-router-dom";

import type { Recipe } from "types";
import "./PriorityTree.css";

type Props = { recipes: Recipe[] };

const PriorityTree = ({ recipes }: Props) => (
    <Card title="Priority Tree" className="ant-card--no-padding">
        <Table
            dataSource={recipes.map((recipe: Recipe, ndx: number) => ({
                recipe: { ...recipe, priority: ndx + 1 },
                offspring: recipe,
            }))}
            pagination={false}
            columns={columns}
            size="medium"
            rowKey={({ recipe }) => `${recipe.base}-${recipe.mate}`}
            onHeaderRow={(col, ndx) => ({ className: "sr-only" })}
        />
    </Card>
);

const RecipeCell = ({ base, mate, priority }) => {
    const alt: string = `Priority ${priority}`;
    return (
        <Fragment>
            <Tooltip placement="topLeft" title={alt}>
                <Icon type="question-circle" className="mr-2" alt={alt} />
            </Tooltip>
            <Link to={`/breeds/${base}`}>{base}</Link>+{" "}
            <Link to={`/breeds/${mate}`}>{mate}</Link>
        </Fragment>
    );
};

const OffspringCell = ({ offspring, notes }) => (
    <span>
        <Link to={`/breeds/${offspring}`}>{offspring}</Link>
        {notes && <div className="text-muted">{notes}</div>}
    </span>
);

const columns = [
    {
        title: "Recipe",
        dataIndex: "recipe",
        render: RecipeCell,
    },
    {
        title: "Offspring",
        dataIndex: "offspring",
        render: OffspringCell,
    },
];

export default PriorityTree;
