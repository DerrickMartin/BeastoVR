import { React} from "react";
import './FooterStyles.css';
import FooterNavLinks from './FooterNavLinks'
import SocialLink from "./SocialLink/SocialLink";

function FooterSection() {
        return (
        <div className='App-Footer'>
          <div className="col1" >
            <FooterNavLinks />
          </div>
          <div className="BottomColumn">
            <p>Copyright © 2023 TehBeasto Inc. All rights reserved.</p>        
            <SocialLink />
          </div>
        </div>
        )
}
export default FooterSection