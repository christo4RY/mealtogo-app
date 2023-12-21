import { SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantCard } from "../components/restaurant-card";

const AreaView = styled(SafeAreaView)`
flex: 1;
margin-top: ${StatusBar.currentHeight}px;
`;
const SearchContainer = styled.View`
padding: 16px;
`;
const RestaurantContent = styled.View`
  padding: 16px;
  backgroundcolor: yellow;
  flex: 1;
`;

export const RestaurantScreen = () => {
  return (
    <AreaView>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantContent>
        <RestaurantCard />
      </RestaurantContent>
    </AreaView>
  );
};
