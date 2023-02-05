import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Style from "../style/Style";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firbase";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  //const auth = getAuth();

  const _register = async () => {
    if (email == "") {
      setValidationMessage("Invalid email address");
    } else {
      if ((email, regx.test(email))) {
        if (password == "") {
          setValidationMessage("Invalid password");
        } else {
        }
        if (password.length < 8) {
          setValidationMessage("Password must be 8 Charecter");
        } else {
          if (confirmPassword == "") {
            setValidationMessage("Invalid confirm password");
          } else {
            if (confirmPassword.length < 8) {
              setValidationMessage("Confirm Password must be 8 Charecter");
            } else {
              if (password != confirmPassword) {
                setValidationMessage("Password and Confirm Password missmatch");
              } else {
                setValidationMessage("");
                try {
                  await createUserWithEmailAndPassword(auth, email, password);
                  navigation.navigate("signIn");
                } catch (error) {
                  setValidationMessage(error.message);
                }
              }
            }
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
          onChangeText={(e) => setEmail(e)}
        />

        <TextInput
          style={Style.register_input_field}
          placeholder=" Password"
          keyboardType="password"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(e) => setPassword(e)}
        />

        <TextInput
          style={Style.register_input_field}
          placeholder="Confirm Password"
          keyboardType="default"
          onChangeText={(e) => setConfirmPassword(e)}
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
        <TouchableOpacity style={Style.btn} onPress={_register}>
          <Text style={Style.btn_text}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={Style.register_text_view}
          onPress={() => navigation.navigate("signIn")}
        >
          <Text style={Style.acc_text}>Already have an account</Text>
          <Text style={Style.sign_text}>Sign in !</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
