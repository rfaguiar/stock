import React from "react";
import "./Header.css"
import {connect, useDispatch} from "react-redux";
import {RootState} from "../../redux";
import { User } from "../../services/Authentication.service";
import { useHistory } from "react-router-dom";
import {logout} from "../../redux/Authentication/Authentication.actions";
import Swal from "sweetalert2";

declare interface HeaderProps {
    title: string
    profile?: User
}

const Header: React.FC<HeaderProps> = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const isLoggedIn = !!props.profile?._id
    
    const askToLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09f',
            cancelButtonColor: '#d33',
        })
            .then(({value}) => value && dispatch(logout()))
    }
    
    const handleLoginLogout = () => {
        if (isLoggedIn) {
            askToLogout()
        } else {
            history.push('/login')
        }
    }
    
    return <header className="AppHeader">
            <h1>{ props.title }</h1>
        <div>
            <span onClick={handleLoginLogout}>
                {
                    isLoggedIn ? 'Logout' : 'Login'
                }
            </span>
        </div>
        </header>
}

const mapStateToProps = (state: RootState) => ({
    profile: state.authentication.profile
})

export default connect(mapStateToProps)(Header)