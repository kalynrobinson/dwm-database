import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

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

const Home = () => <div>Home</div>
const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/breeds" component={MonsterContainer} />
        </Switch>
    </main>
)

export default App
