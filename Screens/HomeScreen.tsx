import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useTailwind } from "tailwind-rn";

const tw = useTailwind();

const HomeScreen = () => {
	return (
		<View style={tw("bg-purple-500 flex items-center justify-center")}>
			<Text style={tw("text-black font-bold text-2xl mb-4")}>
				Welcome to Our App!
			</Text>
			<Image
				source={require("../assets/logo.png")}
				style={tw("w-32 h-32 mb-4")}
			/>
			<Text style={tw("text-black text-center")}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</Text>
		</View>
	);
};

export default HomeScreen;
