import React from "react";
import {connect} from "react-redux";
import ProfileCard, {User} from "../Authentication/ProfileCard";
import Header from "../Header";
import Container from "../../shared/Container";

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

const mapStateToProps = () => ({
    user: {
        name: "Roger",
        email: "roger@stock.com"
    }
})

export default connect(mapStateToProps)(ProfileView)