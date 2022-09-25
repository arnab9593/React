import { Grid, GridItem } from "@chakra-ui/react";
const GridOne = () => {
  return (
    <div>
      <Grid
        templateAreas={`"nav" "sidebar" "main"`}
        gridTemplateRows={"100px 100px 200px"}
        gridTemplateColumns={"50%"}
        h="800px"
        color="white"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="blue" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="orange" area={"main"}>
          Content
        </GridItem>
        <GridItem pl="2" bg="red" area={"sidebar"}>
          Widget
        </GridItem>
      </Grid>
    </div>
  );
};
export default GridOne;
