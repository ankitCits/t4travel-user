import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icont from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/AntDesign';
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import Util from '../../utils/Validator';
import { postSignup } from '../../redux/actions/auth';
import { ActivityIndicator } from 'react-native-paper';
import AwesomeAlert from 'react-native-awesome-alerts';
const Signup = (props) => {
  const [firstName, seFirsttName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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


  const submitSignup = async () => {

    try {
      // Validate First Name
      let result = Util.isEmpty(firstName);
      if (result === true) {
        showError("Please Fill Valid First Name.")
        return;
      }

      // Validate Last Name
      result = Util.isEmpty(lastName);
      if (result === true) {
        showError("Please Fill Valid Last Name.")
        return;
      }

      // Validate Phone Number
      let zero = phone.startsWith('0');
      if (zero) {
        showError('Invalid! Mobile number should not start with a zero');
        return;
      }

      result = phone.length != 10;
      if (result = phone.length != 10) {
        showError("Please Fill Valid Mobile Number.")
        return;
      }

      // Validate email
      result = Util.validateEmail(email);
      if (result.status === false) {
        showError("Please Fill Valid email Please.")
        return;
      }

      // Validate Password 
      result = Util.isEmpty(password);
      if (result === true) {
        showError("Please Fill Valid password.")
        return;
      }


      // Creating Valid Payload :
      let Payload = {
        fname: firstName,
        lname: lastName,
        phone: phone,
        email: email,
        password: password
      }
      setLoader(true)
      let postSignupReq = await props.dispatch(postSignup(Payload));
      console.log('SIGNUP_RESPONSE_IN_PAGE :', postSignupReq);
      if (postSignupReq.email == Payload.email) {
        console.log('SIGNUP_RESPONSE_IN_PAGE :', postSignupReq);
        setLoader(false)
        navigation.navigate("SignupVerify")
      } else {
        setLoader(false)
        showError(`${postSignupReq.email}`)
        return
      }
    } catch (error) {
      setLoader(false)
      showError(`${error}`)
      console.log("CATCH_IN_SIGNUP", error)
    }



    // navigation.navigate('SignupVerify',{key:'value'})
    // showError()
  }
  // console.log("PROPS_IN_SIGNUP>", props.redux)
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <StatusBar translucent barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.header}>
        <View style={styles.headerapp}>
          <TouchableOpacity
            onPress={() => navigation.pop()}
          >
            <Icons name="arrowleft" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
      <View style={{ backgroundColor: '#fff', height: hp('25%'), justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/logo.png')}
        // style={styles.}
        />
      </View>
        <Text
          style={{
            fontSize: 35,
            marginTop: hp('3%'),
            marginLeft: wp('10%'),
            color: '#000',
            fontWeight: '600',
            // fontFamily: 'Roboto',
            marginBottom: hp('4%'),
          }}>
          Sign up
        </Text>
        <View style={styles.input}>
          <Icon name="user" size={16} color="#7A869A" style={styles.icons} />
          <TextInput
            // style={styles.input}
            style={styles.inputInner}
            placeholder="First Name"
            placeholderTextColor={'#7A869A'}
            autoCapitalize="none"
            onChangeText={fname => {
              seFirsttName(fname);
            }}
            value={firstName}
          />
        </View>
        <View style={styles.input1}>
          <Icon name="user" size={16} color="#7A869A" style={styles.icons} />
          <TextInput
            // style={styles.input}
            style={styles.inputInner}
            placeholder="Last Name"
            placeholderTextColor={'#7A869A'}
            autoCapitalize="none"
            onChangeText={lName => {
              setLastName(lName);
            }}
            value={lastName}
          />
        </View>
        <View style={styles.input1}>
          <Icon name="phone" size={16} color="#7A869A" style={styles.icons} />
          <TextInput
            // style={styles.input}
            style={styles.inputInner}
            placeholder="Phone"
            placeholderTextColor={'#7A869A'}
            autoCapitalize="none"
            onChangeText={phoneN => {
              setPhone(phoneN);
            }}
            keyboardType='numeric'
            value={phone}
          />
        </View>
        <View style={styles.input1}>
          <Iconss name="email" size={16} color="#7A869A" style={styles.icons} />
          <TextInput
            // style={styles.input}
            style={styles.inputInner}
            placeholder="Email"
            placeholderTextColor={'#7A869A'}
            autoCapitalize="none"
            onChangeText={emailN => {
              setEmail(emailN);
            }}
            value={email}
          />
        </View>

        <View style={styles.input1}>
          <Icont name="locked" size={16} color="#7A869A" style={styles.icons} />
          <TextInput
            // start={}
            style={styles.inputInner}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor={'#7A869A'}
            onChangeText={password => {
              setPassword(password);
            }}
            value={password}
          />
        </View>

        <TouchableOpacity
          style={styles.pressable}
          onPress={() => submitSignup()}
        >
          {loader ?
            <ActivityIndicator size="small" color={"#fff"} />
            :
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                color: 'white',
              }}>
              NEXT
            </Text>
          }

        </TouchableOpacity>
        <View style={styles.sign}>
          <Text style={styles.label1}>Already have an account?</Text>

          <TouchableOpacity
            onPress={() => navigation.pop()}
          >
            <Text style={styles.label}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <FlashMessage /> */}
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
  );
};
const styles = StyleSheet.create({
  container: {
    // width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent:'center',
    // alignContent:'center',
  },

  img: {
    flex: 1,
  },
  form: {
    flex: 2,
    // backgroundColor: 'red',
  },
  footer: {
    flex: 1,
    backgroundColor: 'black',
  },
  logo: {
    // flex:1,
    width: wp('60%'),
    height: hp('20%'),
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    margin: hp('5%'),
  },
  input: {
    borderColor: 'grey',
    // borderBottomWidth: 0.5,
    width: wp('80%'),
    height: hp('6%'),
    alignSelf: 'center',
    color: '#7A869A',
    flexDirection: 'row',

    // marginTop: hp("1%"),
    borderWidth: 0.5,
    borderRadius: 5,
    paddingLeft: 15,
    alignSelf: 'center',
    alignItems: 'center'
  },
  input1: {
    borderColor: 'grey',
    // borderBottomWidth: 0.5,
    width: wp('80%'),
    height: hp('6%'),
    alignSelf: 'center',
    color: '#7A869A',
    flexDirection: 'row',
    alignSelf: 'center',

    marginTop: hp('2.5%'),
    borderWidth: 0.5,
    borderRadius: 5,
    paddingLeft: 15,
    alignItems: 'center'
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('1%'),
  },
  checkbox: {
    alignSelf: 'center',
    color: '#000',
    borderColor: '#000',
  },
  label: {
    left: 5,
    // marginTop: hp('0.7%'),
    color: '#0F63F4',

    fontWeight: '500',
    // fontFamily: 'Roboto',
    alignItems: 'center',
    // fontWeight: 'bold',
  },
  label1: {
    marginleft: wp('2%'),
    marginTop: hp('0.5%'),
    color: '#7A869A',

    fontSize: 14,
    // fontFamily: 'Roboto',
  },
  boxes: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pressable: {
    width: wp('80%'),
    height: hp('5%'),
    alignSelf: 'center',
    backgroundColor: '#0F63F4',
    color: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: hp('4%'),
  },
  sign: {
    flexDirection: 'row',
    // alignSelf: 'center',
    marginTop: hp('5%'),
    marginBottom: hp('5%'),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  footer: {
    width: wp('100%'),
    // marginBottom:hp("5%"),
    // height:hp("30%")
  },
  icons: {
    // marginTop: hp('1.5%'),
    marginRight: wp('2%'),
  },
  icons1: {
    marginTop: hp('1.3%'),
    marginRight: wp('1%'),
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
  inputInner: { fontSize: 13, width: '90%', height: 50 }
});

// export default Signup;
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

