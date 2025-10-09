import Banner from "../Components/Common/Home/Banner";
import StatesSection from "../Components/Common/Home/StatesSection";
import TrendingApps from "../Components/Common/Home/TrendingApps";
import Container from "../Components/Layout/Container";
import HeroBanner from "../assets/hero.png";

const Home = () => {
  return (
    <>
      <Container className={`bg-[#F5F5F5]`}>
        <Banner></Banner>
        <img className="mx-auto" src={HeroBanner} alt="Hero Image" />
      </Container>
      <Container className={`custom-gradient`}>
        <StatesSection></StatesSection>
      </Container>
      <Container className={`bg-[#F5F5F5]`}>
        <TrendingApps></TrendingApps>
      </Container>
    </>
  );
};

export default Home;
