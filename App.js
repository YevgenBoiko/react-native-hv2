import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import { NativeBaseProvider } from "native-base";

import { useFonts } from "expo-font";

// import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 32
  );
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 32;
      setDimensions(width);
    };

    Dimensions.addEventListener("change", onChange);

    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          setIsKeyboardOpen(false);
        }}
      >
        <View style={styles.container}>
          <ImageBackground
            source={require("./assets/images/photoBg.jpg")}
            style={styles.image}
          >
            <StatusBar style="auto" />
            {/* <RegistrationScreen
              dimensions={dimensions}
              isKeyboardOpen={isKeyboardOpen}
              setIsKeyboardOpen={setIsKeyboardOpen}
            /> */}
            <LoginScreen
              dimensions={dimensions}
              isKeyboardOpen={isKeyboardOpen}
              setIsKeyboardOpen={setIsKeyboardOpen}
            />
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
