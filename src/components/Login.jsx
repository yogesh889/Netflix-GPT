import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_large.jpg"
          alt="background_image"
          className="w-full"
        />
      </div>
      <form className="w-3/12 absolute p-12 my-35 mx-auto right-0 left-0 bg-black/80  text-white ">
        <h1 className="font-bold text-3xl py-4 p-2 m-2">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 text-white"
        />
        <button className="p-4 my-4 w-full cursor-pointer bg-red-700">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
