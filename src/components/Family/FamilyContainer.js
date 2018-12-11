import React from "react";
import { Switch, Route } from "react-router-dom";

import { AnimatedRoute } from "components/common/Animation";
import FamilyIndex from "./FamilyIndex";
import FamilyView from "./FamilyView";

const FamilyContainer = () => (
    <AnimatedRoute>
        {(location) => (
            <Switch location={location}>
                <Route exact path="/families" component={FamilyIndex} />
                <Route exact path="/families/:family" component={FamilyView} />
            </Switch>
        )}
    </AnimatedRoute>
);

export default FamilyContainer;
