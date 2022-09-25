import { useMediaQuery } from "@chakra-ui/react";
import GridOne from "./GridOne";
import Gridtwo from "./Gridtwo";

const One = () => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  return <div>{isLargerThan500 ? <Gridtwo /> : <GridOne />}</div>;
};
export default One;
