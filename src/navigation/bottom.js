import React from 'react';
import { Image, Text, View } from 'react-native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import images from '../assets';
import Home from '../screen/private/home';
import Flight from '../screen/private/flight'
import Hotel from '../screen/private/hotel';
import Packages from '../screen/private/packages';
// const Tab = createMaterialBottomTabNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Settings" component={Flight} />
//     </Tab.Navigator>
//   );
// }

const MyBottomTabs = () => {
  // const barColors = {
  //   home: "#171717",
  //   settings: "gold",
  //   profile: "lawngreen"
  // };

  // const [tab, setTab] = React.useState("search");

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
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#fff',
      // tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        height: 90,
        paddingHorizontal: 5,
        paddingTop: 0,
        backgroundColor: '#0759E2',
        position: 'absolute',
        borderTopWidth: 0,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: -4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
  })}
      // shifting={false}
      // initialRouteName="Home"
      // activeColor="#fff"
      // inactiveColor='#ACACAC'
      // style={{ backgroundColor: 'green' }}
      // barStyle={{
      //   backgroundColor: "#0759E2",
      //   height: 100,
      //   tabBarShowLabel: false,
      //   shadowColor: '#171717',
      //   shadowOffset: { width: 2, height: -4 },
      //   shadowOpacity: 0.2,
      //   shadowRadius: 3,
      //   elevation: 2,
      //   // tabBarStyle: { backgroundColor: 'powderblue' },
      // }}
      // options={{
      //   tabBarShowLabel: false,
      //   // tabBarColor: 'red',
      // }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // tabBarColor: 'red',
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Image
              style={{
                height: 25,
                width: 35,
                // backgroundColor:
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
          // tabBarColor: 'red',
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
          // tabBarColor: 'red',
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


    // <Tab.Navigator
    //   initialRouteName="Home"
    //   screenOptions={{
    //     tabBarActiveTintColor: '#e91e63',
    //   }}
    //   barStyle={{
    //     backgroundColor: "#0759E2",
    //     height: 100,
    //     tabBarShowLabel: false,
    //     shadowColor: '#171717',
    //     shadowOffset: { width: 2, height: -4 },
    //     shadowOpacity: 0.2,
    //     shadowRadius: 3,
    //     elevation: 2,
    //     // tabBarStyle: { backgroundColor: 'powderblue' },
    //   }}
    // >
    //   <Tab.Screen
    //     name="Home"
    //     component={Home}
    //     options={{
    //       tabBarLabel: 'Home',
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="home" color={color} size={size} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Flights"
    //     component={Flight}
    //     options={{
    //       tabBarLabel: 'Flights',
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="flight-takeoff" color={color} size={size} />
    //       ),
    //       tabBarBadge: 3,
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Hotels"
    //     component={Hotel}
    //     options={{
    //       tabBarLabel: 'Hotels',
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="account" color={color} size={size} />
    //       ),
    //     }}
    //   />

    //   <Tab.Screen
    //     name="Packages"
    //     component={Packages}
    //     options={{
    //       tabBarLabel: 'Packages',
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="account" color={color} size={size} />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>
  );
};

export default MyBottomTabs