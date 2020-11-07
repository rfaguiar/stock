import React from "react";
import {connect} from "react-redux";
import ProfileCard, {User} from "../Authentication/ProfileCard";
import Header from "../Header";
import Container from "../../shared/Container";
import withPermission from "../../utils/hoc/withPermission";
import {RootState} from "../../redux";

declare interface ProfileViewProps {
    user: User
}

const ProfileView: React.FC<ProfileViewProps> = (props) => {

    return <>
        <Header title={"Stock"} />
        <Container>
            <div style={{
                display:"flex",
                justifyContent: "center"
            }}>
                <ProfileCard user={props.user}/>                
            </div>
        </Container>
    </>
}

const mapStateToProps = (state: RootState) => ({
    user: {
        name: state.authentication.profile?.user,
        email: state.authentication.profile?.email
    }
})

export default connect(mapStateToProps)(
    withPermission(['admin', 'customer'], '/')(ProfileView)
)