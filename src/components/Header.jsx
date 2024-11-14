import logo from "../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center py-2 gap-4">
            <div className="logo">
                <img className="w-[470px]" src={logo} alt="" />
            </div>
            <h2 className="text-grey-400">Journalism Without Fear or Favour</h2>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;