import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Switch,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import CommonBase from '../../component/CommonBase';
import { useNavigation } from '@react-navigation/native';
import { searchCity, searchHotel } from '../../redux/actions/hotel';
import { connect } from 'react-redux';
import Search from '../../component/search';
import Calendar from '../../component/calendar';
import CalendarUi from '../../component/calendar';
// const myIcon = <Icon name="keyboard-arrow-down" size={30} color="#900" />;
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import AwesomeAlert from 'react-native-awesome-alerts';
import Util from '../../utils/Validator';

const local_data = [
  {
    value: '0',
    lable: '0',
  },
  {
    value: '1',
    lable: '1',
  },
  {
    value: '2',
    lable: '2',
  },
  {
    value: '3',
    lable: '3',
  },
  {
    value: '4',
    lable: '4',
  },
  {
    value: '5',
    lable: '5',
  },
  {
    value: '6',
    lable: '6',
  },
  {
    value: '7',
    lable: '7',
  },
  {
    value: '8',
    lable: '8',
  },
  {
    value: '9',
    lable: '9',
  },
  {
    value: '10',
    lable: '10',
  },
];
const Hotel = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [searchModal, setSearchModal] = useState(false)
  const [searchCalendar, setSearchCalendar] = useState(false)
  const [startDate, setStartDate] = useState('')
  const [endtDate, setEndtDate] = useState('')
  const [picUi, setPicUi] = useState(0)
  const [searchKey, setSearchKey] = useState()
  const [fetchResultState, setFetchResultState] = useState([])
  const [fetchingKey, setFetchingKey] = useState()
  const [modaLoader, setModaLoader] = useState(false)
  const [flexDate, setFlexDate] = useState(false)
  const [addRoom, setAddRoom] = useState('1')
  const [addAdults, setAddAdults] = useState('2')
  const [addChild, setAddChild] = useState('0')
  const [roomsModal, setRoomsModal] = useState(false)
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [markedDates, setmarkedDates] = useState({})
  // const [country, setChildrenValue] = useState('1');
  const navigation = useNavigation();
  const [alertShow, setAlertShow] = useState(false)
  const [alertText, setAlertText] = useState('')

  const showError = (msg) => {
    setAlertText(msg)
    setAlertShow(true)
    // showMessage({
    //   message: msg,
    //   type: "danger",
    // });
  }
  const hideAlert = () => {
    setAlertShow(false)
  };


  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[style.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  const onSearch = async (key) => {
    let payload = key
    setSearchKey(key)
    console.log("KEY", key)
    if (key = "") {
      return setFetchResultState([])
    }
    setModaLoader(true)
    let fetchCity = await props.dispatch(searchCity(payload))
    // console.log("FETCH_CITY_IN_UI :",fetchCity.result)
    if (fetchCity.status_code == 1) {
      setFetchResultState(fetchCity.result)
      setModaLoader(false)
    }
    // navigation.navigate("HotelSearchResult")
  }

  /* Reformat a date like 2016-10-14 as dd MMM
  ** @param {string} s - date string to reformat
  ** @returns {string}
  */
  function formatDDMMM(s) {
    var months = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
    var b = s.split(/\D/);
    return b[2] + ' ' + months[b[1] - 1] + ' ' + b[[1] - 1];
  }



  const submitHotelFetchReq = async () => {
    console.log("SUBMIT :", fetchingKey)
    console.log("SUBMIT startDate :", startDate)
    console.log("SUBMIT endtDate :", endtDate)

    console.log("SUBMIT addRoom :", addRoom)
    console.log("SUBMIT addAdults :", addAdults)
    console.log("SUBMIT addChild :", addChild)
    
    let result = Util.isEmpty(searchKey);
      if (fetchingKey === undefined) {
        showError("Please Select Valid City.")
        return;
      }

      result = Util.isEmpty(startDate);
      if (result === true) {
        showError("Please Select Check In & Check Out Date.")
        return;
      }

      result = Util.isEmpty(endtDate);
      if (result === true) {
        showError("Please Select Check In & Check Out Date.")
        return;
      }

      let payload = {
        city:fetchingKey,
        checkIn:startDate,
        checkOut:endtDate,
        room:addRoom,
        adult:addAdults,
        children:addChild
      }
      navigation.navigate("HotelSearchResult",payload)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={{ backgroundColor: 'white', }}>
          <View style={style.headerapp}>
            <TouchableOpacity
              onPress={() => {
                if (props.route.params) {
                  navigation.pop()
                } else {
                  navigation.openDrawer()
                }
              }}
            >
              <Icon
                name="arrowleft"
                size={30}
                color="#000"
                style={{ marginTop: hp('2%'), marginLeft: wp('2%') }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                fontWeight: '500',
                textAlign: 'center',
                marginLeft: wp('20%'),
                marginTop: hp('2.5%'),
                alignItems: 'center',
              }}>
              Hotels & Homestays
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: wp('90%'),
              borderBottomColor: '#707070',
              alignSelf: 'center',
              // borderBottomWidth: 0.5,
              marginTop: hp('3%'),
              paddingBottom: hp('2%'),
            }}
            onPress={() => setSearchModal(true)}
          >
            <Text style={{ fontSize: 12, color: 'grey' }}>
              Select City, Location or Hotel Name (Worldwide)
            </Text>
            <Text style={{ fontSize: 13, color: 'black', fontWeight: '500' }}>
              {fetchingKey == undefined ? " Greater Noida, India" : fetchingKey.city}
            </Text>
          </TouchableOpacity>
          <View style={style.underLine} />
          {/* <ImageBackground
                  source={require('../../assets/images/plate.png')}
                  >

                  </ImageBackground> */}
          <View
            style={{
              // alignSelf: 'center',
              marginTop: hp('3%'),
              flexDirection: 'row',
              alignItems: 'center',
              // alignSelf:'center'
              left: 10
            }}>
            <Image
              source={require('../../assets/images/plate.png')}
              style={{
                width: wp('94%'),
                alignSelf: 'center',
                borderRadius: 10,
                position: 'relative',
              }}></Image>

            <Image
              source={require('../../assets/images/shape.png')}
              style={{ position: 'absolute', marginLeft: wp('1%') }}
            />
            <Image
              source={require('../../assets/images/sell.png')}
              style={{ position: 'absolute', marginLeft: wp('3%') }}
            />

            <Text
              style={{
                position: 'absolute',
                marginLeft: wp('8%'),
                fontSize: 12,
                fontWeight: '500',
                color: '#fff'
              }}>
              Flexi stay
            </Text>

            <Text
              style={{
                position: 'absolute',
                fontSize: 12,
                marginLeft: wp('27%'),
                fontWeight: '500',
                color: '#fff'
              }}>
              Anytime check-in/check-out
            </Text>
            <Image
              source={require('../../assets/icons/info.png')}
              style={{ position: 'absolute', marginLeft: wp('72%') }}
            />
            <TouchableOpacity style={{ right: 50 }}
              onPress={() => flexDate ? setFlexDate(false) : setFlexDate(true)}
            >
              <Icon1 name={flexDate ? "toggle-on" : "toggle-off"} size={40} color={flexDate ? "#fff" : "grey"} />
            </TouchableOpacity>
            {/* 
                <Switch
                  trackColor={{false: '#767577', true: '#f4f3f4'}}
                  thumbColor={isEnabled ? '#767577' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={setIsEnabled}
                  value={isEnabled}
                  style={{position: 'absolute', marginLeft: wp('77')}}
                /> */}
          </View>

          <View
            style={{
              width: wp('90%'),
              borderBottomColor: '#707070',
              alignSelf: 'center',
              borderBottomWidth: 0.3,
              marginTop: hp('3%'),
              paddingBottom: hp('2%'),
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../../assets/icons/calender.png')}
                style={{ marginLeft: wp('2%'), alignSelf: 'flex-end', marginRight: wp('2%') }}
              />
              <View style={{ alignSelf: 'center' }}>
                <Text style={{ fontSize: 11, color: 'grey' }}>
                  Check-in
                </Text>
                <TouchableOpacity
                  onPress={() => {

                    setPicUi(1)
                    setSearchCalendar(true)
                  }}
                >
                  <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold' }}>
                    {startDate != "" ? formatDDMMM(startDate) : "27 Jan Fri, 2023"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View >
              <Text style={{ fontSize: 12, color: '#0759E2', textAlign: 'right' }}>
                Check-out
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setPicUi(2)
                  setSearchCalendar(true)
                }}
              >
                <Text style={{ fontSize: 12, color: 'black', fontWeight: '500' }}>
                  {endtDate != "" ? formatDDMMM(endtDate) : "27 Jan Fri, 2023"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>


          <TouchableOpacity
            style={{
              width: wp('90%'),
              borderBottomColor: '#707070',
              alignSelf: 'center',
              borderBottomWidth: 0.3,
              marginTop: hp('3%'),
              paddingBottom: hp('2%'),
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
            onPress={() => setRoomsModal(true)}
          >
            <View style={{ flexDirection: 'row' }}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={{ fontSize: 12, color: 'grey' }}>
                  Traveller & Hotel
                </Text>
                <Text style={{ fontSize: 13, color: 'black', fontWeight: '500' }}>
                  {addRoom} Room, {addAdults} Adult
                </Text>
              </View>
            </View>
            <View style={{ alignSelf: 'center' }}>
              <Icon1 name="keyboard-arrow-down" size={30} color="#000" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={style.searchButton}
            onPress={() =>
              // navigation.navigate("HotelSearchResult")
              submitHotelFetchReq()
            }
          >
            <Text style={
              {
                textAlign: 'center',
                color: '#fff',
                fontSize: 14,
                alignItems: 'center',
                fontWeight: '500'
              }
            }>Search Hotels</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flex: 1,
          backgroundColor: '#fff',
          // marginTop:'5%'
        }}>
          <CommonBase />
        </View>
      </ScrollView>

      {searchModal &&
        <Search
          isVisible={searchModal}
          closeModal={() => setSearchModal(false)}
          searchKey={searchKey}
          fetchResultState={fetchResultState}
          modaLoader={modaLoader}
          onChangeKey={(key) => onSearch(key)}
          onSelectCity={(key) => {
            setFetchingKey(key)
            setSearchModal(false)
          }}

        />
      }


      {searchCalendar &&
        <CalendarUi
          isVisible={searchCalendar}
          closeModal={() => setSearchCalendar(false)}
          markedDates={markedDates}
          setmarkedDates={(d) => setmarkedDates(d)}
          onSelect={(d) => {
            if (d.start) {
              console.log("SELECTED_DATE :", d)
              setStartDate(d.day.dateString)
            } else {
              setEndtDate(d.day.dateString)
            }

          }
          }
        />
      }

      {roomsModal &&
        <>
          <Modal
            animationType="slide"
            transparent={true}
            visible={roomsModal}
            onRequestClose={() => {
              // Alert.alert('Modal has now been closed.');
            }}>
            <View style={{
              flex: 1,
              // justifyContent: "center",
              // alignItems: "center",
              backgroundColor: 'rgba(52, 52, 52, 0.5)'
            }}>
              <View style={{ height: 320, backgroundColor: '#fff', bottom: 0, position: 'absolute', width: '100%' }}>
                <View style={style.headerapp}>
                  <TouchableOpacity
                    onPress={() => {
                      setRoomsModal(false)
                    }}
                  >
                    <Icon
                      name="close"
                      size={22}
                      color="grey"
                      style={{ marginLeft: wp('2%') }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#000',
                      fontWeight: '500',
                      textAlign: 'center',
                      marginLeft: wp('5%'),
                      // marginTop: hp('2.5%'),
                      alignItems: 'center',
                    }}>
                    Rooms & Guests
                  </Text>
                </View>

                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 20,
                  alignItems: 'center'
                }}>
                  <View>
                    <Text style={style.mainText}>Nuber of Rooms</Text>
                    <Text style={style.innerMainText}>(Minimum 1)</Text>
                  </View>

                  <TouchableOpacity style={style.mainSelectBox}>
                    {/* <Text>0{addRoom}</Text>
                    <Icon1 name="keyboard-arrow-down" size={20} color="#0F63F4" /> */}
                    <SelectCountry
                      style={style.dropdown}
                      selectedTextStyle={style.selectedTextStyle}
                      placeholderStyle={style.placeholderStyle}
                      imageStyle={style.imageStyle}
                      iconStyle={style.iconStyle}
                      maxHeight={500}
                      value={addRoom}
                      data={local_data}
                      valueField="value"
                      labelField="lable"
                      // imageField="image"
                      placeholder={addRoom}
                      searchPlaceholder="Search..."
                      onChange={e => {
                        setAddRoom(e.value);
                      }}
                      dropdownPosition="top"
                    />
                  </TouchableOpacity>

                </View>


                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 20,
                  alignItems: 'center',
                  paddingTop: 5
                }}>
                  <View>
                    <Text style={style.mainText}>Nuber of Adults</Text>
                    <Text style={style.innerMainText}>Age 13 years & above</Text>
                  </View>

                  <TouchableOpacity style={style.mainSelectBox}>
                    {/* <Text>0{addAdults}</Text>
                    <Icon1 name="keyboard-arrow-down" size={20} color="#0F63F4" /> */}
                    <SelectCountry
                      style={style.dropdown}
                      selectedTextStyle={style.selectedTextStyle}
                      placeholderStyle={style.placeholderStyle}
                      imageStyle={style.imageStyle}
                      iconStyle={style.iconStyle}
                      maxHeight={500}
                      value={addAdults}
                      data={local_data}
                      valueField="value"
                      labelField="lable"
                      // imageField="image"
                      placeholder={addAdults}
                      searchPlaceholder="Search..."
                      onChange={e => {
                        setAddAdults(e.value);
                      }}
                      dropdownPosition="top"
                    />
                  </TouchableOpacity>

                </View>



                <TouchableOpacity style={style.searchButton}
                  onPress={() =>
                    setRoomsModal(false)}
                >
                  <Text style={
                    {
                      textAlign: 'center',
                      color: '#fff',
                      fontSize: 14,
                      alignItems: 'center',
                      fontWeight: '500'
                    }
                  }>Done</Text>
                </TouchableOpacity>
              </View>
              <View>

              </View>
            </View>
          </Modal>
        </>
      }

      <AwesomeAlert
        show={alertShow}
        showProgress={false}
        title="Error"
        message={alertText}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        // cancelText="No, cancel"
        confirmText="Ok, Got it."
        confirmButtonColor="red"
        onCancelPressed={() => {
          hideAlert();
        }}
        onConfirmPressed={() => {
          hideAlert();
        }}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  headerapp: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    // marginLeft: wp('2%'),
    // marginTop: hp('2%'),
    height: hp('8%'),
    // borderBottomWidth: 1.5,
    borderBottomColor: '#00000029',
    backgroundColor: 'white',
    color: 'black',
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // justifyContent:''
  },
  underLine: {
    height: 1,
    // flex:1,
    backgroundColor: "grey",
    opacity: 0.5,
    width: '92%',
    alignSelf: 'center'
  },
  searchButton: {
    backgroundColor: '#0759E2',
    width: wp('80%'),
    alignSelf: 'center',
    height: hp('6%'),
    borderRadius: 5,
    marginTop: hp('2%'),
    justifyContent: 'center',
    marginBottom: 10
  },
  mainText: {
    fontSize: 16,
    fontWeight: '600',
    color: "#000"
  },
  innerMainText: {
    fontSize: 12,
    fontWeight: '400',
    color: "grey"
  },
  mainSelectBox: {
    height: 38,
    width: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent:'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    // borderWidth:1,
    borderRadius: 5,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  // dropdown: {
  //   height: 50,
  //   borderColor: 'gray',
  //   borderWidth: 0.5,
  //   borderRadius: 8,
  //   paddingHorizontal: 8,
  // },
  // icon: {
  //   marginRight: 5,
  // },
  // label: {
  //   position: 'absolute',
  //   backgroundColor: 'white',
  //   left: 22,
  //   top: 8,
  //   zIndex: 999,
  //   paddingHorizontal: 8,
  //   fontSize: 14,
  // },
  // placeholderStyle: {
  //   fontSize: 16,
  // },
  // selectedTextStyle: {
  //   fontSize: 16,
  // },
  // iconStyle: {
  //   width: 20,
  //   height: 20,
  // },
  // inputSearchStyle: {
  //   height: 40,
  //   fontSize: 16,
  // },
  dropdown: {
    // margin: 16,
    height: 50,
    width: 100,
    // backgroundColor: '#EEEEEE',
    borderRadius: 30,
    paddingHorizontal: 8,
    right: 10
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
    right: 10
  },
});

// export default Hotel;
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

export default connect(mapStateToProps, mapDispatchToProps)(Hotel);
