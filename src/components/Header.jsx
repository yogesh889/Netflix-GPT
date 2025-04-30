import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { ABOUT_ICON, HOME_ICON, SIGNOUT_ICON, MENU_ICON } from "../../utils/constants";
import LOGO from "../assets/MOVIES.png"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const [isHovered, setIsHovered] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, userIcon } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            userIcon: userIcon,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute flex justify-between w-full p-2 bg-gradient-to-b from-black z-10">
      <img src={LOGO} alt="logo" className="w-50 h-40 mr-10" />
      <div>
        {user && (
          <div
            className="p-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              className="w-12 h-12 rounded-xs mr-5"
              src={MENU_ICON}
              alt="menuicon"
            />

            {isHovered && (
              <div className="bg-black/80 absolute right-6 text-white w-2/12 text-center cursor-pointer">
                <div className="flex">
                  <img
                    src={user.userIcon}
                    alt="profileimage"
                    className="w-8 absolute ml-5 mt-4 rounded-xs"
                  />
                  <h2 className="py-5 w-full hover:bg-red-600">Profile</h2>
                </div>
                <div className="flex">
                  <img
                    src={HOME_ICON}
                    alt="homeicon"
                    className="w-8 absolute ml-5 mt-4"
                  />
                  <h2 className="py-5 w-full hover:bg-red-600">Home</h2>
                </div>

                <div className="flex">
                  <img
                    src={ABOUT_ICON}
                    alt="abouticon"
                    className="w-8 absolute ml-5 mt-4"
                  />
                  <h2 className="py-5 w-full hover:bg-red-600">About Us</h2>
                </div>
                <div className="flex">
                  <img
                    src={SIGNOUT_ICON}
                    alt="signouticon"
                    className="w-8 absolute ml-5 mt-4"
                  />
                  <h2 onClick={handleSignOut} className="py-5 w-full hover:bg-red-600">
                    Sign Out
                  </h2>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
