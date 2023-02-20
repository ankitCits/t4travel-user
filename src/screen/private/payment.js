import React from 'react';
import {FlatList} from 'react-native';
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
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/EvilIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icond from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconss from 'react-native-vector-icons/AntDesign';
import Icont from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
const myIcon = <IconI name="location-sharp" size={20} color="#0F63F4" />;
const myIcon1 = <Icons name="keyboard-arrow-down" size={20} color="#000" />;
const myIcon2 = <Icon name="calendar" size={20} color="#0F63F4" />;
const myIcon3 = <Icons name="local-offer" size={20} color="#A0A0A0" />;
const myIcon4 = <Iconss name="mobile1" size={20} color="#A0A0A0" />;
const myIcon5 = <Icont name="mail" size={20} color="#A0A0A0" />;
const myIcon6 = <IconI name="people" size={20} color="#0F63F4" />;
const myIcon7 = <Icond name="airplane-landing" size={20} color="#0F63F4" />;
const myIcon8 = <Icond name="airplane-takeoff" size={20} color="#0F63F4" />;
const Payments = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{backgroundColor: '#FFFFFF',height:'100%'}}>
      <View style={style.header}>
          <View style={style.headerapp}>
            <TouchableOpacity style={{alignSelf:'center'}}
            onPress={()=>navigation.pop()}
            >
                <Iconss
                name="arrowleft"
                size={30}
                color="#fff"
                // style={{alignSelf: 'center'}
                />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                color: '#fff',
                fontWeight: '500',
                // textAlign: 'center',
                // marginLeft: wp('30%'),
                alignSelf: 'center',
              }}>
              Payment
            </Text>
            <TouchableOpacity
              style={{
                // backgroundColor: '#ffff',
                width: wp('9%'),
                height: hp('4%'),
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* <Icons name="tune" size={18} color="#0F63F4" /> */}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: wp('90%'),
            // height: hp('24%'),
            borderRadius: 12,
            alignSelf: 'center',
            marginTop: hp('-10%'),
            borderColor: '#00000017',
            borderWidth: 1,
            flexDirection: 'column',
            shadowColor: '#171717',
            shadowOffset: {width: 2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}>
          <View
            style={{
              width: wp('80%'),
              borderBottomColor: '#707070',
              alignSelf: 'center',
              borderBottomWidth: 0.2,
              marginTop: hp('3%'),
              paddingBottom: hp('2%'),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={{flexDirection: 'row'}}>
                <Icond
                  name="airplane-takeoff"
                  size={20}
                  color="#0F63F4"
                  style={{
                    marginLeft: wp('2%'),
                    alignSelf: 'flex-end',
                    marginRight: wp('2%'),
                  }}
                />

                <View>
                  <Text style={{fontSize: 11, color: 'grey'}}>From</Text>
                  <Text
                    style={{fontSize: 12, color: 'black', fontWeight: '500'}}>
                    New Delhi
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginLeft: wp('15%')}}>
                <Icond
                  name="airplane-landing"
                  size={20}
                  color="#0F63F4"
                  style={{
                    marginLeft: wp('2%'),
                    alignSelf: 'flex-end',
                    marginRight: wp('2%'),
                  }}
                />

                <View>
                  <Text style={{fontSize: 11, color: 'grey'}}>To</Text>
                  <Text
                    style={{fontSize: 12, color: 'black', fontWeight: '500'}}>
                    Mumbai
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              width: wp('80%'),
              borderBottomColor: '#707070',
              alignSelf: 'center',
              borderBottomWidth: 0.2,
              marginTop: hp('3%'),
              paddingBottom: hp('2%'),
              marginBottom:hp('2%'),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="calendar"
                  size={20}
                  color="#0F63F4"
                  style={{
                    marginLeft: wp('2%'),
                    alignSelf: 'flex-end',
                    marginRight: wp('2%'),
                  }}
                />

                <View>
                  <Text style={{fontSize: 11, color: 'grey'}}>
                    Journey Date
                  </Text>
                  <Text
                    style={{fontSize: 12, color: 'black', fontWeight: '500'}}>
                    27 Jan Fri,2023
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginLeft: wp('15%')}}>
                <IconI
                  name="people"
                  size={20}
                  color="#0F63F4"
                  style={{
                    marginLeft: wp('2%'),
                    alignSelf: 'flex-end',
                    marginRight: wp('2%'),
                  }}
                />

                <View>
                  <Text style={{fontSize: 11, color: 'grey'}}>
                    Number of Passenger
                  </Text>
                  <Text
                    style={{fontSize: 12, color: 'black', fontWeight: '500'}}>
                    4 Persons,Business
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{
            marginTop:30,
            marginBottom:20
        }}>
        <Text style={{fontSize:20,fontWeight:500,color:'#000',marginLeft:wp('5%'),fontWeight:'600'}}>Select Payment Method</Text>
        </View>
        <View style={{flexDirection:'row' ,borderBottomColor:'#939393',borderBottomWidth:0.2 ,height:hp('8%'),marginLeft:wp('3%')}}>
        <Icond
                  name="airplane-landing"
                  size={22}
                  color="#0F63F4"
                  style={{
                    marginLeft: wp('2%'),
                    alignSelf: 'center',
                    marginRight: wp('2%'),
                  }}
                />
                <Text style={{fontSize: 13, color: 'grey',alignSelf:'center'}}>
                    Debit card
                  </Text>
        </View>
        <View style={{flexDirection:'row' ,borderBottomColor:'#939393',borderBottomWidth:0.2 ,height:hp('8%'),marginLeft:wp('3%')}}>
        <Icond
                  name="airplane-landing"
                  size={22}
                  color="#0F63F4"
                  style={{
                    marginLeft: wp('2%'),
                    alignSelf: 'center',
                    marginRight: wp('2%'),
                  }}
                />
                <Text style={{fontSize: 13, color: 'grey',alignSelf:'center'}}>
                    Credit Card
                  </Text>
        </View>
        <View style={{flexDirection:'row' ,borderBottomColor:'#939393',borderBottomWidth:0.2 ,height:hp('8%'),marginLeft:wp('3%')}}>
        <Icond
                  name="airplane-landing"
                  size={22}
                  color="#0F63F4"
                  style={{
                    marginLeft: wp('2%'),
                    alignSelf: 'center',
                    marginRight: wp('2%'),
                  }}
                />
                <Text style={{fontSize: 13, color: 'grey',alignSelf:'center'}}>
                    UPI
                  </Text>
        </View>
        <View style={{flexDirection:'row' ,borderBottomColor:'#939393',borderBottomWidth:0.2 ,height:hp('8%'),marginLeft:wp('3%')}}>
        <Icond
                  name="airplane-landing"
                  size={22}
                  color="#0F63F4"
                  style={{
                    marginLeft: wp('2%'),
                    alignSelf: 'center',
                    marginRight: wp('2%'),
                  }}
                />
                <Text style={{fontSize: 13, color: 'grey',alignSelf:'center'}}>
                    Internet Banking
                  </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
    header: {
        // flex :1,
        backgroundColor: '#0759E2',
        width: wp('100%'),
        height: hp('20%'),
      },
      headerapp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginLeft: wp('2%'),
        marginTop: hp('2%'),
        padding:10,
        paddingTop:0
      },
  icon: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginLeft: wp('2%'),
  },

  inputtext: {
    width: wp('90%'),
    height: 50,
    borderRadius: 6,
    borderColor: '#DADADA',
    borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  chipContainer: {
    backgroundColor: '#ffff',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    width: wp('25%'),
    height: hp('4%'),
  },
  chipLabel: {
    fontSize: 12,
    color: '#0759E2',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Payments;
