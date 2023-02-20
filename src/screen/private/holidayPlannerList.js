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
import { useNavigation } from '@react-navigation/native';

const HolidayplannerList = () => {
    const navigation = useNavigation();
    const [selectItem, setSelectItem] = useState(0)
  const [searchTerm, setSearchTerm] = useState('');
  const data = [
    {
      image: img,
      image2: img2,
      name: 'Burj Al Arab',
      km: 'United Arab Emirates',
      dol: '$50.00',
      book: 'More Details',
    },
    {
      image: img1,
      image2: img2,
      name: 'Burj Al Arab',
      km: 'United Arab Emirates',
      dol: '$50.00',
      book: 'More Details',
    },
    {
      image: img,
      image2: img2,
      name: 'Burj Al Arab',
      km: 'United Arab Emirates',
      dol: '$50.00',
      book: 'More Details',
    },
    {
      image: img1,
      image2: img2,
      name: 'Burj Al Arab',
      km: 'United Arab Emirates',
      dol: '$50.00',
      book: 'More Details',
    },
  ];
  const data1 = [
    {id: '1', title: 'Hotel Transfer'},
    {id: '2', title: 'Cancellation'},
    {id: '3', title: 'Add to Cart'},
    {id: '4', title: 'Room Type'},
    {id: '5', title: 'No of Rooms'},
    {id: '6', title: 'Total Amount'},

  ];

  console.log("ITEM_IN_HOTEL_PLANNER_LIST",selectItem)
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
                Hotel Planner Listing
                </Text>
                <TouchableOpacity
                style={{
                    // backgroundColor: '#ffff',
                    // width: wp('9%'),
                    height: hp('4%'),
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                {/* <Icons name="tune" size={18} color="#0F63F4" /> */}
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
          style={{backgroundColor: '#F5F6FB'}}
          data={data}
          renderItem={({item,index}) => (
            <View 
            style={{

                borderBottomWidth: 0.2,
                width: wp('100%'),
                height:selectItem == index ? hp('25%') :hp('19%') ,
                borderBottomColor: 'grey',
                alignSelf: 'center',
            }}
            >
                <TouchableOpacity
                onPress={()=>setSelectItem(index)}
                style={{
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    height: hp('19%'),
                }}>
                <Image
                    source={item.image}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 5,
                        alignSelf: 'center',
        
                        // alignItems: 'center',
                    }}
                />
                <View style={{marginLeft:wp('2%'),justifyContent:'center'}}>
                    <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // alignSelf:'center'
                        // marginTop: hp('3%'),
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
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop:5,
                        marginBottom:5

                    }}>
                    <IconI name="location-sharp" size={12} color="#0F63F4" style={{marginLeft:wp('-7%')}} />
                    <Text style={{fontSize: 10, color: '#707070'}}>
                    {item.km}
                    </Text>

                    </View>

                    <Text style={{fontSize: 16, color: '#0F63F4', fontWeight: '600'}}>
                    {item.dol}
                    </Text>
                    <TouchableOpacity>
                        <Text style={{fontSize: 11, color: '#0F63F4', marginTop: hp('4%'),textDecorationLine:'underline'}}>
                        {item.book}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                onPress={()=>navigation.navigate("HotelCardQuatation")}
                    style={{
                    backgroundColor: '#0F63F4',
                    width: wp('20%'),
                    height: hp('3.5%'),
                    borderRadius: 3,
                    justifyContent: 'center',
                    alignSelf: 'flex-end',
                    marginBottom: hp('2.5%'),
                    }}>
                    <Text style={{color: '#fff', textAlign: 'center', fontSize: 11}}>
                    Availability
                    </Text>
                </TouchableOpacity>
                </TouchableOpacity>
          <View >
          {selectItem == index ?
                                    <FlatList
                                    data={data1}
                                    keyExtractor={item => item.id}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({item}) => (
                                    <TouchableOpacity
                                    style={{
                                    // borderColor: 'grey',
                                    // width: wp('94%'),
                                    paddingLeft: wp('3.5%'),
                                    paddingRight: wp('3.5%'),
                                    // borderWidth: 1,
                                    borderRadius: 25,
                                    height: hp('4%'),
                                    alignSelf: 'center',
                                    marginTop: hp('0%'),
                                    alignContent: 'center',
                                    flexDirection: 'row',
                                    marginLeft: wp('2.5%'),
                                    marginRight: wp('0.5%'),
                                    backgroundColor:'#E3EDFF'
                                    }}>
                                        <Text
                                        style={{
                                        color: 'black',
                                        fontSize: 11,
                                        fontWeight: '300',
                                        textAlign: 'center',
                                        alignSelf: 'center',
                                        }}>
                                            {item.title}
                                        </Text>
                                    </TouchableOpacity>
                                    )}
                            />
                        :
                        null
                }

          </View>


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

export default HolidayplannerList;
