import React, { useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
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
import Icon from 'react-native-vector-icons/AntDesign';
const myIcon = <Icon name="arrowleft" size={30} color="#900" />;
import { useNavigation } from '@react-navigation/native';


const BookingHistory = () => {
  const navigation = useNavigation();
  const [mainSelected, setMainSelected] = useState("pending")
  const data = [
    { date: '27-01-2023',type :'Type',bookingid:'johnsmith@gmail.com',description:'Description' },
    { date: '27-01-2023',type :'Type',bookingid:'johnsmith@gmail.com',description:'Description' },
    { date: '27-01-2023',type :'Type',bookingid:'johnsmith@gmail.com',description:'Description' },
    { date: '27-01-2023',type :'Type',bookingid:'johnsmith@gmail.com',description:'Description' },
    { date: '27-01-2023',type :'Type',bookingid:'johnsmith@gmail.com',description:'Description' },
    { date: '27-01-2023',type :'Type',bookingid:'johnsmith@gmail.com',description:'Description' },
    { date: '27-01-2023',type :'Type',bookingid:'johnsmith@gmail.com',description:'Description' },
    { date: '27-01-2023',type :'Type',bookingid:'johnsmith@gmail.com',description:'Description' },
    { date: '27-01-2023',type :'Type',bookingid:'johnsmith@gmail.com',description:'Description' },
    { date: '27-01-2023',type :'Type',bookingid:'johnsmith@gmail.com',description:'Description' },

  ];

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
    <StatusBar
      animated={true}
      backgroundColor="#fff"
      barStyle="dark-content"
    />
      <ScrollView contentContainerStyle={{backgroundColor: '#FFFFFF'}}>
        <View style={style.header}>
        <View style={style.headerapp}>
            <TouchableOpacity
            onPress={()=>navigation.openDrawer()}
            >
            <Icon name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontWeight: '500',
                textAlign: 'center',
                marginLeft: wp('25%'),
              }}>
              Booking History
            </Text>
          </View>

          <ScrollView
            horizontal
            contentContainerStyle={{
              marginTop: hp('8%'),
              height: hp('10%'),
              marginLeft: wp('5%'),
              justifyContent:'center'
            }}>
            <TouchableOpacity 
             onPress={()=>setMainSelected("pending")}
            style={mainSelected == "pending" ? style.chipContainerActive : style.chipContainer}
            // style={style.chipContainer}
            >
              <Text style={mainSelected == "pending" ? style.chipLabelActive : style.chipLabel}>Pending</Text>
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={()=>setMainSelected("Upcoming")}
            style={mainSelected == "Upcoming" ? style.chipContainerActive : style.chipContainer}
            // style={style.chipContainer}
            >
              <Text style={mainSelected == "Upcoming" ? style.chipLabelActive : style.chipLabel}>Upcoming</Text>
            </TouchableOpacity>

            <TouchableOpacity 
             onPress={()=>setMainSelected("Booking")}
            style={mainSelected == "Booking" ? style.chipContainerActive : style.chipContainer}
            // style={style.chipContainer}
            >
              <Text style={mainSelected == "Booking" ? style.chipLabelActive : style.chipLabel}>Booking</Text>
            </TouchableOpacity>

            <TouchableOpacity 
             onPress={()=>setMainSelected("Cancelled")}
            style={mainSelected == "Cancelled" ? style.chipContainerActive : style.chipContainer}
            // style={style.chipContainer}
            >
              <Text style={mainSelected == "Cancelled" ? style.chipLabelActive : style.chipLabel}>Cancelled</Text>
            </TouchableOpacity>


            <TouchableOpacity 
             onPress={()=>setMainSelected("Booked")}
            style={mainSelected == "Booked" ? style.chipContainerActive : style.chipContainer}
            // style={style.chipContainer}
            >
              <Text style={mainSelected == "Booked" ? style.chipLabelActive : style.chipLabel}>Booked</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F5F6FB',
            height: hp('8%'),
            justifyContent: 'space-between',
            paddingLeft: wp('3%'),
            paddingRight: wp('3%'),
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#4C4C4C',
              fontSize: 13,
              textAlign: 'center',
              fontWeight: '600',
            }}>
            Date
          </Text>
          <Text
            style={{
              color: '#4C4C4C',
              fontSize: 13,
              textAlign: 'center',
              fontWeight: '600',
            }}>
            Type
          </Text>
          <Text
            style={{
              color: '#4C4C4C',
              fontSize: 13,
              textAlign: 'center',
              fontWeight: '600',
            }}>
            Booking Id
          </Text>
          <Text
            style={{
              color: '#4C4C4C',
              fontSize: 13,
              textAlign: 'center',
              fontWeight: '600',
            }}>
            Description
          </Text>
        </View>

        <FlatList
        style={{backgroundColor:'#F5F6FB'}}
      data={data}
      renderItem={({ item }) => (
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#ffff',
            height: hp('6%'),
            justifyContent: 'space-between',
            paddingLeft: wp('3%'),
            paddingRight: wp('3%'),
            alignItems: 'center',
            marginTop:hp('1%')
          }}>
          <Text
            style={{
              color: '#000000',
              fontSize: 11,
              textAlign: 'center',
              fontWeight: '300',
            }}>
            {/* 27-01-2023 */}
            {item.date}
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 11,
              textAlign: 'center',
              fontWeight: '300',
            }}>
            {item.type}
          </Text>
          <Text
            style={{
              color: '#0759E2',
              fontSize: 12,
              textAlign: 'center',
              fontWeight: '300',
            }}>
            {item.bookingid}
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 11,
              textAlign: 'center',
              fontWeight: '300',
            }}>
            {item.description}
          </Text>
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
    width: wp('20%'),
    height: hp('3.2%'),
    justifyContent:'center',
    top:5
  },
  chipLabel: {
    fontSize: 12,
    color: '#A1A1A1',
    fontWeight: '400',
    textAlign: 'center',
  },
  chipContainerActive: {
    backgroundColor: '#ffff',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    width: wp('28%'),
    height: hp('4.5%'),
    justifyContent:'center',
    bottom:2
  },
  chipLabelActive: {
    fontSize: 13,
    color: '#0759E2',
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default BookingHistory;
