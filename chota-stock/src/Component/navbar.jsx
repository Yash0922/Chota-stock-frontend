import React from 'react';
import serach from "../Logo/search-svgrepo-com.svg"
import login from  "../Logo/login-2-svgrepo-com (1).svg"
import "../Style/navbar.css"
function Navbar(props) {
    return (
        <div>
             <nav>
                <div id='logo'>
                    <img src="https://s3-alpha-sig.figma.com/img/6416/8f46/5708df7b8f70d3ce8182d0a23c0a9a34?Expires=1694390400&Signature=MXJjxZlvlCbASF~qrg2DSqHjAi8hGlLawvKQtP1tNSsGOZ7hG8Ix3vw6KtWsv1OuogK1fIZOLDJyKYu3YcIGrxn8UvrtvNKwasHT5gDZoCR1zb91ni5H8xaazaRA55ppRpRtZb5oJIEyDpOt3Ke1RNzmG~H7IB8sVLxj~gTIDUNSaEL3jjGr5WDWz~AZcZZpLYPSS6XeZpGvNFDlPk5CBaStq2OqDT-GJkxZQHF5zOzyugVVoL4dGv0LOV5EzuCC8HhKkqV5J4dfhPV-G21HxTBFoTF6GrZ9TTkuBaa17wMVimsoywdjJJQ8RKyRM6423kBeLMZ8D6LPPKL76aXz2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" srcset="" />
                    <div>INVEST TO PAY. INVEST TO SPEND</div>
                </div>
                <div id="search_bar">
                    <img src={serach} alt="" srcset="" />
                    <input type="text" placeholder='Search stocks, ETFs, indices' />
                </div>
               <button id='login_button'>
                <img src={login} alt="" />
                <div>Login</div>
               </button>
                
            </nav>
        </div>
    );
}

export default Navbar;