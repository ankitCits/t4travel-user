import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
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

const Signup = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor:"#fff",flex:1}}>
      <StatusBar translucent barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.header}>
                <View style={styles.headerapp}>
                  <TouchableOpacity
                  onPress={()=>navigation.pop()}
                  >
                  <Icons name="arrowleft" size={30} color="#000" />
                  </TouchableOpacity>
                </View>
            </View>
      <ScrollView>
      <View style={{backgroundColor: '#fff', height: hp('25%')}}></View>
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
          style={{fontSize:13}}
          placeholder="First Name"
          placeholderTextColor={'#7A869A'}
          autoCapitalize="none"
          onChangeText={name => {
            setName(name);
          }}
          value={name}
        />
      </View>
      <View style={styles.input1}>
        <Icon name="user" size={16} color="#7A869A" style={styles.icons} />
        <TextInput
          // style={styles.input}
          style={{fontSize:13}}
          placeholder="Last Name"
          placeholderTextColor={'#7A869A'}
          autoCapitalize="none"
          onChangeText={name => {
            setName(name);
          }}
          value={name}
        />
      </View>
      <View style={styles.input1}>
        <Icon name="phone" size={16} color="#7A869A" style={styles.icons} />
        <TextInput
          // style={styles.input}
          style={{fontSize:13}}
          placeholder="Phone"
          placeholderTextColor={'#7A869A'}
          autoCapitalize="none"
          onChangeText={name => {
            setName(name);
          }}
          value={name}
        />
      </View>
      <View style={styles.input1}>
        <Iconss name="email" size={16} color="#7A869A" style={styles.icons} />
        <TextInput
          // style={styles.input}
          style={{fontSize:13}}
          placeholder="Email"
          placeholderTextColor={'#7A869A'}
          autoCapitalize="none"
          onChangeText={name => {
            setName(name);
          }}
          value={name}
        />
      </View>

      <View style={styles.input1}>
        <Icont name="locked" size={16} color="#7A869A" style={styles.icons} />
        <TextInput
          // start={}
          style={{fontSize:13}}
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
        // onPress={() => submitLogin()}
      >
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
    alignSelf:'center',
    alignItems:'center'
  },
  input1: {
    borderColor: 'grey',
    // borderBottomWidth: 0.5,
    width: wp('80%'),
    height: hp('6%'),
    alignSelf: 'center',
    color: '#7A869A',
    flexDirection: 'row',
    alignSelf:'center',

    marginTop: hp('2.5%'),
    borderWidth: 0.5,
    borderRadius: 5,
    paddingLeft: 15,
    alignItems:'center'
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
    left:5,
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
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center'
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
    alignItems:'center'
  },
});

export default Signup;
