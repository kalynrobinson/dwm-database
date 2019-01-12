import React, { Fragment } from "react";
import { Col, Icon, Row } from "antd";
import classNames from "classnames";
import sortBy from "lodash.sortby";

import { ResistanceAPI } from "api";

import ResistanceCard from "./ResistanceCard";
import "assets/css/rpg-awesome.min.css";

const icons = {
    Help: "team",
    Air: "cloud",
    Blind: "eye-invisible",
    Lightning: "thunderbolt",
    Fire: "fire",
    "Fire AOE": "fire",
    "Fire Breath": "ra ra-dragon-breath",
    OHKO: "trophy",
    "Turn Skip": "hourglass",
    Explosion: "ra ra-bomb-explosion",
    Silence: "ellipsis",
    "Mutual Destruction": "flag",
    "MP Down": "fall",
    "DEF Down": "fall",
    "AGI Down": "fall",
    Ice: "ra ra-ice-cube",
    "Ice Breath": "ra ra-snowflake",
    Panic: "ra ra-uncertainty",
    Poison: "ra ra-acid",
    Curse: "ra ra-death-skull",
    Sleep: "ra ra-brain-freeze",
    Paralysis: "ra ra-lightning-sword",
    GigaSlash: "ra ra-slash-ring",
    MegaMagic: "ra ra-doubled",
    "Breath Suspend": "ra ra-fire-breath",
};

/**
 * Displays data for an individual family.
 */
const ResistanceIndex = ({ match }) => {
    const resistances: Object[] = sortBy(ResistanceAPI.all(), "name");

    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} type="flex">
            {resistances.map((resistance) => (
                <Col
                    key={resistance.name}
                    xs={24}
                    sm={12}
                    md={12}
                    lg={8}
                    xl={6}
                    className="mb-3"
                >
                    <ResistanceCard
                        title={
                            <Fragment>
                                <ResistanceIcon icon={icons[resistance.name]} />
                                <span className="text-dark">
                                    {resistance.name}
                                </span>
                            </Fragment>
                        }
                        skills={resistance.skills}
                        className="height-full"
                    />
                </Col>
            ))}
        </Row>
    );
};

const ResistanceIcon = ({ icon }) =>
    icon.startsWith("ra ") ? (
        <i className={classNames(icon, "mr-2")} />
    ) : (
        <Icon type={icon} className="mr-2" alt="" />
    );
ResistanceIcon.defaultProps = {
    icon: "radar-chart",
};

export default ResistanceIndex;
