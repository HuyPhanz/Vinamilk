import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import RoutesPages from "../configs/routes";

const Routers = () => {
    let AppRoutes = [];
    const renderRedirects = ({redirectsFrom, name, exact, path}) => {
        if (redirectsFrom && redirectsFrom.length > 0) {
            for (const redirect of redirectsFrom) {
                AppRoutes.push(
                    <Route
                        key={`${name}-redirect-${redirect}`}
                        path={redirect}
                        exact={exact}
                        element={<Navigate to={path} />}
                    />
                );
            }
        }
    };
    const renderChildren = ({
        path,
        name,
        element,
        exact,
        children,
    }) => {
        return (
            <Route
                key={name}
                path={path}
                exact={exact}
                element={element}
            >
                {children.map((child) => {
                    const { path, name, element, children } = child;
                    if(children && children.length > 0) {
                        return renderChildren(child);
                    }
                    return (
                        <Route
                            key={name}
                            path={path}
                            element={element}
                        />
                    );
                })}
            </Route>
        );
    };
    const renderRouter = ({
        path,
        name,
        element,
        exact,
        redirectsFrom,
        children,
    }) => {
        if (children && children.length > 0) {
            AppRoutes.push(
                renderChildren({
                    path,
                    name,
                    element,
                    exact,
                    redirectsFrom,
                    children,
                })
            );
        } else {
            AppRoutes.push(
                <Route
                    key={name}
                    path={path}
                    exact={exact}
                    element={element}
                />
            );
        }

        renderRedirects({
            path,
            name,
            element,
            exact,
            redirectsFrom,
            children,
        });
    };
    const renderRouters = () => {
        for (const page of RoutesPages) {
            renderRouter(page);
        }
    };
    renderRouters();
    return (
        <BrowserRouter>
            <Routes>{AppRoutes}</Routes>
        </BrowserRouter>
    );
};

export default Routers;
