import React from "react";
import {useSelector} from "react-redux";
import { Redirect } from "react-router-dom";
import {RootState} from "../../redux";

type Role = 'admin' | 'customer' | undefined

const withPermission = ( roles: Role[], redirect = '') => 
    (Component: React.FC<any>) => 
        (props: any) => {
            const auth = useSelector((state: RootState) => ({
                profile: state.authentication.profile
            }))
            if (roles.includes(auth.profile?.role)) {
                return <Component {...props}/>
            } else if (redirect) {
                return <Redirect to={redirect}/>
            }
            return null          
}

export default withPermission
