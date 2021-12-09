import type { NextPage } from "next";
import { Finaly } from "../components/Finaly";
import { TitlePage } from "../components/TitlePage";
import { VejaTambem } from "../components/VejaTambem";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <TitlePage />
        <VejaTambem />
        <Finaly/>

      </div>
    </>
  );
};

export default Home;
