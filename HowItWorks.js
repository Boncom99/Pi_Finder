import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-elements";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";

//export default function App() {
export default class HowItWorks extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={{ flex: 3 }}>
					<Text style={styles.Title}>&pi; Finder</Text>
					<View style={styles.flex}>
						<TextInput
							style={styles.input}
							placeholder='type your name'
							value={this.state.name}
							onChangeText={this.handleChange}></TextInput>
						<Button
							onPress={this.search.bind(this)}
							style={styles.search}
							icon={<Ionicons name='search' size={32} color='#626262' />}
							type='clear'
							on
						/>
					</View>

					<Text style={styles.text}>
						(Remember that a word with more than 7 letters has 0% probability to
						be found)
					</Text>
					{this.state.show && (
						<View style={styles.result_view}>
							{!this.state.found && (
								<Text style={styles.result}>
									'{this.state.name} ' was not found on the first 4M digits of
									π.
								</Text>
							)}
							{this.state.found && (
								<Text style={styles.result}>
									'{this.state.name} ' was found on the {this.state.digit * 127}{" "}
									digit of π.
								</Text>
							)}
						</View>
					)}
				</View>
				<View style={styles.bottom}>
					<Button
						title='How does it work'
						type='outline'
						style={styles.explanation}
						onPress={() => {
							this.props.navigation.navigate("HowItWorks");
						}}
					/>
				</View>
				<StatusBar style='auto' />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	bottom: {
		flex: 1,

		justifyContent: "flex-end",
		marginBottom: 60,
	},
	explanation: {},
	result_view: {
		paddingVertical: 35,
		paddingHorizontal: 70,
	},
	result: {
		fontSize: 20,
		fontWeight: "bold",
	},
	search: {
		marginLeft: 0,
		backgroundColor: "#fff",
	},

	flex: {
		alignItems: "center",
		flexDirection: "row",
		marginVertical: 30,
		justifyContent: "center",
	},
	Title: {
		textAlign: "center",
		fontSize: 60,
		letterSpacing: 5,
		color: "#414141",
		//textTransform:'uppercase',
	},
	text: {
		paddingHorizontal: 70,
		textAlign: "center",
	},
	input: {
		borderColor: "#FDF06D",
		backgroundColor: "#FFFE95",
		fontSize: 25,
		borderRadius: 25,
		borderWidth: 3,
		width: "50%",
		paddingVertical: 7,
		paddingHorizontal: 15,
		color: "#626262",
		textAlign: "center",
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 200,
	},
});
