import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useApiContext } from "../contexts";

const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
    const [state] = useApiContext();
    return(
        <Route
            {...rest}
            render={props =>
            state.isLogin === false ? (
                <div>
                <Component {...props} />
                </div>
            ) : (
                <Redirect to="/" />
            )
            }
        />
    )
};

export default ProtectedRoute;
