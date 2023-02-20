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
import Icond from 'react-native-vector-icons/Entypo';
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
const HolidayPlanner = (props) => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
      <ScrollView contentContainerStyle={{backgroundColor: '#FFFFFF'}}>
        <View style={style.header}>
          <View style={style.headerapp}>
            <TouchableOpacity

          onPress={()=>{
            if(props.route.params){
              navigation.pop()
            }else{
              navigation.openDrawer()
            }
          }}
            >
                <Iconss name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                fontWeight: '500',
                textAlign: 'center',
                marginLeft: wp('25%'),
              }}>
              Holiday Planner
            </Text>
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
            shadowColor: '#171717',
            shadowOffset: {width: 2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
            borderColor: '#00000017',
            borderWidth: 0.5,
            flexDirection: 'column',
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
                <Text style={{fontSize: 11, color: 'grey'}}>Check-in</Text>
                <Text
                  style={{fontSize: 12, color: 'black', fontWeight: '500'}}>
                  2 Feb 23 thursday
                </Text>
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
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
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
                <Text style={{fontSize: 11, color: 'grey'}}>Check-in</Text>
                <Text
                  style={{fontSize: 12, color: 'black', fontWeight: '500'}}>
                  2 Feb 23 thursday
                </Text>
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
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icond
                name="chevron-down"
                size={18}
                color="#0F63F4"
                style={{
                  marginLeft: wp('2%'),
                  alignSelf: 'flex-end',
                  marginRight: wp('2%'),
                }}
              />

              <View>
                <Text style={{fontSize: 11, color: 'grey'}}>Country/City</Text>
                <Text
                  style={{fontSize: 12, color: 'black', fontWeight: '500'}}>
                  1 Room 2 Adults
                </Text>
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
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
            <IconI
                name="people"
                size={18}
                color="#0F63F4"
                style={{
                  marginLeft: wp('2%'),
                  alignSelf: 'flex-end',
                  marginRight: wp('2%'),
                }}
              />

              <View>
                <Text style={{fontSize: 11, color: 'grey'}}>No. of Rooms/Adults/Child</Text>
                <Text
                  style={{fontSize: 12, color: 'black', fontWeight: '500'}}>
                  1 Room 2 Adults
                </Text>
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
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icond
                name="chevron-down"
                size={18}
                color="#0F63F4"
                style={{
                  marginLeft: wp('2%'),
                  alignSelf: 'flex-end',
                  marginRight: wp('2%'),
                }}
              />

              <View>
                <Text style={{fontSize: 11, color: 'grey'}}>No. of Nights</Text>
                <Text
                  style={{fontSize: 12, color: 'black', fontWeight: '500'}}>
                  2 Nights
                </Text>
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
              flexDirection: 'row',
              justifyContent: 'space-between',
              // marginBottom: hp('2%'),
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icond
                name="chevron-down"
                size={18}
                color="#0F63F4"
                style={{
                  marginLeft: wp('2%'),
                  alignSelf: 'flex-end',
                  marginRight: wp('2%'),
                }}
              />

              <View>
                <Text style={{fontSize: 11, color: 'grey'}}>
                  Country of residence
                </Text>
                <Text
                  style={{fontSize: 12, color: 'black', fontWeight: '500'}}>
                  Canada 4
                </Text>
              </View>
            </View>
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
            alignItems:'center',
            justifyContent:'center'

          }}>
          <Text
            style={{
              color: 'grey',
              fontSize: 13,
              textAlign: 'center',
            //   marginTop: hp('1%'),
            //   marginLeft:wp('9%')
            }}>
            INVOICE
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 13,
              textAlign: 'center',
            //   marginTop: hp('1%'),
              marginLeft:wp('1%')
            }}>
            $10,000 CAD at $7,615.25
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:hp('8%'),marginLeft:wp('3%'),marginRight:wp('3%')}}>
        <View style={{marginLeft:5}}>
        <Text style={{color:'grey',fontSize:13}}>Rating:</Text>
        <Image source={require('../../assets/images/star.png')} />


        </View>

        <TouchableOpacity style={{backgroundColor:'#FF9500',width:wp('30%'),height:hp('4%'),borderRadius:5,justifyContent:'center',alignItems:'center'}}>
           <Text style={{color:'white',fontSize:12,textAlign:'center'}}>+ Add Destination</Text>
        </TouchableOpacity>

        </View>


        </View>

        <TouchableOpacity
          style={{
            width: wp('60%'),
            height: hp('5%'),
            backgroundColor: '#0759E2',
            borderRadius: 5,
            alignSelf: 'center',
            marginBottom: hp('2%'),
            marginTop: hp('-5%'),
            justifyContent:'center'
          }}
          onPress={()=>navigation.navigate("HolidayplannerList")}
          >
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              textAlign: 'center',
              fontWeight:'500',
            //   marginTop: hp('1%'),
            }}>
            Search
          </Text>
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
    justifyContent: 'flex-start',
    marginLeft: wp('2%'),
    marginTop: hp('2%'),
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

export default HolidayPlanner;
