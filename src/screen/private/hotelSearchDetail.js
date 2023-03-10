import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import IconI from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icond from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconss from 'react-native-vector-icons/AntDesign';
import Icont from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';
import { searchHotelDetail } from '../../redux/actions/hotel';
import StarRating from 'react-native-star-rating';
const myIcon = <IconI name="location-sharp" size={20} color="#0F63F4" />;
const myIcon1 = <Icons name="keyboard-arrow-down" size={20} color="#000" />;
const myIcon2 = <Icon name="wifi" size={20} color="#0F63F4" />;
const myIcon7 = <Icon name="car" size={20} color="#0F63F4" />;
const myIcon3 = <Icons name="local-offer" size={20} color="#A0A0A0" />;
const myIcon4 = <Iconss name="mobile1" size={20} color="#A0A0A0" />;
const myIcon5 = <Icond name="food-fork-drink" size={20} color="#A0A0A0" />;
const myIcon6 = <IconI name="people" size={20} color="#0F63F4" />;
const img = require('../../assets/images/water.png');
const img1 = require('../../assets/images/home1.png');
const img2 = require('../../assets/images/star.png');
const img3 = require('../../assets/images/beds.png');

const HotelSearchDetail = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);
  const [loader, setLoader] = useState(true)
  const [hotelDetail, sethotelDetail] = useState(null)
  const navigation = useNavigation();

  const handleRadioClick = value => {
    setSelectedValue(value);
  };
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
  const data1 = [
    { id: '1', title: 'Overview' },
    { id: '2', title: 'Rooms' },
    { id: '3', title: 'Location' },
    { id: '4', title: 'Property Rules' },
    { id: '5', title: 'User Review' },
    { id: '6', title: 'Similar Properties' },
    { id: '7', title: 'Amenities' },
  ];
  const data2 = [
    { id: '1', title: 'Superior Room', image: img3 },
    { id: '2', title: 'Superior Double Room', image: img3 },
    { id: '3', title: 'Superior Double Room', image: img3 },
    { id: '4', title: 'Comfortable Double Room ', image: img3 },
  ];

  const data3 = [
    { id: '1', title: 'Burj Al Arab', image: img2 },
    { id: '2', title: 'Burj Al Arab', image: img2 },
    { id: '3', title: 'Burj Al Arab', image: img2 },
    { id: '4', title: 'Burj Al Arab', image: img2 },
  ];
  const data4 = [
    { id: '1', title: 'WIFI', image: myIcon2 },
    { id: '2', title: 'Parking', image: myIcon7 },
    { id: '3', title: 'Resturant', image: myIcon5 },
    { id: '4', title: 'WIFI', image: myIcon2 },
    { id: '5', title: 'Parking', image: myIcon7 },
    { id: '6', title: 'Resturant', image: myIcon5 },
    { id: '7', title: 'AC', image: myIcon2 },
  ];



  useEffect(() => {
    fetchHotelDetail()
  }, [fetchHotelDetail])


  const fetchHotelDetail = async () => {

    console.log("PROPS_IN_HOTEL_SEARCH_DETAIL :", props.route.params)

    let Payload = props.route.params
    let hotelDeatilReq = await props.dispatch(searchHotelDetail(Payload))
    if (hotelDeatilReq.status_code == 1) {
      if (hotelDeatilReq.result) {
        console.log("HOTEL_DEATIL_RESULT :", hotelDeatilReq.result.HotelInfoResult.HotelDetails)
        sethotelDetail(hotelDeatilReq.result.HotelInfoResult.HotelDetails)
        // setTraceId(hotelDeatilReq.result.HotelSearchResult.TraceId)
        // setHotelData(hotelDeatilReq.result.HotelSearchResult.HotelResults)
      }
      setLoader(false)
    } else {
      navigation.pop()
      setLoader(false)
    }


  }

  console.log("PROPS_IN_HOTEL_DETAIL :", props.route.params)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ backgroundColor: '#FFFFFF' }}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.header}>
          <View style={style.headerapp}>
            <TouchableOpacity
              onPress={() => navigation.pop()}
            >
              <Iconss
                name="arrowleft"
                size={30}
                color="#fff"
                style={{ marginTop: hp('2%'), marginLeft: wp('2%') }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                fontWeight: '500',
                textAlign: 'center',
                marginLeft: wp('20%'),
                marginTop: hp('2.5%'),
                alignItems: 'center',
              }}>
              Hotels Room Details
            </Text>
          </View>
          <FlatList
            data={data1}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            horizontal={true}
            // showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  borderColor: 'grey',
                  // width: wp('94%'),
                  paddingLeft: wp('3.5%'),
                  paddingRight: wp('3.5%'),
                  // borderWidth: 1,
                  borderRadius: 4,
                  height: hp('4%'),
                  alignSelf: 'center',
                  marginTop: hp('2.5%'),
                  alignContent: 'center',
                  flexDirection: 'row',
                  marginLeft: wp('2.5%'),
                  marginRight: wp('0.5%'),
                  backgroundColor: '#0e63f4'
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: '400',
                    textAlign: 'center',
                    alignSelf: 'center',
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />
          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            //   marginTop: hp('3%'),
            }}>
            <View style={style.container}>
              <Iconss name="search1" size={16} color="#DADADA" />
              <TextInput
                style={style.input}
                placeholder="Search"
                placeholderTextColor="#DADADA"
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
            </View>
          </View> */}
        </View>
        {/* <TouchableOpacity>
            <Text
            style={{
                fontWeight: '500',
                color: '#0F63F4',
                textAlign: 'right',
                marginRight: wp('5%'),
                marginTop: hp('2%'),
                fontSize:13
            }}>
            See All
            </Text>
        </TouchableOpacity> */}

        {loader ?
          <View style={{ marginTop: '50%', }}>
            <ActivityIndicator size="small" color={"#0F63F4"} />
          </View>
          :
          <>
            <View style={{ alignSelf: 'center', width: wp('96%'), borderRadius: 10 }}>
              <ImageBackground
                imageStyle={{ borderRadius: 6, opacity: 0.8,borderWidth:0.2 }}
                // source={require('../../assets/images/placee.png')}
                // uri={props.route.params.item.HotelPicture}
                source={{
                  uri: props.route.params.item.HotelPicture,
                }}
                style={{
                  height: hp('26%'),
                  width: wp('96%'),
                  //   borderRadius: 10,
                  marginTop: hp('4%'),
                  alignSelf: 'center',
                }}>
                <Image
                  source={require('../../assets/images/Map.png')}
                  style={{
                    position: 'relative',
                    width: wp('20%'),
                    height: hp('5%'),
                    borderRadius: 2,
                    alignSelf: 'flex-end',
                    top: hp('17%'),
                    marginRight: wp('2%'),
                  }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textAlign: 'right',
                    top: hp('13%'),
                    marginRight: wp('7.5%'),
                  }}>
                  Map
                </Text>
              </ImageBackground>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%', width: 260 }}>
                <View>
                  <Text style={{ fontSize: 17, color: 'black', fontWeight: '600' }}>
                    {props.route.params.item.HotelName}
                  </Text>
                  <Text style={{ fontSize: 10, color: '#707070', fontWeight: '400', top: 5 }}>
                    {props.route.params.item.HotelAddress}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{ color: '#0F63F4', fontSize: 17, fontWeight: '600', top: 5 }}>
                  {props.route.params.item.Price.CurrencyCode + ' ' + props.route.params.item.Price.PublishedPrice}

                </Text>


                <View style={{
                  // justifyContent:'space-between',
                  // paddingTop:30,
                  // paddingBottom:30,
                  justifyContent: 'center'

                }}>
                  <TouchableOpacity style={{ marginLeft: 5, bottom: '70%' }}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={props.route.params.item.StarRating}
                      starStyle={{ color: '#0F63F4', marginRight: 6 }}
                      starSize={10}
                    // emptyStar={'ios-star-outline'}
                    // fullStar={'ios-star'}
                    // halfStar={'ios-star-half'}
                    // iconSet={'Ionicons'}
                    // selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#0F63F4',
                      width: wp('22%'),
                      height: hp('4%'),
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 3,
                    }}
                    onPress={() => navigation.navigate("HotelCheckout",props.route.params)}
                  >
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 12 }}>
                      Book Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {props.route.params.item.HotelDescription ?
              <View
                style={{
                  width: wp('96%'),
                  margin: 10,
                  borderColor: '#707070',
                  borderBottomWidth: 0.2,
                  borderTopWidth: 0.3,
                  // alignSelf: 'center',
                  paddingBottom: hp('3%'),
                  // alignSelf:'center',
                  // alignItems:'center'
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '600',
                    //   fontFamily: 'Roboto',
                    color: 'black',
                    marginTop: hp('2%'),
                  }}>
                  Overview
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    //   fontFamily: 'Roboto',
                    color: '#707070',
                    marginTop: hp('1%'),
                    lineHeight: 18,
                  }}>
                  {props.route.params.item.HotelDescription}
                  {/* Here's an overview of the trial and the scene surrounding it as
                          hundreds of lawyers and their support staff, reporters and true
                          crime enthusiasts are expected to swell Colleton County's population
                          of 38,000 in the rural, southern part of the state. */}
                </Text>
              </View>
              :
              null
            }


            <View style={{ width: wp('98%'), alignSelf: 'center' }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  //   fontFamily: 'Roboto',
                  color: 'black',
                  marginTop: hp('1%'),
                  marginLeft: wp('2.5%'),
                }}>
                Select Rooms
              </Text>
              <Image
                source={{ uri: hotelDetail.Images[0] }}
                style={{
                  width: wp('96%'),
                  alignSelf: 'center',
                  height: hp('16%'),
                  borderRadius: 5,
                  marginTop: hp('2%'),
                }}
              />
              <FlatList
                style={{ backgroundColor: '#fff' }}
                data={hotelDetail.Images}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginTop: hp('1%'),
                      padding: 10,
                      paddingBottom: 0
                    }}>
                    <Image
                      source={{ uri: item }}
                      style={{ height: hp('10%'), width: wp('30%'), borderRadius: 5 }}
                      resizeMode="cover"
                    />
                  </View>
                )}
              />
            </View>

            <View
              style={{
                borderColor: '#707070',
                width: wp('96%'),
                borderRadius: 5,
                borderColor: '#00000017',
                marginTop: hp('3%'),
                borderWidth: 1,
                alignSelf: 'center',
                shadowColor: '#171717',
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                // pa:5
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 10,
                  marginTop: 10
                }}>
                <Text style={{ fontSize: 17, color: 'black', fontWeight: '400' }}>
                  Type of rooms
                </Text>
                <Text style={{ fontSize: 12, color: '#0F63F4', fontWeight: '500' }}>
                  See All
                </Text>
              </View>
              <FlatList
                data={data2}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      borderColor: 'grey',
                      // width: wp('94%'),
                      paddingLeft: wp('3.5%'),
                      paddingRight: wp('3.5%'),
                      // borderWidth: 1,
                      // borderRadius: 4,
                      height: hp('4.5%'),
                      alignSelf: 'center',
                      marginTop: hp('1%'),
                      alignContent: 'center',
                      flexDirection: 'row',
                      //   marginLeft: wp('2.5%'),
                      marginRight: wp('0.5%'),
                    }}>
                    <Image
                      source={item.image}
                      style={{
                        height: 20,
                        width: 20,
                        alignSelf: 'center',
                        marginRight: 10,
                      }}
                    />

                    <Text
                      style={{
                        color: '#707070',
                        fontSize: 12,
                        fontWeight: '500',
                        textAlign: 'center',
                        alignSelf: 'center',
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                )}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderColor: '#707070',
                  borderStyle: 'dashed',
                  borderBottomWidth: 0.5,
                  borderTopWidth: 0.5,
                  paddingTop: hp('1.5%'),
                  paddingBottom: hp('1.5%'),
                  marginRight: 10
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'grey',
                    fontWeight: '500',
                    marginLeft: wp('2%'),
                  }}>
                  Price :
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#0F63F4',
                      fontWeight: '600',
                      //   marginLeft: wp('2%'),
                      //   textAlign: 'right',
                    }}>
                    $50.00
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'grey',
                      fontWeight: '500',
                      marginLeft: wp('2%'),
                      textAlign: 'right',
                    }}>
                    Per Night
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 17,
                  color: '#000',
                  fontWeight: '400',
                  marginLeft: wp('2%'),
                  marginTop: hp('1.5%'),
                }}>
                Options
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: hp('3%'),
                  marginTop: hp('2%'),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    margin: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={
                      selectedValue === 'option1'
                        ? style.radioChecked
                        : style.radioUnchecked
                    }
                    onPress={() => handleRadioClick('option1')}>
                    <Text></Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: 'black',
                      textAlign: 'center',
                      marginLeft: wp('3%'),
                    }}>
                    Refund
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    margin: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={
                      selectedValue === 'option2'
                        ? style.radioChecked
                        : style.radioUnchecked
                    }
                    onPress={() => handleRadioClick('option2')}>
                    <Text></Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: 'black',
                      textAlign: 'center',
                      marginLeft: wp('3%'),
                    }}>
                    Breakfast
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    margin: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={
                      selectedValue === 'option3'
                        ? style.radioChecked
                        : style.radioUnchecked
                    }
                    onPress={() => handleRadioClick('option3')}>
                    <Text></Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: 'black',
                      textAlign: 'center',
                      marginLeft: wp('3%'),
                    }}>
                    Breakfast Buffet
                  </Text>
                </View>
              </View>
            </View>
            <>
              <Text
                style={{
                  fontSize: 17,
                  marginLeft: wp('3%'),
                  color: 'black',
                  fontWeight: '400',
                  marginTop: hp('2%'),
                  // bottom:10
                }}>
                Location
              </Text>
              <Image
                source={require('../../assets/images/Map.png')}
                style={{
                  width: wp('96%'),
                  alignSelf: 'center',
                  height: hp('16%'),
                  borderRadius: 5,
                  marginTop: hp('2%'),
                  marginBottom: 10
                }}
              />
            </>
            {hotelDetail.HotelPolicy ?
              <View
                style={{
                  width: wp('96%'),
                  margin: 10,
                  borderColor: '#707070',
                  borderBottomWidth: 0.3,
                  borderTopWidth: 0.3,
                  alignSelf: 'center',
                  paddingBottom: hp('3%'),
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '400',
                    //   fontFamily: 'Roboto',
                    color: '#000',
                    marginTop: hp('3%'),
                  }}>
                  Property Rules
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    //   fontFamily: 'Roboto',
                    color: '#707070',
                    marginTop: hp('1%'),
                    lineHeight: 18,
                  }}>
                  {hotelDetail.HotelPolicy}
                  {/* Here's an overview of the trial and the scene surrounding it as
                          hundreds of lawyers and their support staff, reporters and true
                          crime enthusiasts are expected to swell Colleton County's population
                          of 38,000 in the rural, southern part of the state. */}
                </Text>
              </View>
              :
              null
            }

            <Text
              style={{
                fontSize: 17,
                marginLeft: wp('3%'),
                color: 'black',
                fontWeight: '400',
                marginTop: hp('2%'),
              }}>
              User Review
            </Text>
            <View
              style={{
                width: wp('96%'),
                padding: 10,
                borderColor: '#707070',
                borderWidth: 0.3,
                alignSelf: 'center',
                paddingBottom: hp('2%'),
                borderRadius: 5,
                marginTop: hp('1.5%'),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '400',
                    // fontFamily: 'Roboto',
                    color: 'black',
                  }}>
                  Really Good Location
                </Text>
                <Image
                  source={require('../../assets/images/star.png')}
                  style={{ marginLeft: 5 }}
                />
                <Text
                  style={{ fontSize: 11, color: '#707070', marginLeft: hp('1%') }}>
                  Excellent
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  //   fontFamily: 'Roboto',
                  color: '#707070',
                  marginTop: hp('1%'),
                  lineHeight: 18,
                }}>
                Here's an overview of the trial and the scene surrounding it as
                hundreds of lawyers and their support staff, reporters and true
                crime enthusiasts are expected to swell Colleton County's population
                of 38,000 in the rural, southern part of the state.
              </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text
                style={{
                  fontSize: 17,
                  color: '#000',
                  fontWeight: '400',
                  marginLeft: wp('3%'),
                  marginTop: hp('3%'),
                }}>
                Similar Properties
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 11, color: '#0F63F4', fontWeight: '500', marginTop: hp('3%'), marginRight: wp('2%') }}>
                  See All
                </Text>
              </TouchableOpacity>
            </View>



            <FlatList
              data={props.route.params.similar}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={{ width: wp('45%'), marginLeft: wp('3%'), marginTop: hp('1%') }}>
                  <Image source={{ uri: item.HotelPicture }} style={{ width: wp('43%'), height: hp('25%'), borderRadius: 5, borderWidth: 0.2 }} />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: hp('1.5%'), width: 80, height: 30 }}>
                    <View>
                      <Text style={{ fontSize: 10, color: 'black', fontWeight: '400' }}>
                        {item.HotelName}
                      </Text>

                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      top: 10
                      // position:''
                    }}>
                    <View>
                      <Text style={{ color: '#0F63F4', fontSize: 11, fontWeight: '400' }}>
                        $50.00
                      </Text>
                      <Text style={{ color: '#DADADA', fontSize: 10, }}>
                        Per Night
                      </Text>

                    </View>

                    <View style={{
                      // justifyContent:'space-between',
                      // paddingTop:0,
                      // paddingBottom:0,
                      alignItems: 'center',
                      bottom: 10,
                      position: 'absolute',
                      left: '60%'
                    }}>
                      <TouchableOpacity style={{ bottom: 10 }}>

                        <StarRating
                          disabled={false}
                          maxStars={5}
                          rating={item.StarRating}
                          starStyle={{ color: '#0F63F4', marginRight: 2 }}
                          starSize={8}
                        // emptyStar={'ios-star-outline'}
                        // fullStar={'ios-star'}
                        // halfStar={'ios-star-half'}
                        // iconSet={'Ionicons'}
                        // selectedStar={(rating) => this.onStarRatingPress(rating)}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          backgroundColor: '#0F63F4',
                          width: wp('14%'),
                          height: hp('2.5%'),
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 3,
                          marginRight: wp('2%')
                        }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 13, fontWeight: '400' }}>
                          Select
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                </View>
              )}
            />
            <View style={{ borderColor: '#DADADA', borderTopWidth: 0.5, width: wp('96%'), alignSelf: 'center', marginTop: hp('2%'), marginBottom: hp('3%') }}>

              <Text
                style={{
                  fontSize: 17,
                  marginLeft: wp('3%'),
                  color: 'black',
                  fontWeight: '500',
                  marginTop: hp('2%'),

                }}>
                Amentites
              </Text>
              <FlatList
                data={data4}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View style={{ width: 60, marginTop: hp('1%'), marginLeft: wp('2%') }}>
                    <View style={{ width: 60, height: 60, borderRadius: 6, backgroundColor: '#FFFF9E', justifyContent: 'center', alignItems: 'center' }}>
                      {item.image}
                    </View>
                    <Text style={{ fontSize: 11, color: '#DADADA', textAlign: 'center', marginTop: 10 }}>{item.title}</Text>
                  </View>
                )}
              />

            </View>
          </>
        }




      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    // flex :1,
    backgroundColor: '#0759E2',
    width: wp('100%'),
    height: hp('15%'),
  },
  headerapp: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    // marginLeft: wp('2%'),
    // marginTop: hp('2%'),
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
    marginTop: hp('4%'),
    paddingHorizontal: 15,
    backgroundColor: '#ffff',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: hp('5%'),
    width: wp('94%'),
  },
  input: {
    height: 50,
    fontSize: 13,
    left: 10
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 14,
  },
  title: { fontSize: 14, fontWeight: '300', color: 'grey', textAlign: 'left' },
  titledetails: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    textAlign: 'right',
  },
  radioChecked: {
    borderWidth: 1,
    borderColor: '#0759E2',
    borderRadius: 50,
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0759E2',
  },
  radioUnchecked: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 50,
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// export default HotelSearchDetail;
// export default HotelSearchResult;
// dispatcher functions
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

//getting props from redux
function mapStateToProps(state) {
  let redux = state;
  return { redux };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelSearchDetail);
