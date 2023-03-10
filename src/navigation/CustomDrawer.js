import React, { useContext, useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from "@react-navigation/drawer";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";


import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from "react-redux";
import { userContextLogin, userContextLogout } from "../redux/actions/auth";
import { removeAccessToken } from "../storage";
const CustomDrawer = (props) => {
  // const prof = ()=>{
  //   navigation.navigate(Profile)
  // }

  const logOut = async() => {
    await removeAccessToken()
    await props.dispatch(userContextLogout());
  }
console.log("PROPS_IN_CUSTOM_DRAWER :",props.redux)
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
      {/* <TouchableOpacity >


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
                fontSize: 14,

                alignSelf: "center",
                fontWeight: "bold",
                marginLeft: wp("5%")
              }}
            >
              Profile name
            </Text>
            <Text
              style={{
                color: "#0759E2",
                fontSize: 12,
                // fontFamily: "Roboto-Medium",
                alignSelf: "center",
                fontWeight: "bold",
                marginLeft: wp("5%")
              }}
            >
              View/ Edit profile
            </Text>


          </View>


        </View>
        </TouchableOpacity> */}
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          onPress={() => {
            logOut()
          }}

          // style={{ right:20 }}
          icon={({ focused, color, size }) => <Icon color={'#000'} size={size} name={focused ? `exit` : `exit-outline`} />}
          //               label={`Sign Out`}
          labelStyle={{
            color: "black",
            fontSize: 14,

            alignSelf: "center",
            fontWeight: "500",
            right: '45%'
            // marginLeft: wp("5%")
          }}
        //               onPress={() => signOut()}
        />
      </DrawerContentScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,


    // backgroundColor:"yellow",
  }
});

// export default CustomDrawer;
// dispatcher functions
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

//getting props from redux
function mapStateToProps(state) {
  let redux = state;
  return { redux };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);