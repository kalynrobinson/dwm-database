import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { AnimatedRoute } from "components/common/Animation"
import MonsterContainer from "components/Monster"
import Layout from "components/Layout"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Main />
                </Layout>
            </BrowserRouter>
        )
    }
}

const Main = (props) => (
    <main>
        <AnimatedRoute>
            {(location) => (
                <Switch location={location}>
                    <Route exact path="/" render={(props) => <Home />} />
                    <Route path="/breeds" render={(props) => <MonsterContainer />} />
                </Switch>
            )}
        </AnimatedRoute>
    </main>
)
const Home = () => <div>Home</div>

export default App
