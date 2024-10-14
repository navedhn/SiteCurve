import React, { useState } from "react";
import texboximg1 from '../../../assets/flexbox-1.png';
import texboximg2 from '../../../assets/flexbox-2.png';
import texboximg3 from '../../../assets/flexbox-3.png';

const TextBoxes = () => {
    return(
         <div className="textboxs-area">
             <div className="flex-box">
                <div className="width-33">
                    <div className="text-box-s">
                        <h4>Add keywords or websites</h4>
                        <p>Get started by importing your keywords or websites alongside your preferred device, language, and location.</p>
                      <div className="fb-img">
                      <img src={texboximg1} alt="Example" className="text box image" />
                      </div>
                    </div>
                </div>
                <div className="width-33">
                    <div className="text-box-s">
                        <h4>Build landscape</h4>
                        <p>SiteCurve uses AI to categorize all keywords and websites in the search results to build your custom SEO landscape.</p>
                      <div className="fb-img">
                      <img src={texboximg2} alt="Example" className="text box image" />
                      </div>
                    </div>
                </div>
                <div className="width-33">
                    <div className="text-box-s">
                        <h4>Uncover insights</h4>
                        <p>SiteCurve pulls fresh rank data, giving you an automated, up-to-date view of winning and losing websites each day.</p>
                      <div className="fb-img">
                      <img src={texboximg3} alt="Example" className="text box image" />
                      </div>
                    </div>
                </div>
             </div>
         </div>
    )
};

export default TextBoxes;
