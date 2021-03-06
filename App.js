import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-elements";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.onPressButton = this.onPressButton.bind(this);
		this.state = {
			name: "",
			text: "",
			digit: 0,
			show: false,
			found: false,
			calculando: false,
		};
		this.handleChange = this.handleChange.bind(this);
	}
	/*componentDidMount() {
		this.apiCall();
	}
	async apiCall() {
		fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((response) => JSON.parse(response).title)
			.then((json) => console.log(json));
	}*/

	search = () => {
		var Text = this.state.name;
		var len = Text.length;
		var dig = 0;
		Text = Text.replace(" ", "");
		for (var i = 0; i < len; i++) {
			var b = Math.pow(10, i);
			var pars = parseInt(Text[i], 36) - 9;
			dig += b * pars;
		}
		this.setState({ calculando: false });

		this.setState({ digit: dig, show: true });
		if (dig < 5000000 && dig % 7 != 0) {
			this.setState({ found: true });
		} else {
			this.setState({ found: false });
		}
		this.setState({ text: this.state.name });
	};
	search1() {
		this.setState({ show: false });
		this.setState({ calculando: true });
		setTimeout(this.search.bind(this), 4000);
	}
	handleChange = (textValue) => {
		this.setState({ name: textValue });
		//this.search();
	};
	render() {
		var found = this.state.found;
		return (
			<View style={styles.container}>
				<View style={{ flex: 3 }}>
					<Text style={styles.Title}>&pi; Finder</Text>
					<View style={styles.flex}>
						<TextInput
							style={styles.input}
							autoCorrect={false}
							placeholder='type your name'
							value={this.state.name}
							onChangeText={this.handleChange}></TextInput>
						<Button
							onPress={this.search1.bind(this)}
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
					{this.state.calculando && (
						<Text style={styles.calculating}>Calculating...</Text>
					)}
					{this.state.show && (
						<View style={styles.result_view}>
							{!found && (
								<Text style={styles.result}>
									'{this.state.text} ' was not found on the first 40M digits of
									??.
								</Text>
							)}
							{found && (
								<Text style={styles.result}>
									'{this.state.text} ' was found on the {this.state.digit * 127}{" "}
									digit of ??.
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
	calculating: {
		fontSize: 12,
		fontWeight: "300",
		paddingVertical: 35,
		paddingHorizontal: 70,
		justifyContent: "center",
		//backgroundColor: "red",
		textAlign: "center",
	},
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
