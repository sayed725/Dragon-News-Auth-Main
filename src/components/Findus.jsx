import React from 'react';
import { FaFacebook , FaTwitter , FaInstagram} from "react-icons/fa";

const Findus = () => {
    return (
        <div>
              <h2 className="font-semibold mb-3 text-xl">Find Us On</h2>
              <div className='flex flex-col'>
               <div className="btn border-2 border-base-200 bg-base-100 text-start"><FaFacebook></FaFacebook>Facebook</div>
               <div className="btn"><FaTwitter></FaTwitter>Twitter</div>
               <div className="btn"><FaInstagram></FaInstagram>Instagram</div>
              </div>
        </div>
    );
};

export default Findus;