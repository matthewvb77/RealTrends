import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutUsScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>About Us</Text>
			<Text style={styles.text}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		className: "bg-purple-500 flex items-center justify-center",
	},
	title: {
		className: "text-black font-bold text-2xl mb-4",
	},
	text: {
		className: "text-black text-center",
	},
});

export default AboutUsScreen;
