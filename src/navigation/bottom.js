import React from 'react';
import { Image, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import images from '../assets';
import Home from '../screen/private/home';
import Flight from '../screen/private/flight'
import Hotel from '../screen/private/hotel';
import Packages from '../screen/private/packages';
const Tab = createMaterialBottomTabNavigator();


function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function SettingsScreens() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const MyBottomTabs = () => {
  const barColors = {
    home: "aqua",
    settings: "gold",
    profile: "lawngreen"
  };

  const [tab, setTab] = React.useState("search");

  // React.useEffect(() => {
  //   const unsubscribe = navRef.addListener("state", () => {
  //     const currRoute = navRef.getCurrentRoute();
  //     if (currRoute) {
  //       // A work-around to set background color for the bar after the ripple
  //       // effect completes. The 200 ms delay comes from trial and error
  //       setTimeout(() => setTab(), 200);
  //     }
  //   });
  //   return unsubscribe;
  // });

  return (
      <Tab.Navigator
      shifting={false} 
        initialRouteName="search"
        // shifting={true}
        activeColor="#fff"
        inactiveColor='#ACACAC'
        barStyle={{
          backgroundColor:"#0759E2",
          height:100,
          tabBarShowLabel:false,
          shadowColor: '#171717',
          shadowOffset: {width: 2, height: -4},
          shadowOpacity: 0.2,
          // shadowRadius: 3,
          elevation:2
        }}
        options={{
          tabBarShowLabel:false
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            // tabBarColor: barColors.home,
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Image
              style={{
              height: 25,
              width: 35,
              }}
              source={images.homeIcon}
              />
            )
          }}
        />
        <Tab.Screen
          name="Flights"
          component={Flight}
          options={{
            showLabel: true, 
            // tabBarColor: barColors.settings,
            tabBarLabel: "Flights",
            tabBarIcon: ({ color }) => (
              <Image
              style={{
              height: 22,
              width: 28,
              }}
              source={images.fightIcon}
              />
            )
          }}
        />
      <Tab.Screen
          name="Hotels"
          component={Hotel}
          options={{
            // tabBarColor: barColors.profiles,
            tabBarLabel: "Hotels",
            tabBarIcon: ({ color }) => (
              
              <Image
              style={{
              height: 22,
              width: 28,
              }}
              source={images.hotelIcon}
              />
            )
          }}
        />
        <Tab.Screen
          name="Packages"
          component={Packages}
          options={{
            tabBarLabel: "Packages",
            tabBarIcon: ({ color }) => (
              <Image
              style={{
              height: 20,
              width: 20,
              }}
              source={images.packagesIcon}
              />
            )
          }}
        />
      </Tab.Navigator>
  );
};

export default MyBottomTabs