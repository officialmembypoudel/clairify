import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <View className="flex-1 bg-white">
      <View className="w-full p-2 bg-blue-600 mt-14">
        <Text className="text-white text-lg font-bold text-center">
          Profile
        </Text>
      </View>
      <View className="flex-1 bg-blue-100 m-3 mx-4 rounded-2xl mb-20">
        <View className="flex-row p-4 gap-4 items-center">
          <Image
            source={{ uri: user?.picture }}
            className="w-24 h-24 rounded-full"
          />
          <View>
            <Text className="text-lg font-bold mb-4">{user?.name}</Text>
            <Text className="text-md">{user?.email}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
