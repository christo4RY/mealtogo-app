import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { RestaurantScreen } from "./src/components/features/screens/restaurant.screen";
export default function Main() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
