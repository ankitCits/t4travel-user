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
import Icond from 'react-native-vector-icons/Fontisto';
import Iconss from 'react-native-vector-icons/AntDesign';
import Icont from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import StarRating from 'react-native-star-rating';
import Util from '../../utils/Validator';
const myIcon = <IconI name="location-sharp" size={20} color="#0F63F4" />;
const myIcon1 = <Icons name="keyboard-arrow-down" size={20} color="#000" />;
const myIcon2 = <Icon name="calendar" size={20} color="#0F63F4" />;
const myIcon3 = <Icons name="local-offer" size={20} color="#A0A0A0" />;
const myIcon4 = <Iconss name="mobile1" size={20} color="#A0A0A0" />;
const myIcon5 = <Icont name="mail" size={20} color="#A0A0A0" />;
const myIcon6 = <IconI name="people" size={20} color="#0F63F4" />;
const HotelCheckout = (props) => {
    const navigation = useNavigation();



    
    console.log("PROPS_IN_HOTEL_DETAL_CHECKOUT",props.route.params)
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{backgroundColor: '#FFFFFF'}}>
        <ImageBackground
        imageStyle={{opacity:0.8}}
          // source={require('../../assets/images/hotels.png')}
          source={{uri:props.route.params.item.HotelPicture}}
          style={style.header}>
          <View style={style.headerapp}>
            <TouchableOpacity
            // style={{justifyContent:'center'}}
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
              Checkout for Hotel
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 15,
          }}>
          <Text style={{fontSize: 19, color: '#000', fontWeight: '600',width:250}}>
           {props.route.params.item.HotelName}
          </Text>
          {/* <Image
            source={require('../../assets/images/star.png')}
            style={{width: 80, height: 12}}
          /> */}
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
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: wp('90%'),
            height: hp('5.5%'),
            borderColor: '#707070',
            borderWidth: 0.2,
            borderRadius: 5,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 13,
              color: '#707070',
              fontWeight: '300',
              marginLeft: wp('5%'),
            }}>
            Check-In <Text
             style={{
              fontSize: 13,
              color: '#000',
              fontWeight: '500',
              marginLeft: wp('5%'),
            }}
            >
            {"  " + Util.formatDDMMM(props.route.params.hotel.checkIn)}
            </Text>
          </Text>
          <TouchableOpacity>
            <Icon
                name="calendar"
                size={24}
                color="#707070"
                style={{marginRight: wp('3%')}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: wp('90%'),
            height: hp('5.5%'),
            borderColor: '#707070',
            borderWidth: 0.2,
            borderRadius: 5,
            alignSelf: 'center',
            marginTop: hp('2%'),
          }}>
          <Text
            style={{
              fontSize: 13,
              color: '#707070',
              fontWeight: '300',
              marginLeft: wp('5%'),
            }}>
            Check-Out <Text
             style={{
              fontSize: 13,
              color: '#000',
              fontWeight: '500',
              marginLeft: wp('5%'),
            }}
            >
            {"  " + Util.formatDDMMM(props.route.params.hotel.checkOut)}
            </Text>
          </Text>
          <TouchableOpacity>
            <Icon
                name="calendar"
                size={24}
                color="#707070"
                style={{marginRight: wp('3%')}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: wp('94%'),
            height: hp('6%'),
            alignSelf: 'center',
            marginTop: hp('1.5%'),
          }}>
          <Text
            style={{
              fontSize: 13,
              color: '#707070',
              fontWeight: '300',
              marginLeft: wp('2%'),
            }}>
            Price Include:
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#000',
              fontWeight: '500',
              marginLeft: wp('5%'),
            }}>
            {props.route.params.item.Price.CurrencyCode + ' ' + props.route.params.item.Price.PublishedPrice}
          </Text>
        </View>

        {/* <TouchableOpacity style={style.press}>
          <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
            Upgrade Your Stay
          </Text>
        </TouchableOpacity> */}
        <View style={style.Price}>
          <Text style={style.title}>Price Breakup</Text>
          <Text style={style.short}>Total amount: {props.route.params.item.Price.CurrencyCode + ' ' + props.route.params.item.Price.PublishedPrice}</Text>
          <Text style={style.short}>Price after discount: {props.route.params.item.Price.CurrencyCode + ' ' + props.route.params.item.Price.TotalGSTAmount}</Text>
          <Text style={style.short}>Total amount to be paid: {props.route.params.item.Price.CurrencyCode + ' ' + props.route.params.item.Price.TotalGSTAmount}</Text>
          <Text style={style.short}>Total discount: {props.route.params.item.Price.CurrencyCode + ' ' + props.route.params.item.Price.Discount}</Text>
          <Text style={style.short}>Tax & service: {props.route.params.item.Price.CurrencyCode + ' ' + props.route.params.item.Price.TotalGSTAmount}</Text>
          <Text style={style.short}>Coupan codes: T4travel</Text>
        </View>
        <Text style={style.title1}>Guest details</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <IconI name="people" size={20} color="#707070" />
            <Text
              style={{fontSize: 12, color: '#707070', marginLeft: wp('4%')}}>
              No Of Rooms/Guest
            </Text>
          </View>
          <Text style={{fontSize: 12, color: '#000', fontWeight: '500'}}>
            4 Persons
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Iconss name="user" size={20} color="#707070" />
            <Text
              style={{fontSize: 12, color: '#707070', marginLeft: wp('4%')}}>
              Name
            </Text>
          </View>
          <Text style={{fontSize: 12, color: '#000', fontWeight: '500'}}>
            John Smith
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Icont name="phone" size={20} color="#707070" />
            <Text
              style={{fontSize: 12, color: '#707070', marginLeft: wp('4%')}}>
              Contact
            </Text>
          </View>
          <Text style={{fontSize: 12, color: '#000', fontWeight: '500'}}>
            +91-9999999999
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Icond name="email" size={20} color="#707070" />
            <Text
              style={{fontSize: 12, color: '#707070', marginLeft: wp('4%')}}>
              Email
            </Text>
          </View>
          <Text style={{fontSize: 12, color: '#000', fontWeight: '500'}}>
            johnsmith@gmail.com
          </Text>
        </View>

        <TouchableOpacity
        onPress={()=>navigation.navigate("Payments")}
          style={{
            width: wp('90%'),
            height: hp('5%'),
            backgroundColor: '#0759E2',
            borderRadius: 5,
            alignSelf: 'center',
            marginBottom: hp('2%'),
            marginTop: hp('5%'),
            justifyContent:'center'
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              textAlign: 'center',
            //   marginTop: hp('1%'),
              fontWeight:'500'
            }}>
            Pay Now
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
    height: hp('28%'),
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
  short: {
    fontSize: 13,
    color: '#707070',
    fontWeight: '400',
    marginTop: hp('1%'),
  },
  title: {
    color: '#000',
    fontWeight: '500',
    fontSize: 18,
    marginTop: hp('1%'),
  },
  title1: {
    color: '#000',
    fontWeight: '500',
    fontSize: 18,
    marginTop: hp('2.5%'),
    marginLeft: wp('2%'),
  },
  Price: {
    width: wp('94%'),
    borderColor: '#707070',
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    alignSelf: 'center',
    paddingBottom: hp('3%'),
    paddingTop: hp('2%'),
  },
  press: {
    width: wp('45%'),
    height: hp('5%'),
    backgroundColor: '#0759E2',
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: hp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default HotelCheckout;
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

export default connect(mapStateToProps, mapDispatchToProps)(HotelCheckout);
