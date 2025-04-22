import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const [isHovered, setIsHovered] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute flex justify-between w-full p-2 bg-gradient-to-b from-black z-10">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-50 h-20 mr-10"
      />
      <div>
        {user && (
          <div
            className="p-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              className="w-12 h-12 rounded-xs mr-5"
              src="https://i.pinimg.com/736x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
              alt="usericon"
            />

            {isHovered && (
              <div className="bg-black/80 absolute right-6 text-white w-2/12 text-center cursor-pointer">
                <div className="flex">
                  <img
                    src={user.photoURL}
                    alt="homeimage"
                    className="w-8 absolute ml-5 mt-4 rounded-xs"
                  />
                  <h2 className="py-5 w-full hover:bg-red-600">Profile</h2>
                </div>
                <div className="flex">
                  <img
                    src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png"
                    alt="homeimage"
                    className="w-8 absolute ml-5 mt-4"
                  />
                  <h2 className="py-5 w-full hover:bg-red-600">Home</h2>
                </div>

                <div className="flex">
                  <img
                    src="https://banner2.cleanpng.com/20180320/xpq/av0onvk0y.webp"
                    alt="aboutimage"
                    className="w-8 absolute ml-5 mt-4"
                  />
                  <h2 className="py-5 w-full hover:bg-red-600">About Us</h2>
                </div>

                <h2 onClick={handleSignOut} className="py-5 hover:bg-red-600">
                  Sign Out
                </h2>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
