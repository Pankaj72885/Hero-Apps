import Facts from "../Components/Common/Home/Facts";
import HeaderSection from "../Components/Common/Home/HeaderSection";
import Container from "../Components/Layout/Container";
import HeroBanner from "../assets/hero.png";

const Home = () => {
  return (
    <>
      <Container className={`bg-[#F5F5F5]`}>
        <HeaderSection></HeaderSection>
        <img className="mx-auto" src={HeroBanner} alt="Hero Image" />
      </Container>
      <Container className={`custom-gradient`}>
        <Facts></Facts>
      </Container>
    </>
  );
};

export default Home;
