const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreen from "./screens/SplashScreen";
import HomePage from "./screens/HomePage";
import Cart from "./screens/Cart";
import Payment from "./screens/Payment";
import SignupDetails from "./screens/SignupDetails";
import Login from "./screens/Login";
import Membership from "./screens/Membership";
import FrameComponent from "./components/FrameComponent";
import FrameComponent1 from "./components/FrameComponent1";
import Property1Default from "./components/Property1Default";
import Property1Default1 from "./components/Property1Default1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Black": require("./assets/fonts/Montserrat-Black.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
             {/* <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            /> 
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignupDetails"
              component={SignupDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="Membership"
              component={Membership}
              options={{ headerShown: false }}
            /> 
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
