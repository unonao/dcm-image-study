import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "./AuthContext";
const PrivateRoute = ({ render, ...rest }) => {
    const { user } = useAuthContext();
    return (
        <Route
            {...rest}
            render={
                user
                    ? render
                    : props => (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
};


export default PrivateRoute;
