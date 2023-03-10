import React, { useState } from "react";
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconss from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { connect } from "react-redux";
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { postSignupVerify, postSignupVerifyResend, userContextLogin } from "../../redux/actions/auth";
import Util from "../../utils/Validator";
import { ActivityIndicator } from "react-native-paper";
import AwesomeAlert from 'react-native-awesome-alerts';


const SignupVerify = (props) => {
  const [otp, setOtp] = useState("");
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


  const submitSignupOtp = async () => {
    console.log("submitSignupOtp", props.redux.userDataReducer.userData.email)
    try {
      // Validate OTP
      let result = Util.isEmpty(otp);
      if (result === true) {
        showError("Please Fill Valid OTP .")
        return;
      }

      // if (otp.trim().length != 4) {
      //   showError("Fill Valid Otp")
      //   return;
      // }

      // Creating Valid Payload :
      let Payload = {
        email: props.redux.userDataReducer ? props.redux.userDataReducer.userData.email : "",
        otp: otp
      }
      setLoader(true)
      let postSignupReq = await props.dispatch(postSignupVerify(Payload));
      if (postSignupReq.status_code == 1) {
        console.log('SIGNUP_VERIFY_RESPONSE_IN_PAGE :', postSignupReq);
        setLoader(false)
        // token
        await setAccessToken(postSignupReq.token)
        await props.dispatch(userContextLogin());
        // navigation.navigate("SignupVerify")
      } else {
        setLoader(false)
        showError(`${postSignupReq.message}`)
        return
      }
    } catch (error) {
      setLoader(false)
      showError(`${error}`)
      console.log("CATCH_IN_SIGNUP_VERIFY", error)
    }



    // navigation.navigate('SignupVerify',{key:'value'})
    // showError()
  }

  const submitSignupOtpResend = async () => {
    try {
      // Creating Valid Payload :
      let Payload = {
        email: props.redux.userDataReducer ? props.redux.userDataReducer.userData.email : "",
      }
      setLoader(true)
      let postSignupReq = await props.dispatch(postSignupVerifyResend(Payload));
      if (postSignupReq.status_code == 1) { 
        Alert.alert('Sucessfully Resend Otp.', [
          {text: 'OK'},
        ]);
        setLoader(false)
      }else{
        Alert.alert('Failed Resend Otp.', [
          {text: 'OK'},
        ]);
        setLoader(false)
      }
    } catch (error) {
      console.log("ERROR_IN_SIGNUP_RESEND_OTP", error)
    }
  }

  // console.log("PROPS_IN_SIGNUP_VERIFY :", props.redux.userDataReducer.userData)
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <StatusBar translucent barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.header}>
        <View style={styles.headerapp}>
          <TouchableOpacity
            onPress={() => navigation.pop()}
          >
            <Iconss name="arrowleft" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ backgroundColor: '#fff', height: hp('25%'), justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/logo.png')}
        // style={styles.}
        />
      </View>
      <Text
        style={{
          fontSize: 30,
          marginTop: hp("3%"),
          marginLeft: wp("10%"),
          color: "#000",
          fontWeight: "600",
          // fontFamily: 'Roboto',
          // marginBottom: hp("4%")
        }}
      >
        Signup OTP Verification
      </Text>
      <Text style={{ fontSize: 14, color: '#707070', marginLeft: wp("10%"), marginTop: 10 }}>
        An 6 digit code has been sent to
      </Text>
      <Text style={{ fontSize: 12, color: '#252525', marginLeft: wp("10%"), marginBottom: hp("4%") }}>
        {props.redux.userDataReducer.userData ? props.redux.userDataReducer.userData.email : ""}
      </Text>
      <View style={styles.input}>
        {/* <Icon name="user" size={20} color="#7A869A"  style={styles.icons} /> */}
        <TextInput
          // style={styles.input}
          style={{ fontSize: 13, width: '90%', height: 50 }}
          placeholder="Enter OTP"
          placeholderTextColor={"#7A869A"}
          autoCapitalize='none'
          onChangeText={(otps) => {
            setOtp(otps);
          }}
          value={otp}
        />
      </View>


      <TouchableOpacity
        style={styles.pressable}
        onPress={() => submitSignupOtp()}
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
              fontWeight: '500'
            }}
          >
            SUBMIT
          </Text>
        }

      </TouchableOpacity>
      <View style={styles.sign}>
        <Text style={styles.label1}>Didn't receive the link?</Text>

        <TouchableOpacity
        onPress={() => submitSignupOtpResend()}
        >
          <Text style={styles.label}> Resend</Text>
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
    paddingLeft: 15
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
    paddingLeft: 15
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

  },
  label: {
    // marginleft: wp("2%"),
    marginTop: hp("0.7%"),
    color: "#0F63F4",

    // fontWeight: "400",
    // fontFamily: 'Roboto',
    alignItems: "center",
    fontWeight: '500',
    // justifyContent:'center'
  },
  label1: {
    marginleft: wp("2%"),
    marginTop: hp("0.5%"),
    color: "#7A869A",

    fontSize: 14
    // fontFamily: 'Roboto',
  },
  boxes: {
    flexDirection: "row",
    justifyContent: "center"
  },
  pressable: {
    width: wp("80%"),
    height: hp("5%"),
    alignSelf: "center",
    backgroundColor: "#0F63F4",
    color: "white",
    borderRadius: 8,
    justifyContent: "center",
    marginTop: hp("5%")
  },
  sign: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: hp("5%"),
    alignItems: 'center',
    alignSelf: 'center'
    // marginBottom: hp("5%")
  },
  footer: {
    width: wp("100%")
    // marginBottom:hp("5%"),
    // height:hp("30%")
  },
  icons: {
    marginTop: hp("1.5%"),
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

// export default SignupVerify;
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupVerify);
