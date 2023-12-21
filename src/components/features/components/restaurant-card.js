import { View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

export const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const CardContainer = styled(Card)``;
  const CardCover = styled(Card.Cover)``;
  const CardTitle = styled(Card.Title)``;

  return (
    <View>
      <CardContainer>
        <CardCover source={{ uri: photos[0] }} />
        <CardTitle title="Card Title" subtitle="Card Subtitle" />
      </CardContainer>
    </View>
  );
};
