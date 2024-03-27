import './SelectCard.css'
export default function SelectCard(props) {


    return(
        <div class = "SelectCard">
            <img class ="recipeImg" id = "firstRecipeImg" src = {props.imgSrc} alt = "이미지"/>
            <div class = "recipeLabel">
                <div class = "labelText">{props.menuName}</div>
            </div>
        </div>
    );
}
