import React from "react";
import { Link } from "react-router-dom";
import { Card, Table } from "antd";

import { alphabetical } from "utilities/sorters";

type Props = {
    recipes: Recipe[],
    /** Fallback for null offspring -- assume offspring is current monster */
    monster: Monster,
    /** Header text */
    title: string,
};

type Filter = { text: string, value: string };

/**
 * Displays table of breeding recipes.
 */
const Recipes = ({ recipes, monster, title }: Props) => {
    const baseFilters: Filter[] = recipesToFilters(recipes, "base");
    const mateFilters: Filter[] = recipesToFilters(recipes, "mate");
    const offspringFilters: Filter[] = recipesToFilters(
        recipes,
        "offspring",
        monster.name,
    );

    return (
        <Card
            title={title}
            bordered={false}
            className="ant-card--no-padding mb-3"
        >
            <Table
                dataSource={recipes}
                pagination={false}
                columns={[
                    {
                        title: "Pedigree",
                        dataIndex: "base",
                        sorter: (a, b) => alphabetical(a.base, b.base),
                        filters: baseFilters,
                        onFilter: (value, record) => record.base === value,
                        render: (value) => (
                            <LinkCell value={value} name={monster.name} />
                        ),
                    },
                    {
                        title: "Mate",
                        dataIndex: "mate",
                        key: "mate",
                        sorter: (a, b) => alphabetical(a.mate, b.mate),
                        filters: mateFilters,
                        onFilter: (value, record) => record.mate === value,
                        render: (value) => (
                            <LinkCell value={value} name={monster.name} />
                        ),
                    },
                    {
                        title: "Offspring",
                        dataIndex: "offspring",
                        sorter: (a, b) =>
                            alphabetical(a.offspring, b.offspring),
                        filters: offspringFilters,
                        onFilter: (value, record) => record.offspring === value,
                        render: (value) => (
                            <LinkCell value={value} name={monster.name} />
                        ),
                    },
                ]}
                size="medium"
                rowKey={(record) => `${record.base}-${record.mate}`}
                className="ant-table--compact-xs"
            />
        </Card>
    );
};

/**
 * Doesn't show link if already viewing that monster
 */
const LinkCell = ({ value, name }: { value: strng, name: string }) =>
    value === name ? value : <Link to={`/breeds/${value}`}>{value}</Link>;

/**
 * @param  {Recipe[]} recipes
 * @param  {string}   key      - Property to map to, e.g. `base` or `mate`
 * @param  {?string}  fallback - Value if `recipe[key]` is falsy
 * @return {Filter[]}
 */
const recipesToFilters = (recipes: Recipe[], key: string, fallback: ?string) =>
    // map objects to key first; otherwise Set won't de-duplicate property
    [...new Set(recipes.map((record) => record[key] || fallback))]
        .sort()
        .map((id) => ({ text: id, value: id }));

export default Recipes;
