import React, { useState } from "react";
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icont from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/Ionicons';
import IconsM from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Iconss from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import { connect } from "react-redux";
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { loginAuth, userContextLogin } from "../../redux/actions/auth";
import { ActivityIndicator } from "react-native-paper";
import Util from "../../utils/Validator";
import AwesomeAlert from 'react-native-awesome-alerts';
import { setAccessToken } from "../../storage";
const Login = (props) => {
  const [email, setEmail] = useState('ankit01patel02@gmail.com');
  const [password, setPassword] = useState('112');
  const [loader, setLoader] = useState(false)
  const navigation = useNavigation();
  const [alertShow, setAlertShow] = useState(false)
  const [alertText, setAlertText] = useState('')

  const showError = (msg) => {
    setAlertText(msg)
    setAlertShow(true)
    // showMessage({
    //   message: msg,
    //   type: "danger",
    // });
  }
  const hideAlert = () => {
    setAlertShow(false)
  };

  const submitLogin = async () => {
    console.log("LOGIN__")
    try {
      // Validate email
      let result = Util.validateEmail(email);
      if (result === true) {
        showError("Please Enter the Valid UserName & Password.")
        return;
      }

      // Validate Last Name
      result = Util.isEmpty(password);
      if (result === true) {
        showError("Please Enter the Valid UserName & Password.")
        return;
      }

      // Creating Valid Payload :
      let Payload = {
        email: email,
        password: password
      }
      setLoader(true)
      let postLoginReq = await props.dispatch(loginAuth(Payload));
      if (postLoginReq.status_code == 1) {
        console.log('LOGIN_VERIFY_RESPONSE_IN_PAGE :', postLoginReq);
        setLoader(false)
        await setAccessToken(postLoginReq.auth_token)
        await props.dispatch(userContextLogin());
        // navigation.navigate("SignupVerify")
      } else {
        setLoader(false)
        showError(`${postLoginReq.message}`)
        return
      }
    } catch (error) {
      setLoader(false)
      showError(`${error}`)
      console.log("CATCH_IN_LOGIN_VERIFY", error)
    }



    // navigation.navigate('SignupVerify',{key:'value'})
    // showError()
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <StatusBar translucent barStyle="dark-content" backgroundColor="#fff" />
      {props.route.params &&
        <View style={styles.header}>
          <View style={styles.headerapp}>
            <TouchableOpacity
            //   onPress={()=>navigation.pop()}
            >
              <Iconss name="arrowleft" size={30} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      }

      <View style={{ backgroundColor: '#fff', height: hp('25%'), justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/logo.png')}
        // style={styles.}
        />
      </View>
      <Text
        style={{
          fontSize: 35,
          marginTop: hp("3%"),
          marginLeft: wp("10%"),
          color: "#000",
          fontWeight: "600",
          // fontFamily: 'Roboto',
          marginBottom: hp("4%")
        }}
      >
        Login
      </Text>
      <View style={styles.input}>
        <Icon name="user" size={16} color="#7A869A" style={styles.icons} />
        <TextInput
          // style={styles.input}
          color="black"
          placeholder="Email"
          placeholderTextColor={"#7A869A"}
          autoCapitalize='none'
          onChangeText={(emails) => {
            setEmail(emails);
          }}
          value={email}
          style={{ fontSize: 13, width: '90%', height: 50 }}
        />
      </View>
      <View style={styles.input1}>
        <Icont name="locked" size={16} color="#7A869A" style={styles.icons} />
        <TextInput
          // start={}
          color="black"
          autoCapitalize='none'
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor={"#7A869A"}
          onChangeText={(password) => {
            setPassword(password);
          }}
          value={password}
          style={{ fontSize: 13, width: '90%', height: 50 }}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <View style={styles.boxes}>

          <Icons name="checkbox" size={16} color="#0F63F4" />
          <Text style={styles.label}>Remember Me</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("ForgetPasswordEmail")}
        >
          <Text style={styles.label1}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.pressable}
        onPress={() => submitLogin()}
      >

        {loader ?
          <ActivityIndicator size="small" color={"#fff"} />
          :
          <Text
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              color: '#fff',
              fontWeight: '600'
            }}
          >
            SUBMIT
          </Text>
        }
      </TouchableOpacity>
      <View style={styles.sign}>
        <Text style={styles.label1}>Don't have an account?</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.label}> Sign up</Text>
        </TouchableOpacity>
      </View>
      {/* <FlashMessage position="top" /> */}
      <AwesomeAlert
        show={alertShow}
        showProgress={false}
        title="Error"
        message={alertText}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        // cancelText="No, cancel"
        confirmText="Ok, Got it."
        confirmButtonColor="red"
        onCancelPressed={() => {
          hideAlert();
        }}
        onConfirmPressed={() => {
          hideAlert();
        }}
      />
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  container: {
    // width: '100%',
    flex: 1,
    backgroundColor: "#fff"
    // justifyContent:'center',
    // alignContent:'center',
  },

  img: {
    flex: 1
  },
  form: {
    flex: 2
    // backgroundColor: 'red',
  },
  footer: {
    flex: 1,
    backgroundColor: "black"
  },
  logo: {
    // flex:1,
    width: wp("60%"),
    height: hp("20%"),
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    margin: hp("5%")
  },
  input: {
    borderColor: "grey",
    // borderBottomWidth: 0.5,
    width: wp("80%"),
    height: hp("6%"),
    alignSelf: "center",
    color: "#7A869A",
    flexDirection: "row",
    // backgroundColor:"yellow",
    // marginTop: hp("1%"),
    borderWidth: 0.5,
    borderRadius: 5,
    paddingLeft: 15,
    alignItems: 'center'
  },
  input1: {
    borderColor: "grey",
    // borderBottomWidth: 0.5,
    width: wp("80%"),
    height: hp("6%"),
    alignSelf: "center",
    color: "#7A869A",
    flexDirection: "row",
    // backgroundColor:"yellow",
    marginTop: hp("2.5%"),
    borderWidth: 0.5,
    borderRadius: 5,
    paddingLeft: 15,
    alignItems: 'center'
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: hp("1%")
  },
  checkbox: {
    alignSelf: "center",
    color: "#000",
    borderColor: "#000"
    // backgroundColor:"#F4BD2F"
  },
  label: {
    left: 5,
    // marginTop: hp("0.7%"),
    color: "#0F63F4",
    // backgroundColor: '#F4BD2F',
    // fontFamily: 'Roboto',
    alignItems: "center",
    fontWeight: '500',
  },
  label1: {
    marginleft: wp("2%"),
    marginTop: hp("0.5%"),
    color: "#7A869A",
    // backgroundColor: '#F4BD2F',
    fontSize: 14
    // fontFamily: 'Roboto',
  },
  boxes: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  pressable: {
    width: wp("80%"),
    height: hp("5%"),
    alignSelf: "center",
    backgroundColor: "#0F63F4",
    color: "white",
    borderRadius: 8,
    justifyContent: "center",
    marginTop: hp("8%")
  },
  sign: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: hp("5%"),
    marginBottom: hp("5%"),
    alignItems: 'center'
  },
  footer: {
    width: wp("100%")
    // marginBottom:hp("5%"),
    // height:hp("30%")
  },
  icons: {
    // marginTop: hp("1.5%"),
    marginRight: wp("2%")
  },
  icons1: {
    marginTop: hp("1.3%"),
    marginRight: wp("1%")
  },
  header: {
    // flex :1,
    backgroundColor: '#fff',
    width: wp('100%'),
    // height: hp('20%'),
  },
  headerapp: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: wp('2%'),
    marginTop: hp('2%'),
    alignItems: 'center'
  },
});

// export default Login;
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
