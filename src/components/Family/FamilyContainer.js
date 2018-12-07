import React from "react";
import { Switch, Route } from "react-router-dom";

import { AnimatedRoute } from "components/common/Animation";
import FamilyIndex from "./FamilyIndex";

const FamilyContainer = () => (
    <AnimatedRoute>
        {(location) => (
            <Switch location={location}>
                <Route exact path="/families" component={FamilyIndex} />
            </Switch>
        )}
    </AnimatedRoute>
);

export default FamilyContainer;
