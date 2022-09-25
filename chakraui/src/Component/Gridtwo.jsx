import { Grid, GridItem } from "@chakra-ui/react";
const Gridtwo = () => {
  return (
    <div>
      <Grid
        templateAreas={`"nav Content widget"`}
        gridTemplateRows={"25% 50% 25%"}
        gridTemplateColumns={"25% 50% 25%"}
        h="500px"
        color="white"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="blue.300" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="orange" area={"Content"}>
          Content
        </GridItem>
        <GridItem pl="2" bg="red" area={"widget"}>
          Widget
        </GridItem>
      </Grid>
    </div>
  );
};
export default Gridtwo;
