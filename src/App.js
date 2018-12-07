import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AnimatedRoute } from "components/common/Animation";
import MonsterContainer from "components/Monster";
import FamilyContainer from "components/Family";
import Layout from "components/Layout";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route
                    render={({ location }) => (
                        <Layout location={location}>
                            <Main />
                        </Layout>
                    )}
                />
            </BrowserRouter>
        );
    }
}

const Main = (props) => (
    <main>
        <AnimatedRoute>
            {(location) => (
                <Switch location={location}>
                    <Route exact path="/" render={(props) => <Home />} />
                    <Route
                        path="/breeds"
                        render={(props) => <MonsterContainer />}
                    />
                    <Route
                        path="/families"
                        render={(props) => <FamilyContainer />}
                    />
                </Switch>
            )}
        </AnimatedRoute>
    </main>
);
const Home = () => <div>Home</div>;

export default App;
