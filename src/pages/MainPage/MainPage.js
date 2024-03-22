import './MainPage.css'
import SideBar from '../../components/SideBar/SideBar.js'
import SelectCard from '../../components/SelectCard/SelectCard.js'
import SearchBar from '../../components/SearchBar/SearchBar.js'

export default function MainPage(){
    return(
        <body>
            <SideBar profileImg = "images/profileimg.png" userName = "Dellyu03" userIntr = "Developer Mode"/>
            <content>
                <SearchBar/>
                <div id = "SelectCard_container">
                    <SelectCard menuName = "Blue Sppyhere" imgSrc = "images/cocktail_img/blue spyhere.png" />
                    <SelectCard menuName = "Dekilla Sunrise" imgSrc = "images/cocktail_img/dekilla sunrise.jpg"/>
                    <SelectCard menuName = "Kahullua Milk" imgSrc = "images/cocktail_img/Rkffndk milk.png"/>
                    <SelectCard menuName = "Pinacolada" imgSrc = "images/cocktail_img/pinacolada.jpg"/>
                    <SelectCard menuName = "Faust" imgSrc = "images/cocktail_img/pahuse.jpg"/>
                    <SelectCard menuName = "Peach Crush" imgSrc = "images/cocktail_img/peach crush.png"/>
                    <SelectCard menuName = "Blue Hawai" imgSrc = "images/cocktail_img/blue hawai.jpg"/>
                    <SelectCard menuName = "Old Fashioned" imgSrc = "images/cocktail_img/old fashioned.jpg"/>
                </div>
            </content>
        </body>
    );
}