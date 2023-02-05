import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ProductListScreen from "../product/ProductListScreen";
import Product from "../product/Product";
import ModifyProduct from "../product/ModifyProduct";

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="products"
          component={ProductListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="product"
          component={Product}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="modify"
          component={ModifyProduct}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
