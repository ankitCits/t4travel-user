import React from 'react';
import {FlatList, StatusBar} from 'react-native';
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
import Iconss from 'react-native-vector-icons/AntDesign';
import Icont from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const icon1 = <Iconss name="delete" size={14} color="#707070" />;
const icon2 = <Icont name="pencil-square-o" size={14} color="#707070" />;
const icon3 = <Icont name="hand-o-up" size={14} color="#707070" />;
const icon4 = <Iconss name="reload1" size={14} color="#707070" />;
const img = require('../../assets/images/profile.jpg');

const myIcon = <Iconss name="delete" size={30} color="#900" />;
const Employee = () => {
  const navigation = useNavigation();
  const data = [
    {
      image: img,
      name: 'john smith',
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      role: 'HR',
    },
    {
      image: img,
      name: 'john smith',
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      role: 'Accountant',
    },
    {
      image: img,
      name: 'john smith',
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      role: 'Accountant',
    },
    {
      image: img,
      name: 'john smith',
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      role: 'HR',
    },
    {
      image: img,
      name: 'john smith',
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      role: 'Accountant',
    },
    {
      image: img,
      name: 'john smith',
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      role: 'Accountant',
    },
    {
      image: img,
      name: 'john smith',
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      role: 'HR',
    },
    {
      image: img,
      name: 'john smith',
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      role: 'Accountant',
    },
    {
      image: img,
      name: 'john smith',
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      role: 'Accountant',
    },
    {
      image: img,
      name: 'john smith',
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      role: 'HR',
    },
    {
      image: img,
      name: 'john smith',
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      role: 'Accountant',
    },
    {
      image: img,
      name: 'john smith',
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      role: 'Accountant',
    },
    {
      image: img,
      name: 'john smith',
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      role: 'HR',
    },
    {
      image: img,
      name: 'john smith',
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      role: 'Accountant',
    },
    {
      image: img,
      name: 'john smith',
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      role: 'Accountant',
    },
    {
      image: img,
      name: 'john smith',
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      role: 'HR',
    },
    {
      image: img,
      name: 'john smith',
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      role: 'Accountant',
    },
    {
      image: img,
      name: 'john smith',
      icon1: icon1,
      icon2: icon2,
      icon3: icon3,
      icon4: icon4,
      role: 'Accountant',
    },
  ];

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
    <StatusBar
      animated={true}
      backgroundColor="#fff"
      barStyle="dark-content"
    />
      <ScrollView contentContainerStyle={{backgroundColor: 'white',height:'100%'}}>
            <View style={style.header}>
                <View style={style.headerapp}>
                  <TouchableOpacity
                  onPress={()=>navigation.pop()}
                  >
                  <Iconss name="arrowleft" size={30} color="#fff" />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#fff',
                      fontWeight: '500',
                      textAlign: 'center',
                      marginLeft: wp('8%'),
                    }}>
                    Employee & Role Management
                  </Text>
                </View>
            </View>
        <View
          style={style.mainBox}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp('1%'),
              paddingBottom: hp('2%'),
              borderBottomColor: '#00000017',
              borderBottomWidth: 1,
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                marginTop: hp('1%'),
                marginLeft: wp('3%'),
                fontWeight:'500'
              }}>
              Name
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                marginTop: hp('1%'),
                marginLeft: wp('3%'),
                fontWeight:'500'
              }}>
              Role
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                marginTop: hp('1%'),
                marginRight: wp('5%'),
                fontWeight:'500'
              }}>
              Action
            </Text>
          </View>
          <FlatList
          showsVerticalScrollIndicator={false}
          style={{backgroundColor: '#F5F6FB'}}
          data={data}
          renderItem={({item}) => (
            <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp('2%'),
              paddingBottom: hp('2%'),
              borderBottomColor: '#00000017',
              borderBottomWidth: 1,
            }}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Image
                source={item.image}
                style={{
                  width: 22,
                  height: 22,
                  // borderColor: 'white',
                  // borderWidth: 3,
                  borderRadius: 17,
                  marginLeft: wp('2%'),
                  // alignSelf: 'center',
                  // marginTop: hp('-8%'),
                }}
              />
              <Text
                style={{
                  color: '#000',
                  // fontWeight: 'bold',
                  fontSize: 12,
                  marginLeft: wp('1.8%'),
                  marginTop:hp('0.4%')
                }}>
                {item.name}
              </Text>
            </View>
            <Text style={{color: '#019123', fontSize: 12,textAlign:'left'}}>
              {item.role}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: wp('20%'),
                marginRight: wp('1%'),
                alignContent: 'center',
              }}>
              {item.icon1}
              {item.icon2}
              {item.icon3}
              {item.icon4}
            </View>
          </View>
          )}
        />

        </View>
            {/* <View style={{marginBottom:500}}>
            </View> */}

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
    alignItems:'center'
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
  mainBox:{
    backgroundColor: 'white',
    width: wp('96%'),
    // height: hp('100%'),
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: hp('-10%'),
    marginBottom: hp('25%'),
    elevation: 5,
    shadowColor: '#00000017',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowRadius: 6,
    borderColor: '#00000017',
    borderWidth: 1,
  }
});

export default Employee;
