import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialIcons';
const myIcon = <Icon name="play" size={30} color="#900" />;
import { useNavigation } from '@react-navigation/native';
import images from '../../assets';
import CommonBase from '../../component/CommonBase';


const Home = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [mainSelected, setMainSelected] = useState("flight")

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    //  {/* <View style={{backgroundColor:"red",color:'white',height:hp("30%")}}>
    // <Text style={{color:'white'}}>hhhhh</Text>
    // </View> */}
    // <ScrollView contentContainerStyle={style.container}>
    // <View style={{backgroundColor:"red",color:'white',height:hp("30%")}}>
    // <Text style={{color:'white'}}>hhhhh</Text>
    // </View>

    // </ScrollView>
    // </SafeAreaView>
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
    <StatusBar
      animated={true}
      backgroundColor="#fff"
      barStyle="dark-content"
    />
      <ScrollView contentContainerStyle={style.container}>
        <View style={{position: 'relative'}}>
          <Image
            source={require('../../assets/images/homescreen.jpg')}
            style={style.image}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              marginTop: hp('1%'),
            }}>
            <View
              style={{
                flexDirection: 'row',
                // backgroundColor: 'red',
                // width: 100,
                // height: 100,
                marginRight: wp('60%'),
                marginTop: hp('1%'),
                alignSelf: 'center',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
              onPress={()=>navigation.openDrawer()}
              >
                  <Image
                    source={require('../../assets/icons/menu.png')}
                    style={{marginRight: wp('2%'), marginLeft: wp('4%')}}
                  />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../../assets/images/travel.png')} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Profile',{key:'value'})}
              style={{
                flexDirection: 'row',
                marginTop: hp('1%'),
                // backgroundColor: 'red',
                // width: 100,
                // height: 100,
                alignSelf: 'center',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/user.png')}
                style={{left: wp('5%')}}
              />
              {/* <Image source={require('../../assets/icons/arrow.png')} /> */}
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: 'absolute',
              alignSelf: 'center',
              marginTop: hp('10%'),
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                // fontFamily: 'Roboto',
              }}>
              Discover the most engaging places
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: 'white',
                textAlign: 'center',
                fontWeight: 'normal',
                // fontFamily: 'Monotype Corsiva',
              }}>
              Start your destiny here...
            </Text>
          </View>
        </View>
        <View style={style.viewinfo}>
          <TouchableOpacity 
          onPress={()=>{
            setMainSelected("flight")
          navigation.navigate("Flight",{email:"new"})
          }}
          style={mainSelected == "flight" ? style.infobox1 : style.infobox}>
            <Image
              source={mainSelected == "flight" ? images.flightBlue : images.flightWhite}
              style={{alignSelf: 'center', width: 30, height: 25}}
            />
            <Text style={mainSelected == "flight" ? style.titleinfo : style.titleinfo1}>Flights</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={()=>{
            // setMainSelected("hotel")
            navigation.navigate("Hotel",{email:"new"})
          }}
          style={mainSelected == "hotel" ? style.infobox1 : style.infobox}>
            <Image
              source={images.hotelGrey}
              style={{alignSelf: 'center', width: 27, height: 25}}
            />
            <Text style={mainSelected == "hotel" ? style.titleinfo : style.titleinfo1}>Hotels</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={()=>{
            // setMainSelected("packages")
            navigation.navigate("HolidayPlanner",{email:"new"})
          }}
          style={mainSelected == "packages" ? style.infobox1 : style.infobox}>
            {/* <Image
              source={images.packageGrey}
              style={{alignSelf: 'center', width: 25, height: 25}}
            /> */}
            <IconM name="luggage" size={40} color="#ACACAC" style={{alignSelf:'center'}} />
            <Text style={mainSelected == "packages" ? style.titleinfo : style.titleinfo1}>Holidays planners</Text>
          </TouchableOpacity>
        </View>


        {/* REPEAT COMPONENT */}
            <CommonBase />
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    width: wp('100%'),
    // height: hp('100%'),
    backgroundColor: 'white',
    color: 'white',
  },
  homeimg: {
    height: hp('30%'),
    // borderRadius:20
  },
  image: {
    width: wp('100%'),
    height: hp('25%'),
    // borderBottomEndRadius:25,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: '#000000',
    opacity: 0.7
    // position:'relative'
  },
  titleinfo: {
    fontSize: 14,
    color: '#0759E2',
    // fontFamily: 'Roboto',
    textAlign: 'center',
    marginTop:7.5,
    // fontWeight:'500'
  },
  titleinfo1: {
    fontSize: 10,
    color: '#ACACAC',
    // fontFamily: 'Roboto',
    textAlign: 'center',
    marginTop:4
  },

  infobox: {
    // backgroundColor: 'red',
    height: hp('9%'),
    width: wp('20%'),
    borderRadius: 10,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  infobox1: {
    backgroundColor: '#E9F0FD',
    height: hp('9%'),
    width: wp('20%'),
    borderRadius: 10,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  viewinfo: {
    backgroundColor:'#fff',
    width: wp('90%'),
    height: hp('11%'),
    color: 'white',
    top: hp('-7%'),
    borderRadius: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom:'-10%'
  },

  input: {
    width: '70%',
    height: 35,
    // borderColor: 'gray',
    // borderWidth: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingHorizontal:5,
    fontSize:12
  },
  button: {
    width: '20%',
    height: 35,
    backgroundColor: '#0759E2',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  container1: {
    // flex: 1,
    // width:wp('90%'),
    // alignItems: 'center',
    justifyContent: 'center',
    height: hp('60%'),
  },
  backgroundView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'yellow',

    opacity: 0.5,
    zIndex: -1,
  },
  scrollView: {
    width: '90%',
    alignSelf: 'center',
    // height: '60%',
    // backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    zIndex: 1,
    color: 'black',
    marginTop: hp('-14%'),
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
    color: 'red',
  },
  underLine:{
    height:0.5,
    flex:1,
    backgroundColor:"grey",
    opacity:0.5,
  },
  destinationImages:{
    alignSelf: 'center',
    opacity:0.6,
    height:200,
    borderRadius:10
  },
  destinationImagesText:{
    justifyContent:'flex-end'
  },
  reviewBox:{
    backgroundColor: 'white',
    width: wp('70%'),
    height: hp('20%'),
    borderRadius: 10,
    elevation: 5,
    marginRight:wp('4%'),
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,

  }
});
export default Home;
