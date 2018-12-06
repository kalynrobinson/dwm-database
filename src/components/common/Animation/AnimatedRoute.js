import React from "react"
import { Route } from "react-router-dom"
import { Transition, animated } from "react-spring"

const AnimatedRoute = ({ children, slice = true }) => (
    <Route
        render={({ location }) => (
            <Transition
                native
                items={location}
                keys={({ pathname }) => pathname}
                from={{ transform: "translateX(100%)" }}
                enter={{ transform: "translateX(0)" }}
                leave={{ transform: "translateX(100%)", pointerEvents: "none" }}
            >
                {(location) => (style) => <Container style={style}>{children(location)}</Container>}
            </Transition>
        )}
    />
)

const Container = ({ children, style }) => <animated.div style={style}>{children}</animated.div>

export default AnimatedRoute
