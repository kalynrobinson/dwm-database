import React from "react";
import { Route } from "react-router-dom";
import { Transition, animated, config } from "react-spring";

const AnimatedRoute = ({ children, slice = true }) => (
    <Route
        render={({ location }) => (
            <Transition
                native
                items={location}
                keys={({ pathname }) => pathname}
                config={config.default}
                from={{ opacity: 0, transform: "translateX(-100%)" }}
                enter={{ opacity: 1, transform: "translateX(0)" }}
                leave={{
                    position: "absolute",
                    opacity: 0,
                    transform: "translateX(-100%)",
                }}
            >
                {(location) => (style) => (
                    <Container style={style}>{children(location)}</Container>
                )}
            </Transition>
        )}
    />
);

const Container = ({ children, style }) => (
    <animated.div style={style}>{children}</animated.div>
);

export default AnimatedRoute;
