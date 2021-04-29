import React, { Component } from "react";
import { Easing, Animated } from "react-native";
import { Button, Icon } from "native-base";
import {
	createStackNavigator,
	createDrawerNavigator,
	createSwitchNavigator,
	createBottomTabNavigator,
} from "react-navigation";

import App from "App";
import HowItWorks from "HowItWorks";

const transitionConfig = () => {
	return {
		transitionSpec: {
			duration: 0,
			useNativeDriver: true,
		},
	};
};

export const NormalNav = createBottomTabNavigator(
	{
		App: {
			screen: App,
			navigationOptions: {
				tabBarVisible: false,
				gesturesEnabled: false,
			},
		},
		HowItWorks: {
			screen: HowItWorks,
			navigationOptions: {
				tabBarVisible: false,
				gesturesEnabled: false,
			},
		},
	},
	{
		transitionConfig,
		backBehavior: "history",
		headerMode: "none",
		navigationOptions: {
			tabBarVisible: false,
			headerVisible: false,
			gesturesEnabled: false,
		},
		defaultNavigationOptions: {
			gesturesEnabled: false,
		},
	}
);
