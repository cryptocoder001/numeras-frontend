import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useApiContext } from "../contexts";


const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    const [state] = useApiContext();
    return(
        <Route
            {...rest}
            render={props =>
                state.isLogin === true ? (
                <div>
                <Component {...props} />
                </div>
            ) : (
                <Redirect to="/login" />
            )
            }
        />
    )
};

export default PrivateRoute;
