import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { QuestViews } from "./src/views/Quests/quests_views";
import { Home } from "./src//views/Home/home_views";

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Boa sorte",
          }}
        />

        <Stack.Screen
          name="Quiz"
          component={QuestViews}
          options={{
            title: "Responda",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
