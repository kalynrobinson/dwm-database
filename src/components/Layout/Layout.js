import React, { Component } from "react";
import { BackTop, Layout as AntLayout, Menu, Icon } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

import Breadcrumbs from "./Breadcrumbs";
import "./Layout.css";

const { Content, Footer, Sider } = AntLayout;

type Props = {
    children: React.ChildrenArray<React.Element>,
    location: $FlowTODO,
};

type State = {
    /** Sidebar's collapsed state */
    collapsed: boolean,
};

class Layout extends Component<Props, State> {
    state: State = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    };

    render() {
        const { children, location } = this.props;
        const { collapsed } = this.state;

        /** @todo Replace inline styles */
        return (
            <AntLayout>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={this.onCollapse}
                    style={{
                        overflow: "auto",
                        height: "100vh",
                        position: "fixed",
                        left: 0,
                        zIndex: 2,
                    }}
                >
                    <div
                        style={{
                            height: "32px",
                            background: "rgba(255,255,255,.2)",
                            margin: "16px",
                        }}
                    />

                    <Menu
                        theme="dark"
                        selectedKeys={[
                            location.pathname
                                .split("/")
                                .slice(0, 2)
                                .join("/"),
                        ]}
                        mode="inline"
                    >
                        <Menu.Item key="/breeds">
                            <Link to="/breeds">
                                <Icon type="crown" />
                                <span>Monsters</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/families">
                            <Link to="/families">
                                <Icon type="book" />
                                <span>Families</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/skills">
                            <Link to="/skills">
                                <Icon type="fire" />
                                <span>Skills</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/calculator">
                            <Link to="/calculator">
                                <Icon type="experiment" />
                                <span>Breeding Calculator</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>

                <AntLayout
                    style={{
                        marginLeft: collapsed ? "80px" : "200px",
                        minHeight: "100vh",
                    }}
                >
                    <Content
                        style={{ margin: "24px 16px 0", overflow: "initial" }}
                    >
                        <Breadcrumbs />
                        {children}
                        <BackTop alt="Back to top" />
                    </Content>
                    <Footer className="text-center">
                        DWM Database ©2018 Created by Kalyn Robinson
                        <br />
                        Credit to various GameFAQs for the data
                    </Footer>
                </AntLayout>
            </AntLayout>
        );
    }
}

export default Layout;
