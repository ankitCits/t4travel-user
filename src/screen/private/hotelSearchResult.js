import React, {useState} from 'react';
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
const img = require('../../assets/images/water.png');
const img1 = require('../../assets/images/home1.png');
const img2 = require('../../assets/images/star.png');

const HotelSearchResult = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();
  const data = [
    {
      image: img,
      image2: img2,
      name: 'Burj Al Arab',
      km: '7.5 kms from airport',
      dol: '$50.00',
      book: 'Book Now & Pay Later',
    },
    {
      image: img1,
      image2: img2,
      name: 'Burj Al Arab',
      km: '7.5 kms from airport',
      dol: '$50.00',
      book: 'Book Now & Pay Later',
    },
    {
      image: img,
      image2: img2,
      name: 'Burj Al Arab',
      km: '7.5 kms from airport',
      dol: '$50.00',
      book: 'Book Now & Pay Later',
    },
    {
      image: img1,
      image2: img2,
      name: 'Burj Al Arab',
      km: '7.5 kms from airport',
      dol: '$50.00',
      book: 'Book Now & Pay Later',
    },
  ];

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
              Hotel Rooms Details
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: hp('3%'),
            }}>
            <View style={style.container}>
              <Iconss name="search1" size={16} color="#DADADA" />
              <TextInput
                style={style.input}
                placeholder="Search..."
                placeholderTextColor="#DADADA"
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
            </View>
            <View
              style={{
                backgroundColor: '#ffff',
                width: wp('25%'),
                height: hp('5%'),
                marginTop: 10,
                paddingHorizontal: 10,

                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
                height: hp('5%'),
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#000',
                  marginRight: wp('2%'),
                }}>
                {' '}
                Sort By:
              </Text>
              <Icont name="chevron-down" size={16} color="#000" />
            </View>
          </View>
        </View>

        <FlatList
          style={{backgroundColor: '#fff'}}
          data={data}
          renderItem={({item}) => (
            <View
          style={{
            width: wp('94%'),
            height: hp('18%'),
            borderBottomColor: 'grey',
            borderBottomWidth: 0.2,
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Image
            source={item.image}
            style={{
              width: 100,
              height: 100,
              borderRadius: 5,
              alignSelf: 'center',

              alignItems: 'center',
            }}
          />
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: hp('3%'),
              }}>
              <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
                {item.name}
              </Text>
              <Image
                source={require('../../assets/images/star.png')}
                style={{
                  width: 45,
                  height: 7,
                  marginLeft: 5,
                }}
              />
            </View>
            <Text style={{fontSize: 11, color: '#DADADA'}}>
              {item.km}
            </Text>
            <Text style={{fontSize: 16, color: '#0F63F4', fontWeight: '500'}}>
              {item.dol}
            </Text>
            <Text style={{fontSize: 11, color: 'orange', marginTop: hp('4%')}}>
              {item.book}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#0F63F4',
              width: wp('16%'),
              height: hp('3%'),
              borderRadius: 3,
              justifyContent: 'center',
              alignSelf: 'flex-end',
              marginBottom: hp('2.5%'),
            }}
            onPress={()=>navigation.navigate("HotelSearchDetail")}
            >
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 14}}>
              View
            </Text>
          </TouchableOpacity>
        </View>
          )}
        />


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
  container: {
    marginTop: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ffff',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: hp('5%'),
    width: wp('65%'),
  },
  input: {
    height: 50,
    fontSize: 15,
    left:10
  },
});

export default HotelSearchResult;
