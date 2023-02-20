// import React, {useEffect, useContext} from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import MyBottomTabs from './bottom';
import Accountdetail from '../screen/private/account';
import Setting from '../screen/private/setting';
import BookingHistory from '../screen/private/booking';
import Profile from '../screen/private/profile';
import MyBottomTabs from './bottom';
import HolidayPlanner from '../screen/private/holidayPlanner';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator 
//     screenOptions={{
//         headerShown: false,
//         drawerStyle: {
//           backgroundColor: '#fff',
//           width: '60%',
//         },
//       }}
//     >
//       <Drawer.Screen name="MyBottomTabs" component={MyBottomTabs} />
//       <Drawer.Screen name="Profile" component={Profile} />
//       <Drawer.Screen name="MyAccount" component={Accountdetail} />
//       <Drawer.Screen name="Setting" component={Setting} />
//       <Drawer.Screen name="Booking" component={BookingHistory} />
//     </Drawer.Navigator>
//   );
// }

// export default MyDrawer


import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import { Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Home1 from "react-native-vector-icons/Octicons";
import User from "react-native-vector-icons/Feather";
import Icon from 'react-native-vector-icons/EvilIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

// import Setting from "../screen/setting";
// import Flight from "../screen/flight";
// import Home from "../screen/home";
// import Employee from "../screen/employee";
// import Accountdetail from "../screen/account";
// import Booking from "../screen/booking";
import { View } from "react-native";
import { Text } from "react-native";
// import Profile from "../screen/profile";
// import Flightdetail from "../screen/flightdetail";

// const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const Drawer = createDrawerNavigator();
  // const Stack = createNativeStackNavigator();
  return (
    <Drawer.Navigator
    initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: widthPercentageToDP(-5),
          // fontFamily: 'Roboto',
          fontSize: 14
        },
        drawerActiveBackgroundColor: "#FFFF",
        drawerActiveTintColor: "#000000",
        drawerInactiveTintColor: "#000000",
        drawerStyle: {
          width: widthPercentageToDP("70%"),
          // borderTopEndRadius: 45
        }
      }}
    >

      <Drawer.Screen
        name=" "
        component={Profile}
        options={{
          drawerIcon: ({ color }) =>
          <View>

            <View
                  style={{
                    marginLeft: wp("5%"),
                    marginTop: hp("3%"),
                    flexDirection: "row",
                    marginBottom: hp("3%")
                  }}
                >
              <Image source={require("../assets/icons/circle.png")} />
              <View style={{flexDirection:'column'}}>
              <Text
                  style={{
                    color: "#707070",
                    fontSize: 16,

                    // alignSelf: "center",
                    fontWeight: "500",
                    marginLeft: wp("4%")
                  }}
                >
                  Ankit Singh
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: "#0759E2",
                      fontSize: 10,
                      // fontFamily: "Roboto-Medium",
                      alignSelf: "center",
                      fontWeight: "400",
                      marginLeft: wp("4%")
                    }}
                  >
                    View/ Edit profile
                  </Text>
                </TouchableOpacity>


              </View>
            </View>
              <View style={{
                height:1,
                backgroundColor:'#DFDFDF',
                // flex:1,
                width:600,
                right:100,
                
                }} />
          </View>




        }}
      />
      <Drawer.Screen
        name="Home"
        component={MyBottomTabs}
        options={{
          drawerIcon: ({ color }) =>
          <Icon1 name="home" size={30} color="grey" />

        }}
      />
      <Drawer.Screen
        name="My Account"
        component={Accountdetail}
        options={{
          drawerIcon: ({ color }) =>
          <Image source={require("../assets/icons/891.png")} />,

        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => <Image source={require("../assets/icons/setting.png")} />
        }}
      />
      <Drawer.Screen
        name="Booking"
        component={BookingHistory}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => <Icon name="calendar" size={25} color="#000" />
        }}
      />
      {/* <Drawer.Screen
        name="Holiday Planner"
        component={HolidayPlanner}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => <Icon1 name="luggage" size={25} color="#000" />
        }}
      /> */}



    </Drawer.Navigator>
  );
};

export default MyDrawer;