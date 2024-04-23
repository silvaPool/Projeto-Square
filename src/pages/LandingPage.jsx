import Footer from "../components/Footer";
import Header from "../components/Header";
import SecaoCinco from "../components/SecaoCinco";
import SecaoDois from "../components/SecaoDois";
import SecaoQuatro from "../components/SecaoQuatro";
import SecaoTres from "../components/SecaoTres";
import SecaoUm from "../components/SecaoUm";

function LandingPage() {
  return (
    <>
      <Header />
      <SecaoUm />
      <SecaoDois />
      <SecaoTres />
      <SecaoQuatro />
      <SecaoCinco />
      <Footer />
    </>
  );
}

export default LandingPage;
