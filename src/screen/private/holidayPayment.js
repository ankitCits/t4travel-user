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
const HolidayPayment = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
      <ScrollView contentContainerStyle={{backgroundColor: '#FFFFFF'}}>
        <View style={style.header}>
          <View style={style.headerapp}>
            <TouchableOpacity
            onPress={()=>navigation.pop()}
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
              Select Payments
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
            borderWidth: 1,
            flexDirection:'column'
          }}>
          <Text style={{fontSize:20,fontWeight:'500',color:'black',marginLeft:wp('5%'),marginTop:hp('3%')}}>Choose Payment</Text>
          
          <TouchableOpacity style={style.box}>
            <Image source={require('../../assets/icons/debit.png')} style={{width:30,height:30}}/>
            <Text style={{color:'#000',fontSize:12,fontWeight:'300',marginLeft:wp('5%')}}>Debit Card</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.box}>
            <Image source={require('../../assets/icons/creditcard.png')} style={{width:30,height:30}}/>
            <Text style={{color:'#000',fontSize:12,fontWeight:'300',marginLeft:wp('5%')}}>Credit Card</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.box}>
            <Image source={require('../../assets/icons/upi.png')} style={{width:30,height:30}}/>
            <Text style={{color:'#000',fontSize:12,fontWeight:'300',marginLeft:wp('5%')}}>UPI</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.box}>
            <Image source={require('../../assets/icons/banking.png')} style={{width:30,height:30}}/>
          <Text style={{color:'#000',fontSize:12,fontWeight:'300',marginLeft:wp('5%')}}>Internet Banking</Text>

          </TouchableOpacity>







        </View>

          <TouchableOpacity 
          onPress={()=>navigation.navigate("Drawer")}
          style={{width:wp('60%'),
          height:hp('5%'),
          backgroundColor:'#0759E2',
          borderRadius:5,
          alignSelf:'center',
          marginBottom:hp('2%'),
          marginTop:hp('5%'),
          justifyContent:'center',
          
          }}>
              <Text style={{color:'white',fontSize:14,textAlign:'center',fontWeight:'500'}}>Choose</Text>
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
  box :{
    flexDirection : 'row',
    borderColor:'#DADADA',
    borderBottomWidth:0.5,
    width:wp('80%'),
    alignSelf:'center',
    // justifyContent:'space-around',
    alignItems:'center',
    marginTop:hp('3%'),
    paddingBottom:hp('2%')
  }
});

export default HolidayPayment;
