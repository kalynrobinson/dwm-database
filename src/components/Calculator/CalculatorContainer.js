import React from "react";
import { Switch, Route } from "react-router-dom";

import { AnimatedRoute } from "components/common/Animation";
import BreedingCalculator from "./BreedingCalculator";

const FamilyContainer = () => (
    <AnimatedRoute>
        {(location) => (
            <Switch location={location}>
                <Route
                    exact
                    path="/calculator"
                    component={BreedingCalculator}
                />
            </Switch>
        )}
    </AnimatedRoute>
);

export default FamilyContainer;
