import React from "react"
import { Switch, Route } from "react-router-dom"

import MonsterView from "./MonsterView"
import MonsterIndex from "./MonsterIndex"

const MonsterContainer = () => (
    <Switch>
        <Route exact path="/breeds" component={MonsterIndex} />
        <Route path="/breeds/:breed" component={MonsterView} />
    </Switch>
)

export default MonsterContainer
