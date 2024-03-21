import './SideBar.css'

export default function SideBar(props) {
    return (
        <sidebar>
        <ul>
            <li id = "profileCarrier">
                <profileSection>
                    <img id = "profilePhoto" src={props.profileImg} alt="프로필 사진입니다"/>
                    <profileText>
                        <div id = "userName">{props.userName}</div>
                        <introduce>
                            <div>{props.userIntr}</div>
                        </introduce>
                    </profileText>
                </profileSection>
            </li>
            <li class = "navSelector colorMenu"></li>
            <li class = "navSelector blankMenu">
                <div class = "navText">Purchase</div>
            </li>
            <li class = "navSelector colorMenu">
                <div class = "navText">Manage Recipe</div>
            </li>
            <li class = "navSelector blankMenu">
                <div class = "navText">Tasting Note</div>
            </li>
            <li class = "navSelector colorMenu">
                <div class = "navText">Settings</div>
            </li>
            <li class = "navSelector blankMenu"></li>
        </ul>
    </sidebar>
    );
}