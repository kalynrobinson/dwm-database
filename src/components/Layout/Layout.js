import React, { Component } from "react"
import { BackTop, Layout as AntLayout, Menu, Icon } from "antd"
import "antd/dist/antd.css"
import { Link } from "react-router-dom"

import Breadcrumbs from "./Breadcrumbs"
import "./Layout.css"

const { Header, Content, Footer, Sider } = AntLayout

type Props = {
    /** Sidebar's collapsed state */
    collapsed: boolean,
}

class Layout extends Component<Props> {
    state = {
        collapsed: false,
    }

    onCollapse = (collapsed) => {
        this.setState({ collapsed })
    }

    render() {
        const { children } = this.props
        const { collapsed } = this.state

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
                    }}
                >
                    <div
                        style={{
                            height: "32px",
                            background: "rgba(255,255,255,.2)",
                            margin: "16px",
                        }}
                    />
                    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                        <Menu.Item key="1">
                            <Link to="/breeds">
                                <Icon type="crown" />
                                <span>Monsters</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/families">
                                <Icon type="book" />
                                <span>Families</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/skills">
                                <Icon type="fire" />
                                <span>Skills</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/calc">
                                <Icon type="experiment" />
                                <span>Breeding Calculator</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>

                <AntLayout style={{ marginLeft: "200px", minHeight: "100vh" }}>
                    <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
                        <Breadcrumbs />
                        {children}
                        <BackTop />
                    </Content>
                    <Footer className="text-center">
                        DWM Database ©2018 Created by Kalyn Robinson
                        <br />
                        Credit to various GameFAQs for the data
                    </Footer>
                </AntLayout>
            </AntLayout>
        )
    }
}

export default Layout
