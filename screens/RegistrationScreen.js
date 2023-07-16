import { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { Input } from "native-base";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({
  dimensions,
  isKeyboardOpen,
  setIsKeyboardOpen,
}) => {
  const [state, setState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const keyboardHide = () => {
    setIsKeyboardOpen(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  const onScreenTap = () => {
    setIsKeyboardOpen(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={onScreenTap}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
        <View style={styles.registrationWrapp}>
          <View style={{ ...styles.photoContainer, left: dimensions / 2 - 44 }}>
            <Text></Text>
          </View>
          <View
            style={{
              ...styles.form,
              marginBottom: isKeyboardOpen ? -100 : 66,
              width: dimensions,
            }}
          >
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Реєстрація</Text>
            </View>
            <View>
              <Input
                style={styles.input}
                onFocus={() => {
                  setIsKeyboardOpen(true);
                }}
                focusOutlineColor={"#FF6C00"}
                value={state.login}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
                placeholder="Логін"
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <Input
                style={{
                  ...styles.input,
                }}
                onFocus={() => {
                  setIsKeyboardOpen(true);
                }}
                focusOutlineColor={"#FF6C00"}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                placeholder="Адреса електронної пошти"
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <Input
                style={{
                  ...styles.input,
                }}
                secureTextEntry={!showPassword}
                focusOutlineColor={"#FF6C00"}
                onFocus={() => {
                  setIsKeyboardOpen(true);
                }}
                value={state.password}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
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
              activeOpacity={0.7}
              style={{ ...styles.btn, marginTop: 43 }}
              onPress={keyboardHide}
            >
              <Text style={styles.btnTitle}>Зареєструватися</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textSubBtn}>Вже є аккаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  registrationWrapp: {
    backgroundColor: "#ffffff",
    position: "relative",

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  photoContainer: {
    position: "absolute",
    top: -60,

    width: 120,
    height: 120,
    zIndex: 1000,

    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  input: {
    height: 50,
    borderRadius: 6,
    padding: 16,

    color: "#000",
  },

  form: {
    marginHorizontal: 16,
  },

  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 100,
  },
  btnTitle: {
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
  header: {
    alignItems: "center",

    paddingTop: 92,
    marginBottom: 33,
  },
  headerTitle: {
    fontSize: 30,
    color: "#000",
    fontFamily: "Roboto-Regular",
  },
  showPass: {
    position: "absolute",
    bottom: 16,
    right: 20,

    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    zIndex: 1000,
  },
});

export default RegistrationScreen;
