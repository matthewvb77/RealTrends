import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const ContactUsScreen = () => {
	// Use React hooks to set up state variables for the form inputs
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");

	// This function will be called when the form is submitted
	const handleSubmit = () => {
		// Send the message to a server or email it to the company
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Contact Us</Text>
			<TextInput
				style={styles.input}
				placeholder="Name"
				value={name}
				onChangeText={setName}
			/>
			<TextInput
				style={styles.input}
				placeholder="Email"
				value={email}
				onChangeText={setEmail}
			/>
			<TextInput
				style={styles.input}
				placeholder="Message"
				value={message}
				onChangeText={setMessage}
				multiline
			/>
			<Button title="Submit" onPress={handleSubmit} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "purple",
	},
	title: {
		fontSize: 24,
		color: "black",
		fontWeight: "bold",
		marginBottom: 16,
	},
	input: {
		width: "80%",
		height: 48,
		borderWidth: 1,
		borderColor: "black",
		marginBottom: 16,
		padding: 8,
	},
});

export default ContactUsScreen;
