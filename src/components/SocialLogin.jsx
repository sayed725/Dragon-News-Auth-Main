import { FaGoogle , FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3 text-xl">Login With</h2>
            <div className="flex flex-col gap-4">
                <div className="btn border-2 border-blue-500 text-blue-500 bg-base-100"><FaGoogle></FaGoogle>Login with Google</div>
                <div className="btn border-2 border-black bg-base-100"><FaGithub></FaGithub>Login with Github</div>
            </div>
        </div>
    );
};

export default SocialLogin;