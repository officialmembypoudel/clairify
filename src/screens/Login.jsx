import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Logo from "../../assets/logo.png";
import GoogleLogo from "../../assets/google-logo.png";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const navigation = useNavigation();
  const { promptAsync, error } = useAuth();

  return (
    <View className="flex-1 bg-white">
      <View
        className="bg-blue-200 w-full h-full top-0 left-0 right-0"
        style={styles.topAngle}
      ></View>
      <View className="bg-blue-500" style={styles.bottomAngle}></View>
      <View className="flex-1 justify-center items-center">
        <Image
          className={"w-40 h-40 mb-72"}
          source={Logo}
          resizeMode="contain"
        />
        <View className="absolute bottom-20 w-full p-4">
          {error && (
            <Text className="text-red-500 font-bold text-md text-center mb-2">
              {error}
            </Text>
          )}
          <TouchableOpacity
            activeOpacity={0.8}
            className={
              "bg-white border border-gray-300 rounded-lg py-3 flex-row items-center justify-center w-full"
            }
            onPress={() => {
              promptAsync();
            }}
          >
            <Image source={GoogleLogo} className={"w-6 h-6 mr-10"} />
            <Text className={"text-lg font-medium text-gray-700"}>
              Continue with Google
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className={"absolute bottom-10 self-center border-b border-white"}
          activeOpacity={0.8}
        >
          <Text className={"text-sm font-medium text-white"}>Terms of Use</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  topAngle: {
    position: "absolute",
    top: 0,
    left: -420,
    width: "200%",
    height: "60%",
    transform: [{ rotate: "60deg" }],
    zIndex: -1,
  },
  bottomAngle: {
    position: "absolute",
    right: -200,
    bottom: -200,
    width: "200%",
    height: "60%",
    transform: [{ rotate: "-30deg" }],
    zIndex: -1,
  },
});
