import React from "react"
import { Switch, Route } from "react-router-dom"

import { AnimatedRoute } from "components/common/Animation"
import MonsterView from "./MonsterView"
import MonsterIndex from "./MonsterIndex"

const MonsterContainer = () => (
    <AnimatedRoute>
        {(location) => (
            <Switch location={location}>
                <Route exact path="/breeds" component={MonsterIndex} />
                <Route path="/breeds/:breed" component={MonsterView} />
            </Switch>
        )}
    </AnimatedRoute>
)

export default MonsterContainer
