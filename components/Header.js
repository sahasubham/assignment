import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Dimensions,
  ScrollView,
  ImageBackground,
  Animated,
} from "react-native";
import Style from "../source/style/Style";
import { auth } from "../config/firbase";
import { signOut } from "firebase/auth";
import { useAuthentication } from "../source/hook/useAuthentication";

const Header = ({ navigation }) => {
  const { user } = useAuthentication();
  return (
    <View style={Style.header}>
      <TouchableOpacity>
        <Image
          style={Style.ham_holder}
          source={require("../assets/img/logo.png")}
        />
      </TouchableOpacity>
      <View style={Style.logout}>
        <TouchableOpacity
          style={[Style.header_logout]}
          onPress={() => signOut(auth)}
        >
          <Image
            style={Style.img}
            source={require("../assets/img/logout.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
