import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";

import { Input } from "native-base";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = ({ dimensions, isKeyboardOpen, setIsKeyboardOpen }) => {
  const [state, setState] = useState(initialState);

  const [showPassword, setShowPassword] = useState(false);

  const keyboardHide = () => {
    setIsKeyboardOpen(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  const onScreenTap = () => {
    setIsKeyboardOpen(false);
    Keyboard.dismiss();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={onScreenTap}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
        <View style={styles.loginWrapp}>
          <View
            style={{
              ...styles.form,
              marginBottom: isKeyboardOpen ? -100 : 144,
              width: dimensions,
            }}
          >
            <Text style={styles.titleLogin}>Увійти</Text>

            <View style={{ marginBottom: 16 }}>
              <Input
                style={styles.input}
                onFocus={() => {
                  setIsKeyboardOpen(true);
                }}
                focusOutlineColor={"#FF6C00"}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                value={state.email}
                placeholder="Адреса електронної пошти"
                // onSubmitEditing={() => {
                //   setIsKeyboardOpen(false);
                // }}
              />
            </View>

            <View style={{ marginBottom: 43 }}>
              <Input
                style={styles.input}
                secureTextEntry={!showPassword}
                onFocus={() => {
                  setIsKeyboardOpen(true);
                }}
                focusOutlineColor={"#FF6C00"}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
                value={state.password}
                placeholder="Пароль"
              />
            </View>
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Text
                style={styles.showPass}
                name={showPassword ? "eye-off" : "eye"}
              >
                Показати
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.registerBtn}
              activeOpacity={0.7}
              onPress={keyboardHide}
            >
              <Text style={styles.textBtn}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textSubBtn}>
                Немає аккаунту? Зареєструватись
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  loginWrapp: {
    backgroundColor: "#ffffff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  form: {
    marginHorizontal: 16,
  },
  titleLogin: {
    color: "#212121",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    paddingBottom: 33,
    paddingTop: 32,
  },
  input: {
    fontSize: 16,

    height: 50,
    borderRadius: 8,
    textAlign: "left",
    paddingLeft: 16,
  },
  inputMargin: {
    marginBottom: 16,
  },
  marginToBtn: {
    marginBottom: 43,
  },
  registerBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 100,
  },
  textBtn: {
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  textSubBtn: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
    marginTop: 16,
  },
  showPass: {
    position: "absolute",
    top: -77,
    right: 20,

    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    zIndex: 1000,
  },
});

export default LoginScreen;
