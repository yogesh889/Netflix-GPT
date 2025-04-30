
import Header from "./Header";
import useMostPopularMovies from "../hooks/useMostPopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useMostPopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      <SecondaryContainer />
      <SecondaryContainer />
      <SecondaryContainer />
      {/* {
        MainContainer
        - VideoBackground
        - VideoTitle
        SecondaryContainer
        - MoviesList*N
          - cards*n
      } */}
    </div>
  );
};

export default Browse;
