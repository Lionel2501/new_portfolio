import dynamic from "next/dynamic";
import { Fragment } from "react";

const CarouselComponent = dynamic(() => import("@/src/components/CarouselComponent"), { ssr: false });
const ButtonLenguage = dynamic(() => import("../src/components/ButtonLenguage"), { ssr: false });

const Index = () => {

  return (
    <Fragment>
        <ButtonLenguage />
        <CarouselComponent />
    </Fragment>
  );
};

export default Index;
