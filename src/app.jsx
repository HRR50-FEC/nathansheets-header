import React from 'react';
import ArtCollectibles from './popups/artCollectibles.jsx';
import ClothingShoes from './popups/clothingShoes.jsx';
import CraftSupplies from './popups/craftSupplies.jsx';
import GiftsGiftCards from './popups/giftsGiftCards.jsx';
import HomeLiving from './popups/homeLiving.jsx';
import JewelryAccessories from './popups/jewelryAccessories.jsx';
import ToysEntertainment from './popups/toysEntertainment.jsx';
import ValentinesDay from './popups/valentinesDay.jsx';
import WeddingParty from './popups/weddingParty.jsx';

class App extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="topBar">
                    <div id='etsyLogoContainer'>
                        <img id='etsyLogo' src="https://fecuiicons.s3.amazonaws.com/getsy.png"></img>
                    </div>
                    <div id='searchBarContainer'>
                        <input id='searchBar' type="text" placeholder="Search for anything"></input>
                        <img id='searchIcon' src='https://fecuiicons.s3.amazonaws.com/490px-Magnifying_glass_icon.svg.png'></img>
                    </div>
                    <div id='signInContainer'>
                        <div id="signIn">
                            Sign in
                        </div>
                    </div>
                    <div id="shoppingCartContainer">
                        <img id='shoppingCartIcon' src='https://fecuiicons.s3.amazonaws.com/shoppingCart.png'></img>
                    </div>
                </div>
                <div id="bottomBar">
                    <div className="toolBar" id="valentinesDay">
                        Valentine's Day
                    </div>
                    <div className="toolBar" id="jewelryAccessories">
                        Jewelry &amp; Accessories
                    </div>
                    <div className="toolBar" id="clothingShoes">
                        Clothing &amp; Shoes                  
                    </div>
                    <div className="toolBar" id="homeLiving">
                        Home &amp; Living
                    </div>
                    <div className="toolBar" id="weddingParty">
                        Wedding &amp; Party
                    </div>
                    <div className="toolBar" id="toysEntertainment">
                        Toys &amp; Entertainment
                    </div>
                    <div className="toolBar" id="artCollectibles">
                        Art &amp; Collectibles
                    </div>
                    <div className="toolBar" id="craftSupplies">
                        Craft Supplies
                    </div>
                    <div className="toolBar" id="giftsGiftCards">
                        Gifts &amp; Gift Cards
                    </div>
                </div>
                {/* <div id="popupContainer">
                    <ValentinesDay/>
                    <JewelryAccessories/>
                    <ClothingShoes/>    
                    <HomeLiving/>  
                    <WeddingParty/>
                    <ToysEntertainment/>
                    <ArtCollectibles/>
                    <CraftSupplies/>
                    <GiftsGiftCards/>
                </div> */}
                <div id="dividerLine"></div>
            </div>
        )
    }
}

export default App;