import React from "react";
import { Switch, Route } from "react-router-dom";

import { AnimatedRoute } from "components/common/Animation";
import ResistanceIndex from "./ResistanceIndex";

const ResistanceContainer = () => (
    <AnimatedRoute>
        {(location) => (
            <Switch location={location}>
                <Route exact path="/resistances" component={ResistanceIndex} />
            </Switch>
        )}
    </AnimatedRoute>
);

export default ResistanceContainer;
