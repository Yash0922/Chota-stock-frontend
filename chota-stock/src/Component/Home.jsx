import React from 'react';
import "../Style/Home.css"
import CurveImg  from "../Logo/imagecurve.svg"
import threeDot from "../Logo/Threediv.svg"
import midDiv from "../Logo/somediv.svg"
function Home(props) {
    return (
        <div >
            <div className="upperAreadiv">

            <div className="heading-knowledge">
            Knowledge Based 
Investing & Trading
            </div>
            <div className="subheading-knowledge">
            Ready-made solutions + Deep Research + Disciplined Investing + Advanced Trading tools
            </div>
            <div className="img-phone">
                <img  src="https://s3-alpha-sig.figma.com/img/0a9c/acc2/80afd24b59f7c10d1a270caeb6b35045?Expires=1694390400&Signature=LmxclayzP48eKpQLTr5gNME8XiFnwk7rgkkWBeHvpAnG5AFG2ZIeZJkAcYLemrXpDvFMQ7jL84XZ5CWlE8140Nc2pPN54kAFFwKCkDSO6iPS8cSbelp9ZErterwtn0n809baE9oxFeHZtl7GZK~lDO45quWB2u3wb7UJ0W~xbSGyGUg31CFnP9NoQGt9crmMe5Y6oS32TbcZ8ZIljYR7qwq4iYDo9FeuJe~tUc31jm3cwRJY~khx3VYPAcNpWUV~Xx2ak21o~bqFI4VuKtHuKVnAq0G2N48MnaBBDKjeu4oEOl762dWYdR~Z7bp8gRvStM-peDDvmr-4zq9Eu9kksw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" srcset="" />
            </div>
            </div>
            <div className="featuresdiv">
                <div className="feature-get-app">
                    <h3>
                    FEATURES
                    </h3>
                    <h2>
                    SAVE NOW. BUY LATER. SIMPLE & REALISTIC 
                    </h2>
                    <p>
                    Get what you love and save up over weeks or months to achieve it much lower price. Time & Flexibility on your side.
                    </p>
                    <div className="lower-get-app-box">
                    <div className="get-app-button">
                    Get the App
                    </div>
                    <div className="learn-more">
                    Learn More
                    </div>
                    </div>
                    
                </div>
                <div className="grige-fretures-box">
                    <div id="C-bridge">
 <img  className='i1'src={CurveImg} alt="" />
                    </div>
                   <div className="threeDbox">
                    <img src={threeDot} alt="" />
                   </div>
                  
                </div>
            </div>
            <div className="midDiv">
                <img src={midDiv} alt="" />
            </div>
          
        </div>
    );
}

export default Home;