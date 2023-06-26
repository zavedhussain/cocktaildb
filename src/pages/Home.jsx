import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Navbar />
      {isLoading ? <div className="loading">Loading...</div> : <Outlet />}
    </>
  );
};
export default Home;
