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
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icond from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconss from 'react-native-vector-icons/AntDesign';
import Icont from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
const myIcon = <IconI name="airplane-sharp" size={20} color="#0F63F4" />;
const myIcon1 = <Icons name="keyboard-arrow-down" size={20} color="#000" />;
const myIcon2 = <Icon name="calendar" size={20} color="#0F63F4" />;
const myIcon3 = <Icons name="local-offer" size={20} color="#A0A0A0" />;
const myIcon4 = <Iconss name="mobile1" size={20} color="#A0A0A0" />;
const myIcon5 = <Icont name="mail" size={20} color="#A0A0A0" />;
const myIcon6 = <IconI name="people" size={20} color="#0F63F4" />;
const FlightSearchResult = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
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
                fontSize: 16,
                color: '#fff',
                fontWeight: '500',
                // textAlign: 'center',
                // marginLeft: wp('30%'),
                alignSelf: 'center',
              }}>
              Flight Search
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#ffff',
                width: wp('9%'),
                height: hp('4%'),
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icons name="tune" size={18} color="#0F63F4" />
            </TouchableOpacity>
          </View>
        </View>



        <TouchableOpacity
        onPress={()=>navigation.navigate("FlightSearchDeatil")}
          style={{
            backgroundColor: 'white',
            width: wp('90%'),
            // height: hp('24%'),
            borderRadius: 12,
            alignSelf: 'center',
            marginTop: hp('-10%'),
            marginBottom: hp('2%'),
            borderColor: '#00000017',
            borderWidth: 1,
            flexDirection: 'column',
            shadowColor: '#171717',
            shadowOffset: {width: 2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,

          }}>
          <View style={{flexDirection: 'row',justifyContent:'space-around',marginTop:hp('2%'),borderColor:'#DADADA',borderBottomWidth:1,width:wp('80%'),alignSelf:'center',paddingBottom:hp('2.5%')}}>
            <View>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '700',
                  color: '#000',
                //   fontFamily: 'Roboto',
                }}>
                2:30
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '500',
                  color: 'grey',
                //   fontFamily: 'Roboto',
                }}>
                New Delhi
              </Text>
            </View>
            <View>
            <View style={{flexDirection:'column',alignSelf:'center',justifyContent:'center',alignItems:'center',marginTop:hp('2%')}}>
            <IconI name="airplane-sharp" size={20} color="#DADADA" style={{marginTop:hp('1%'),position:'absolute',}}/>
            <View style={{flexDirection:'row',position:'relative'}}>
              <View style={{backgroundColor:'#000',width:6,height:6,borderRadius:3}}>

              </View>
              <View style={{backgroundColor:'#DADADA',width:wp('40%'),height:1,alignSelf:'center'}}>

              </View>
              <View style={{backgroundColor:'#000',width:6,height:6,borderRadius:3}}>

              </View>

            </View>

            </View>
            <Text style={{fontSize:11,color:'grey',textAlign:'center',marginTop:hp('1%')}}>02 h 30 m</Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '700',
                  color: '#000',
                //   fontFamily: 'Roboto',
                }}>
                2:30
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '500',
                  color: 'grey',
                //   fontFamily: 'Roboto',
                }}>
                New Delhi
              </Text>
            </View>
          </View>



          <View style={{borderColor:"#DADADA",width:wp('80%'),borderBottomWidth:1,alignSelf:'center',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:hp('4%'),paddingBottom:hp('3%')}}>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
           <View style={{backgroundColor :"#032444",width:28,height:28,borderRadius:5,alignSelf:'center',alignItems:'center',justifyContent:'center',marginLeft:wp('2%')}}>
           <Icon name="plane" size={18} color="#fff" />

           </View>
           <Text style={{fontSize:18,fontWeight:'700',color:'#000',marginLeft:wp('2%')}}> IndiGo</Text>

          </View>
          <Text style={{fontSize:20,fontWeight:'700',color:'#0F63F4',marginLeft:wp('3%')}}>$50.00</Text>

          </View>
          <TouchableOpacity
          style={{
            width: wp('80%'),
            height: hp('5%'),
            backgroundColor: '#0759E233',
            borderRadius: 5,
            alignSelf: 'center',
            marginBottom: hp('2%'),
            marginTop: hp('5%'),
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center'
          }}>
          <View style={{backgroundColor:'#0F63F4',width:10,height:10,borderRadius:6,marginLeft:wp('5%')}}>

          </View>
          <Text
            style={{
              color: '#000',
              fontSize: 13,
              marginLeft:10,
              fontWeight:'600'

            }}>
            Get $ 50 off using T4TRAVEL
          </Text>
        </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: wp('90%'),
            // height: hp('24%'),
            borderRadius: 12,
            alignSelf: 'center',
            // marginTop: hp('-10%'),
            marginBottom: hp('2%'),
            borderColor: '#00000017',
            borderWidth: 1,
            flexDirection: 'column',
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,

          }}>
          <View style={{flexDirection: 'row',justifyContent:'space-around',marginTop:hp('2%'),borderColor:'#DADADA',borderBottomWidth:1,width:wp('80%'),alignSelf:'center',paddingBottom:hp('2.5%')}}>
            <View>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '700',
                  color: '#000',
                //   fontFamily: 'Roboto',
                }}>
                2:30
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '500',
                  color: 'grey',
                //   fontFamily: 'Roboto',
                }}>
                New Delhi
              </Text>
            </View>
            <View>
            <View style={{flexDirection:'column',alignSelf:'center',justifyContent:'center',alignItems:'center',marginTop:hp('2%')}}>
            <IconI name="airplane-sharp" size={20} color="#DADADA" style={{marginTop:hp('1%'),position:'absolute',}}/>
            <View style={{flexDirection:'row',position:'relative'}}>
              <View style={{backgroundColor:'#000',width:6,height:6,borderRadius:3}}>

              </View>
              <View style={{backgroundColor:'#DADADA',width:wp('40%'),height:1,alignSelf:'center'}}>

              </View>
              <View style={{backgroundColor:'#000',width:6,height:6,borderRadius:3}}>

              </View>

            </View>

            </View>
            <Text style={{fontSize:11,color:'grey',textAlign:'center',marginTop:hp('1%')}}>02 h 30 m</Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '700',
                  color: '#000',
                //   fontFamily: 'Roboto',
                }}>
                2:30
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: '500',
                  color: 'grey',
                //   fontFamily: 'Roboto',
                }}>
                New Delhi
              </Text>
            </View>
          </View>



          <View style={{borderColor:"#DADADA",width:wp('80%'),borderBottomWidth:1,alignSelf:'center',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:hp('4%'),paddingBottom:hp('3%'),}}>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
           <View style={{backgroundColor :"#032444",width:28,height:28,borderRadius:5,alignSelf:'center',alignItems:'center',justifyContent:'center',marginLeft:wp('2%')}}>
           <Icon name="plane" size={18} color="#fff" />

           </View>
           <Text style={{fontSize:18,fontWeight:'700',color:'#000',marginLeft:wp('2%')}}> SpiceJet</Text>

          </View>
          <Text style={{fontSize:20,fontWeight:'700',color:'#0F63F4',marginLeft:wp('3%')}}>$50.00</Text>

          </View>
          <TouchableOpacity
          style={{
            width: wp('80%'),
            height: hp('5%'),
            backgroundColor: '#0759E233',
            borderRadius: 5,
            alignSelf: 'center',
            marginBottom: hp('2%'),
            marginTop: hp('5%'),
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center'
          }}>
          <View style={{backgroundColor:'#0F63F4',width:10,height:10,borderRadius:6,marginLeft:wp('5%')}}>

          </View>
          <Text
            style={{
              color: '#000',
              fontSize: 13,
              marginLeft:10,
              fontWeight:'600'

            }}>
            Get $ 50 off using T4TRAVEL
          </Text>
        </TouchableOpacity>
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

export default FlightSearchResult;
