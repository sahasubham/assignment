import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Style from "../style/Style";
import { auth } from "../../config/firbase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const _login = async () => {
    if (email == "") {
      setValidationMessage("Invalid email address");
    } else {
      if ((email, regx.test(email))) {
        if (password == "") {
          setValidationMessage("Invalid password");
        } else {
          setValidationMessage("");
          try {
            await signInWithEmailAndPassword(auth, email, password);
            navigation.navigate("signUp");
          } catch (error) {
            setValidationMessage(error.message);
          }
        }
      } else {
        setValidationMessage("Invalid Email");
      }
    }
  };

  return (
    <View style={[Style.register, Style.container]}>
      <View style={Style.register_content}>
        <TextInput
          style={Style.register_input_field}
          placeholder=" Email Address"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={Style.register_input_field}
          placeholder=" Password"
          keyboardType="password"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      {validationMessage ? (
        <View style={Style.register_content}>
          <Text style={{ marginTop: 5, color: "red" }}>
            {validationMessage}
          </Text>
        </View>
      ) : (
        <></>
      )}
      <View style={Style.register_content}>
        <TouchableOpacity style={Style.btn} onPress={_login}>
          <Text style={Style.btn_text}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={Style.register_text_view}
          onPress={() => navigation.navigate("signUp")}
        >
          <Text style={Style.acc_text}>Don't have an account</Text>
          <Text style={Style.sign_text}>Sign up !</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
