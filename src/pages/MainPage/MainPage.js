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
                    
                </div>
            </content>
        </body>
    );
}