import './SelectCard.css'
import {useNavigate} from "react-router-dom";
export default function SelectCard(props) {

    //클릭된 요소의 아이디를 가져오는 코드

    //실제 HTML 요소를 반환 props로 메뉴이름, 이미지 src를 가져옴
    return(
        <div class = "SelectCard">
            <img class ="recipeImg" id = {props.menuName} src = {props.imgSrc} alt = "이미지"/>
            <div class = "recipeLabel">
                <div class = "labelText">{props.menuName}</div>
            </div>
        </div>
    );

   
}
