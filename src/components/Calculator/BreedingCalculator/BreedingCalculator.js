import React, { Component, Fragment } from "react";
import { Button, Card, Collapse, Select, Col, Form, Row } from "antd";

import { MonsterAPI, RecipeAPI } from "api";
import type { Monster } from "types";

import PriorityTree from "./PriorityTree";

type Props = { form: Object };
type State = { offspring: Monster[] };

export class BreedingCalculator extends Component<Props, State> {
    state: State = {
        offspring: [],
    };

    componentDidMount() {
        // To disable submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({
                    offspring: RecipeAPI.getOffspring(
                        MonsterAPI.get(values.pedigree),
                        MonsterAPI.get(values.mate),
                    ),
                });
            }
        });
    };

    isValid = () => {
        const values = this.props.form.getFieldsValue();
        return !!(values.pedigree && values.mate);
    };

    render() {
        const {
            getFieldDecorator,
            getFieldError,
            isFieldTouched,
        } = this.props.form;
        const { offspring } = this.state;

        const pedigreeError: ?string =
            isFieldTouched("pedigree") && getFieldError("pedigree");
        const mateError: ?string =
            isFieldTouched("mate") && getFieldError("mate");

        return (
            <Fragment>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={16} lg={16} xl={12}>
                        <Collapse bordered={false} defaultActiveKey={[]}>
                            <Collapse.Panel
                                header="Notes on breeding"
                                key="1"
                                className="mb-3"
                            >
                                <p>
                                    If a breeding combination matches two or
                                    more recipes, the game prioritizes the
                                    recipes in the following order:
                                </p>
                                <ol>
                                    <li>Species + Species</li>
                                    <li>Species + Family</li>
                                    <li>Family + Species</li>
                                    <li>Family + Family</li>
                                </ol>
                                <p>
                                    If a breeding combination has no specific
                                    recipes and both monsters are the same
                                    family, the offspring will always be the
                                    pedigree.
                                </p>
                                <p>
                                    Additionally, some recipes require a certain
                                    number of +s, e.g. Dragon + Dragon =
                                    GreatDrak. This will be noted in the
                                    calculator results.
                                </p>
                            </Collapse.Panel>
                        </Collapse>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={24} sm={24} md={16} lg={16} xl={12}>
                        <Card title="Breeding Calculator" className="mb-3">
                            <Form layout="inline" onSubmit={this.handleSubmit}>
                                <Form.Item
                                    validateStatus={
                                        pedigreeError ? "error" : ""
                                    }
                                    help=""
                                >
                                    {getFieldDecorator("pedigree", {
                                        rules: [{ required: true }],
                                    })(
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            placeholder="Pedigree"
                                            optionFilterProp="children"
                                            filterOption={(input, option) =>
                                                option.props.children
                                                    .toLowerCase()
                                                    .indexOf(
                                                        input.toLowerCase(),
                                                    ) >= 0
                                            }
                                        >
                                            {options.map((option) => (
                                                <Select.Option
                                                    key={`pedigree-${
                                                        option.name
                                                    }`}
                                                    value={option.name}
                                                >
                                                    {option.name}
                                                </Select.Option>
                                            ))}
                                        </Select>,
                                    )}
                                </Form.Item>
                                <Form.Item
                                    validateStatus={mateError ? "error" : ""}
                                    help=""
                                >
                                    {getFieldDecorator("mate", {
                                        rules: [{ required: true }],
                                    })(
                                        <Select
                                            showSearch
                                            style={{ width: 200 }}
                                            placeholder="Mate"
                                            optionFilterProp="children"
                                            filterOption={filter}
                                        >
                                            {options.map((option) => (
                                                <Select.Option
                                                    key={`mate-${option.name}`}
                                                    value={option.name}
                                                >
                                                    {option.name}
                                                </Select.Option>
                                            ))}
                                        </Select>,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        disabled={!this.isValid()}
                                    >
                                        Calculate
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        {!!offspring.length && (
                            <PriorityTree recipes={offspring} />
                        )}
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

type Option = { label: string, value: string };

/** Cascader options */
const options: Option[] = Object.values(MonsterAPI.all()).sort();

/** Autocomplete matcher */
const filter = (input, option) =>
    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;

export default Form.create()(BreedingCalculator);
