import React from "react"
import { Breadcrumb as AntBreadcrumb } from "antd"
import withBreadcrumbs from "react-router-breadcrumbs-hoc"
import { Link } from "react-router-dom"

type Breadcrumb = {
    key: string,
    location: $FlowTODO,
    match: $FlowTODO,
}

type Props = {
    breadcrumbs: Breadcrumb[],
    skipFirst: boolean,
}

const Breadcrumbs = ({ breadcrumbs, skipFirst }: Props) => {
    const crumbs: Breadcrumb[] = skipFirst ? breadcrumbs.slice(1) : breadcrumbs
    const lastNdx: number = crumbs.length - 1

    return (
        <AntBreadcrumb style={{ margin: "16px 0" }}>
            {crumbs.map((crumb, ndx) => (
                <AntBreadcrumb.Item key={crumb.key}>
                    {/* current page should not be a link */}
                    {ndx < lastNdx ? <Link to={crumb.props.match.url}>{crumb}</Link> : crumb}
                </AntBreadcrumb.Item>
            ))}
        </AntBreadcrumb>
    )
}

Breadcrumbs.defaultProps = {
    breadcrumbs: [],
    skipFirst: false,
}

export default withBreadcrumbs()(Breadcrumbs)
