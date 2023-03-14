import AddAndFilterContainer from "../addAndFilter";
import TransactionContainer from "../transactions";
import ContainerWrapper from "./containerWrapper";
import StateProvider from "../../state-provider/stateProvider";

const Container = () => {
  return (
    <ContainerWrapper>
      <StateProvider>
        <AddAndFilterContainer />
        <TransactionContainer />
      </StateProvider>
    </ContainerWrapper>
  );
};

export default Container;
