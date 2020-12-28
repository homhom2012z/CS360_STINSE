import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../context/user/UserContext";
import {ReactComponent as ErrorPage} from "../../assets/404.svg"

const AdminRoute = ({component: Component, ...rest}) => {
    const {user} = useContext(UserContext)
    return ( 
        <Route {...rest} render={props => (
            user.role === 1 ? (
                <Component {...props} />
            ): <Redirect to="/error"/>
        )} />
     );
}
 
export default AdminRoute;