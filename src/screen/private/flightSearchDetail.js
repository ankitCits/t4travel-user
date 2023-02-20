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
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icond from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconss from 'react-native-vector-icons/AntDesign';
import Icont from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
const myIcon = <Icon name="calendar" size={18} color="#A0A0A0" />;
const myIcon1 = <Icons name="keyboard-arrow-down" size={18} color="#000" />;
const myIcon2 = <Icont name="dollar-sign" size={18} color="#A0A0A0" />;
const myIcon3 = <Icons name="local-offer" size={18} color="#A0A0A0" />;
const myIcon4 = <Iconss name="mobile1" size={18} color="#A0A0A0" />;
const myIcon5 = <Icont name="mail" size={18} color="#A0A0A0" />;
const FlightSearchDeatil = () => {
    const navigation = useNavigation();
  const data = [
    {
      month: 'Jan',
      year: '2022',
      dowload: 'Download',
    },
    {
      month: 'Feb',
      year: '2022',
      dowload: 'Download',
    },
    {
      month: 'Mar',
      year: '2022',
      dowload: 'Download',
    },
    {
      month: 'Apr',
      year: '2022',
      dowload: 'Download',
    },
    {
      month: 'May',
      year: '2022',
      dowload: 'Download',
    },
    {
      month: 'Jun',
      year: '2022',
      dowload: 'Download',
    },
    {
      month: 'Jul',
      year: '2022',
      dowload: 'Download',
    },
    {
      month: 'Aug',
      year: '2022',
      dowload: 'Download',
    },
    {
      month: 'Sep',
      year: '2022',
      dowload: 'Download',
    },
    {
      month: 'Oct',
      year: '2022',
      dowload: 'Download',
    },
    {
      month: 'Nov',
      year: '2022',
      dowload: 'Download',
    },
    {
      month: 'Dec',
      year: '2022',
      dowload: 'Download',
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{backgroundColor: '#FFFFFF'}}>
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
              Flight Details
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
            marginBottom: hp('2%'),
            shadowRadius: 6,
            borderColor: '#00000017',
            borderWidth: 1,
            flexDirection:'column',
            shadowColor: '#171717',
            shadowOffset: {width: 2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp('2%'),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginLeft: wp('3%'),
              }}>
              <Icons name="flight" size={18} color="#A0A0A0" />
              <Text
                style={{
                  fontSize: 14,
                  color: '#A0A0A0',
                  // fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: wp('2%'),
                }}>
                Flight Name :
              </Text>
            </View>

          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp('2%'),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginLeft: wp('3%'),
              }}>
              <Icons name="access-time" size={18} color="#A0A0A0" />
              <Text
                style={{
                  fontSize: 14,
                  color: '#A0A0A0',
                  // fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: wp('2%'),
                }}>
              Duration of Travel :
              </Text>
            </View>

          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp('2%'),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginLeft: wp('3%'),
              }}>
              <Icons name="access-time" size={18} color="#A0A0A0" />
              <Text
                style={{
                  fontSize: 14,
                  color: '#A0A0A0',
                  // fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: wp('2%'),
                }}>
                Arrival Time :
              </Text>
            </View>

          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp('2%'),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginLeft: wp('3%'),
              }}>
             <Icons name="access-time" size={18} color="#A0A0A0" />
              <Text
                style={{
                  fontSize: 14,
                  color: '#A0A0A0',
                  // fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: wp('2%'),
                }}>
                Departure Time :
              </Text>
            </View>

          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp('2%'),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginLeft: wp('3%'),
              }}>
              <Icont name="dollar-sign" size={18} color="#A0A0A0" />
              <Text
                style={{
                  fontSize: 14,
                  color: '#A0A0A0',
                  // fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: wp('2%'),
                }}>
                Price/Cost :
              </Text>
            </View>

          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp('2%'),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginLeft: wp('3%'),
              }}>
              <Icons name="local-offer" size={18} color="#A0A0A0" />
              <Text
                style={{
                  fontSize: 14,
                  color: '#A0A0A0',
                  // fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: wp('2%'),
                }}>
                Offers :
              </Text>
            </View>

          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:wp('5%'),marginRight:wp('10%'),marginTop:hp('2.5%'),paddingBottom:hp('2.5%'),borderBottomWidth:0.2,borderColor:'grey'}}>
          <Text style={{fontSize:12,fontWeight:'500',color:'black'}}>Trip to Destination:</Text>
          <Text style={{fontSize:12,fontWeight:'500',color:'black'}}>Type of Class:</Text>

          </View>



          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp('2%'),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginLeft: wp('3%'),
              }}>
              <Iconss name="mobile1" size={18} color="#A0A0A0" />
              <Text
                style={{
                  fontSize: 14,
                  color: '#A0A0A0',
                  // fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: wp('2%'),
                }}>
                 GST Number :
              </Text>
            </View>

          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp('2%'),
              marginBottom:hp('3%')
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginLeft: wp('3%'),
              }}>
              <Icont name="mail" size={18} color="#A0A0A0" />
              <Text
                style={{
                  fontSize: 14,
                  color: '#A0A0A0',
                  // fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: wp('2%'),
                }}>
                Contact Details :
              </Text>
            </View>

          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            height: hp('8%'),
            justifyContent: 'space-between',
            paddingLeft: wp('3%'),
            paddingRight: wp('3%'),
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#0759E2',
              fontSize: 18,
              textAlign: 'center',
              fontWeight: '600',
            }}>
            Important Information
          </Text>


        </View>

        <View
          style={{
            backgroundColor: 'white',
            width: wp('90%'),
            // height: hp('24%'),
            borderRadius: 12,
            alignSelf: 'center',

            marginBottom: hp('2%'),
            elevation: 5,
            borderColor: '#00000017',
            borderWidth: 1,
            flexDirection:'column',
            shadowColor: '#171717',
            shadowOffset: {width: 2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}>
          <View style={{width:wp('90%'),justifyContent:'center',padding:12}}>
            <Text style={{color:'black',fontSize:16,fontWeight:'600',marginBottom:hp('1%')}}>Baggage Policy</Text>
            <Text style={{color:'#A0A0A0',fontSize:10,}}>You’re allowed to carry on one bag and one personal item (weight and size limits apply). The bag should be stowed in the overhead compartment and your small personal item should be stowed under your seat. 1 A golf bag can be substituted for one checked bag. Weight limits apply.</Text>
          </View>
          <View style={{width:wp('90%'),justifyContent:'center',padding:12}}>
            <Text style={{color:'black',fontSize:16,fontWeight:'600',marginBottom:hp('1%')}}>Refund Policy</Text>
            <Text style={{color:'#A0A0A0',fontSize:10,}}>You’re allowed to carry on one bag and one personal item (weight and size limits apply). The bag should be stowed in the overhead compartment and your small personal item should be stowed under your seat. 1 A golf bag can be substituted for one checked bag. Weight limits apply.</Text>
          </View>
          <View style={{width:wp('90%'),justifyContent:'center',padding:12}}>
            <Text style={{color:'black',fontSize:16,fontWeight:'600',marginBottom:hp('1%')}}>Offers & Promo Class</Text>
            <Text style={{color:'#A0A0A0',fontSize:10,}}>You’re allowed to carry on one bag and one personal item (weight and size limits apply). The bag should be stowed in the overhead compartment and your small personal item should be stowed under your seat. 1 A golf bag can be substituted for one checked bag. Weight limits apply.</Text>
          </View>
          <View style={{width:wp('90%'),justifyContent:'center',padding:12}}>
            <Text style={{color:'black',fontSize:16,fontWeight:'600',marginBottom:hp('1%')}}>Traveller Details</Text>
            <Text style={{color:'#A0A0A0',fontSize:10,}}>You’re allowed to carry on one bag and one personal item (weight and size limits apply). The bag should be stowed in the overhead compartment and your small personal item should be stowed under your seat. 1 A golf bag can be substituted for one checked bag. Weight limits apply.</Text>
          </View>

          </View>
          <TouchableOpacity 
          onPress={()=>navigation.navigate("Payments")}
          style={{width:wp('60%'),height:hp('5%'),backgroundColor:'#0759E2',borderRadius:5,alignSelf:'center',marginBottom:hp('5%'),marginTop:hp('5%'),justifyContent:'center'}}>
              <Text style={{color:'white',fontSize:14,textAlign:'center',fontWeight:'500'}}>CONTINUE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:wp('90%'),height:hp('5%'),backgroundColor:'#E3EDFF',borderRadius:5,alignSelf:'center',marginBottom:hp('2%'),justifyContent:'space-between',flexDirection:'row',alignItems:'center',paddingRight:wp('3%')}}>
              <Text style={{color:'black',fontSize:12,marginLeft:wp('3%'),fontWeight:'600'}}>Seat & Meal</Text>
              <Icons name="keyboard-arrow-down" size={18} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={{width:wp('90%'),height:hp('5%'),backgroundColor:'#E3EDFF',borderRadius:5,alignSelf:'center',marginBottom:hp('2%'),justifyContent:'space-between',flexDirection:'row',alignItems:'center',paddingRight:wp('3%')}}>
              <Text style={{color:'black',fontSize:12,marginLeft:wp('3%'),fontWeight:'600'}}>Add Ons</Text>
              <Icons name="keyboard-arrow-down" size={18} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={{width:wp('60%'),height:hp('5%'),backgroundColor:'#00000029',borderRadius:5,alignSelf:'center',marginBottom:hp('2%'),justifyContent:'center'}}>
              <Text style={{color:'black',fontSize:14,textAlign:'center',fontWeight:'500'}}>Skip</Text>
          </TouchableOpacity>



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

export default FlightSearchDeatil;
