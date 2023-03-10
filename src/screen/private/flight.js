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
  ScrollView,
  Modal,
} from 'react-native';
// import CheckBox from 'react-native-community/checkbox'
import Icon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import CommonBase from '../../component/CommonBase';
// import Icon from "react-native-vector-icons/MaterialIcons";
// const myIcon = <Icon name="keyboard-arrow-down" size={30} color="#900" />;
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';


import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import Search from '../../component/search';
import SearchFlight from '../../component/searchFlight';
import CalenderFlightUi from '../../component/calendarFlight';
import Util from '../../utils/Validator';
const Flight = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [searchModal, setSearchModal] = useState(false)
  const [remember, setRemember] = useState(false);
  const [fetchingKey, setFetchingKey] = useState()
  const [fetchResultState, setFetchResultState] = useState([])
  const [searchKey, setSearchKey] = useState()
  const [mainSelected, setMainSelected] = useState("one")
  const [cabin, setcabin] = useState("Economy/Premium Economy")
  const [modaLoader, setModaLoader] = useState(false)
  const [searchCalendar, setSearchCalendar] = useState(false)
  const [checkinDate, setcheckinDate] = useState('')
  const [roomsModal, setRoomsModal] = useState(false)
  const [adult, setAdult] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const navigation = useNavigation();
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
                marginLeft: wp('27.5%'),
                marginTop: hp('2.5%'),
              }}>
              Flight Search
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: hp('2%'),
            }}>

            {/* ONE WAY */}
            <TouchableOpacity
              onPress={() => setMainSelected("one")}
              style={mainSelected == "one" ? style.mainSelected : style.mainUnselected}>
              <Text
                style={mainSelected == "one" ? style.mainSelectedText : style.mainUnselectedText}>
                ONE WAY
              </Text>
            </TouchableOpacity>
            {/* ROUND TRIP */}
            <TouchableOpacity
              onPress={() => setMainSelected("round")}
              style={mainSelected == "round" ? style.mainSelected : style.mainUnselected}>
              <Text
                style={mainSelected == "round" ? style.mainSelectedText : style.mainUnselectedText}>
                ROUND TRIP
              </Text>
            </TouchableOpacity>
            {/* MULTI CITY */}
            <TouchableOpacity
              onPress={() => setMainSelected("multi")}
              style={mainSelected == "multi" ? style.mainSelected : style.mainUnselected}>
              <Text
                style={mainSelected == "multi" ? style.mainSelectedText : style.mainUnselectedText}>
                MULTI-CITY
              </Text>
            </TouchableOpacity>
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
              justifyContent: 'space-between',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../../assets/images/plane.png')}
                style={{
                  marginLeft: wp('2%'),
                  alignSelf: 'flex-end',
                  marginRight: wp('2%'),
                }}
              />
              <TouchableOpacity
                onPress={() => setSearchModal(true)}
              >
                <Text style={{ fontSize: 11, color: 'grey' }}>From</Text>
                <Text style={{ fontSize: 12, color: '#000', fontWeight: '500' }}>
                  New Delhi{' '}
                  <Text style={{ fontSize: 13, color: 'grey', fontWeight: '700' }}>
                    DEL
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
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
              justifyContent: 'space-between',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../../assets/images/planeout.png')}
                style={{
                  marginLeft: wp('2%'),
                  alignSelf: 'flex-end',
                  marginRight: wp('2%'),
                }}
              />
              <TouchableOpacity
                onPress={() => setSearchModal(true)}
              >
                <Text style={{ fontSize: 11, color: 'grey' }}>TO</Text>
                <Text style={{ fontSize: 12, color: '#000', fontWeight: '500' }}>
                  Mumbai{' '}
                  <Text style={{ fontSize: 13, color: 'grey', fontWeight: '700' }}>
                    BOM
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <ImageBackground
              source={require('../../assets/images/plate.png')}
              >

              </ImageBackground> */}

          <View
            style={{
              width: wp('90%'),
              borderBottomColor: '#707070',
              alignSelf: 'center',
              borderBottomWidth: 0.3,
              marginTop: hp('3%'),
              paddingBottom: hp('2%'),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../../assets/icons/calender.png')}
                style={{
                  marginLeft: wp('2%'),
                  alignSelf: 'flex-end',
                  marginRight: wp('2%'),
                }}
              />
              <TouchableOpacity onPress={() => setSearchCalendar(true)}>
                <Text style={{ fontSize: 11, color: 'grey' }}>Check-in</Text>
                <Text style={{ fontSize: 12, color: 'black', fontWeight: '500' }}>
                  {Util.formatDDMMM(checkinDate)}
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={{ fontSize: 12, color: '#0759E2', textAlign: 'right' }}>
                  + Add Return Date
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 10,
                  color: 'black',
                  fontWeight: '300',
                  color: 'grey',
                }}>
                Book Round Trip to save extra
              </Text>
            </View>
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
              justifyContent: 'space-between',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => {
                  setRoomsModal(true)
                }}
              >
                <Text style={{ fontSize: 11, color: 'grey' }}>Traveller & Class</Text>
                <Text style={{ fontSize: 12, color: 'black', fontWeight: '500' }}>
                  1, Economy/ Premium Economy
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ alignSelf: 'center' }}
              onPress={() => {
                setRoomsModal(true)
              }}
            >
              <Icon1 name="keyboard-arrow-down" size={30} color="#000" />
            </TouchableOpacity>
          </View>


          <View style={{ margin: 20, flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column' }}>
              <View style={style.checkboxContainer}>
                {remember ? (
                  <TouchableOpacity
                    style={{ marginTop: 2 }}
                    onPress={() => setRemember(false)}>
                    <Icon1 name="check-box" size={22} color="#707070" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{ marginTop: 2 }}
                    onPress={() => setRemember(true)}>
                    <Icon1
                      name="check-box-outline-blank"
                      size={23}
                      color="#707070"
                    />
                  </TouchableOpacity>
                )}
                <Text style={style.selectOption}>
                  Non Stop Flights
                </Text>
              </View>
              <View style={style.checkboxContainer}>
                {remember ? (
                  <TouchableOpacity
                    style={{ marginTop: 2 }}
                    onPress={() => setRemember(false)}>
                    <Icon1 name="check-box" size={23} color="#707070" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{ marginTop: 2 }}
                    onPress={() => setRemember(true)}>
                    <Icon1
                      name="check-box-outline-blank"
                      size={23}
                      color="#707070"
                    />
                  </TouchableOpacity>
                )}
                <Text style={style.selectOption}>
                  Student Fare
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: 'column' }}>
              <View style={style.checkboxContainer}>
                {remember ? (
                  <TouchableOpacity
                    style={{ marginTop: 2 }}
                    onPress={() => setRemember(false)}>
                    <Icon1 name="check-box" size={23} color="#707070" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{ marginTop: 2 }}
                    onPress={() => setRemember(true)}>
                    <Icon1
                      name="check-box-outline-blank"
                      size={23}
                      color="#707070"
                    />
                  </TouchableOpacity>
                )}
                <Text style={style.selectOption}>
                  Armed Forces
                </Text>
              </View>
              <View style={style.checkboxContainer}>
                {remember ? (
                  <TouchableOpacity
                    style={{ marginTop: 2 }}
                    onPress={() => setRemember(false)}>
                    <Icon1 name="check-box" size={23} color="#707070" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{ marginTop: 2 }}
                    onPress={() => setRemember(true)}>
                    <Icon1
                      name="check-box-outline-blank"
                      size={23}
                      color="#707070"
                    />
                  </TouchableOpacity>
                )}
                <Text style={style.selectOption}>
                  Senior Citizen
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={style.searchButton}
            onPress={() => navigation.navigate("FlightSearchResult")}
          >
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontSize: 14,
                alignItems: 'center',
                fontWeight: '500'
              }}>
              Search Flights
            </Text>
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
        <SearchFlight
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
        <CalenderFlightUi
          isVisible={searchCalendar}
          closeModal={() => setSearchCalendar(false)}
          // markedDates={markedDates}
          // setmarkedDates={(d) => setmarkedDates(d)}
          onSelect={(d) => {
            console.log("SELECTED_DATE :", d)
            setcheckinDate(d.dateString)
            setSearchCalendar(false)
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
              <View style={{
                height: 450,
                backgroundColor: '#fff',
                bottom: 0,
                position: 'absolute',
                width: '100%',
                // ju:'center'
              }}>
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
                    Select Traveller & Class
                  </Text>
                </View>
                <View style={{ padding: 20, paddingBottom: 0 }}>
                  <Text style={{ fontWeight: '600', fontSize: 13, color: 'grey' }}>ADD NUMBER OF TRAVELLERS</Text>
                </View>

                {/* ADULTS */}
                <View style={style.selectBoxE}>
                  <View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={style.mainText}>Adults</Text>
                      <Text style={[style.innerMainText, { marginLeft: 5, fontSize: 10, alignSelf: 'center' }]}>12 yrs & above</Text>
                    </View>
                    <Text style={style.innerMainText}>on the day of travel</Text>
                  </View>

                  <TouchableOpacity style={style.mainSelectBox}
                  // onPress={()}
                  >
                    <TouchableOpacity
                    onPress={()=>{
                      if(adult != 1){
                        setAdult(adult-1)
                        return
                      }
                      }}
                    >
                      <Icon1 name="remove" size={20} color="#0F63F4" />
                    </TouchableOpacity>
                    <Text>{adult}</Text>
                    <TouchableOpacity
                     onPress={()=>setAdult(adult+1)}
                    >
                      <Icon1 name="add" size={20} color="#0F63F4" />
                    </TouchableOpacity>
                  </TouchableOpacity>

                </View>

                {/* CHILDREN */}
                {/* <View style={style.selectBoxE}>
                  <View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={style.mainText}>Children</Text>
                      <Text style={[style.innerMainText, { marginLeft: 5, fontSize: 10, alignSelf: 'center' }]}>2 - 12 yrs</Text>
                    </View>
                    <Text style={style.innerMainText}>on the day of travel</Text>
                  </View>

                  <TouchableOpacity style={style.mainSelectBox}
                  // onPress={()}
                  >
                    <TouchableOpacity
                     onPress={()=>{
                      if(children != 0){
                        setChildren(children-1)
                        return
                      }
                    }}
                    >
                      <Icon1 name="remove" size={20} color="#0F63F4" />
                    </TouchableOpacity>
                    <Text>{children}</Text>
                    <TouchableOpacity
                     onPress={()=>setChildren(children+1)}
                    >
                      <Icon1 name="add" size={20} color="#0F63F4" />
                    </TouchableOpacity>
                  </TouchableOpacity>

                </View> */}

                {/* Infants */}
                {/* <View style={style.selectBoxE}>
                  <View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={style.mainText}>Infants</Text>
                      <Text style={[style.innerMainText, { marginLeft: 5, fontSize: 10, alignSelf: 'center' }]}>Under 2 yrs</Text>
                    </View>
                    <Text style={style.innerMainText}>on the day of travel</Text>
                  </View>

                  <TouchableOpacity style={style.mainSelectBox}
                  // onPress={()}
                  >
                    <TouchableOpacity
                     onPress={()=>{
                      if(infants != 0){
                        setInfants(infants-1)
                        return
                      }
                    
                    }}
                    >
                      <Icon1 name="remove" size={20} color="#0F63F4" />
                    </TouchableOpacity>
                    <Text>{infants}</Text>
                    <TouchableOpacity
                     onPress={()=>setInfants(infants+1)}
                    >
                      <Icon1 name="add" size={20} color="#0F63F4" />
                    </TouchableOpacity>
                  </TouchableOpacity>

                </View> */}

                {/* <View style={{backgroundColor:'red',margin:20,borderRadius:10}}>
                  <View style={{padding:10}}>
                    <Text style={{fontSize:12}}>
                      Introducing Group Booking.
                      <Text>Now book for more than 9 travellers</Text>
                      with ease.
                    </Text>
                  </View>
                </View> */}
                <View style={{ padding: 20, paddingBottom: 0 }}>
                  <Text style={{ fontWeight: '600', fontSize: 13, color: 'grey' }}>CHOOSE CABIN CLASS</Text>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginTop: hp('2%'),
                    }}>

                    {/* ONE WAY */}
                    <TouchableOpacity
                      onPress={() => setcabin("Economy/Premium Economy")}
                      style={cabin == "Economy/Premium Economy" ? style.mainSelectedc : style.mainUnselectedc}>
                      <View style={{ padding: 5, bottom: 5 }}>
                        <Text
                          style={cabin == "Economy/Premium Economy" ? style.mainSelectedText : style.mainUnselectedText}>
                          Economy/Premium Economy
                        </Text>
                      </View>
                    </TouchableOpacity>
                    {/* ROUND TRIP */}
                    <TouchableOpacity
                      onPress={() => setcabin("Premium Economy")}
                      style={cabin == "Premium Economy" ? style.mainSelectedc : style.mainUnselectedc}>
                      <View style={{ padding: 5, bottom: 5 }}>
                        <Text
                          style={cabin == "Premium Economy" ? style.mainSelectedText : style.mainUnselectedText}>
                          Premium Economy
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginTop: hp('2%'),
                      width:'60%'
                      // padding:20
                    }}>

                    {/* ONE WAY */}
                    <TouchableOpacity
                      onPress={() => setcabin("Business")}
                      style={cabin == "Business" ? style.mainSelectedc : style.mainUnselectedc}>
                      <View style={{ padding: 5, bottom: 5 }}>
                        <Text
                          style={cabin == "Business" ? style.mainSelectedText : style.mainUnselectedText}>
                          Business
                        </Text>
                      </View>
                    </TouchableOpacity>
                    {/* ROUND TRIP */}
                    <TouchableOpacity
                      onPress={() => setcabin("First Class")}
                      style={cabin == "First Class" ? style.mainSelectedc : style.mainUnselectedc}>
                      <View style={{ padding: 5, bottom: 5 }}>
                        <Text
                          style={cabin == "First Class" ? style.mainSelectedText : style.mainUnselectedText}>
                          First Class
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>

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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  checkboxContainer: {
    flexDirection: 'row',
    // marginBottom: 20,
    marginLeft: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  mainUnselected: {
    backgroundColor: '#fff',
    width: wp('26%'),
    height: 40,
    borderRadius: 4,
    borderColor: '#CDCDCD',
    borderWidth: 0.5,
    // padding:5
  },
  mainUnselectedText: {
    fontSize: 14,
    color: '#707070',
    textAlign: 'center',
    marginTop: 14,
    fontWeight: '500'
  },
  mainSelected: {
    backgroundColor: '#0759E2',
    width: wp('26%'),
    height: 40,
    borderRadius: 4,
  },
  mainSelectedc: {
    backgroundColor: '#0759E2',
    // width: wp('26%'),
    height: 40,
    borderRadius: 4,
  },
  mainUnselectedc: {
    backgroundColor: '#fff',
    // width: wp('26%'),
    height: 40,
    borderRadius: 4,
    borderColor: '#CDCDCD',
    borderWidth: 0.5,
    // padding:5
  },
  mainSelectedText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginTop: 14,
    fontWeight: '500'
  },
  selectOption: {
    textAlign: 'center',
    marginLeft: 5,
    marginTop: 4,
    color: '#707070',
    fontSize: 12,
    alignSelf: 'center'
  },
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
  mainText: {
    fontSize: 16,
    fontWeight: '600',
    color: "#000"
  },
  innerMainText: {
    fontSize: 12,
    fontWeight: '400',
    color: "grey",

  },
  selectBoxE: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center'
  },
  searchButton:{
    backgroundColor: '#0759E2',
    width: wp('80%'),
    alignSelf: 'center',
    height: hp('6%'),
    borderRadius: 5,
    marginTop: hp('2%'),
    justifyContent: 'center',
    marginBottom: hp('2%')
  }
});

// export default Flight;
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

export default connect(mapStateToProps, mapDispatchToProps)(Flight);
