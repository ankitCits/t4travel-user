import React, {useState} from 'react';
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
} from 'react-native';
// import CheckBox from 'react-native-community/checkbox'
import Icon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import CommonBase from '../../component/CommonBase';
// import Icon from "react-native-vector-icons/MaterialIcons";
// const myIcon = <Icon name="keyboard-arrow-down" size={30} color="#900" />;

import { useNavigation } from '@react-navigation/native';
const Flight = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [remember, setRemember] = useState(false);
  const [mainSelected, setMainSelected] = useState("one")
  const navigation = useNavigation();
  
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{backgroundColor: 'white',}}>
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
          <Icon
              name="arrowleft"
              size={30}
              color="#000"
              style={{marginTop: hp('2%'), marginLeft: wp('2%')}}
            />
          </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                fontWeight: '500',
                textAlign: 'center',
                marginLeft: wp('25%'),
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
            onPress={()=>setMainSelected("one")}
              style={mainSelected == "one" ? style.mainSelected : style.mainUnselected}>
              <Text
                style={mainSelected == "one" ? style.mainSelectedText : style.mainUnselectedText}>
                ONE WAY
              </Text>
            </TouchableOpacity>
        {/* ROUND TRIP */}
        <TouchableOpacity
         onPress={()=>setMainSelected("round")}
              style={mainSelected == "round" ? style.mainSelected : style.mainUnselected}>
              <Text
                style={mainSelected == "round" ? style.mainSelectedText : style.mainUnselectedText}>
                ROUND TRIP
              </Text>
            </TouchableOpacity>
        {/* MULTI CITY */}
        <TouchableOpacity
        onPress={()=>setMainSelected("multi")}
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
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/images/plane.png')}
                style={{
                  marginLeft: wp('2%'),
                  alignSelf: 'flex-end',
                  marginRight: wp('2%'),
                }}
              />
              <View>
                <Text style={{fontSize: 11, color: 'grey'}}>From</Text>
                <Text style={{fontSize: 12, color: '#000', fontWeight: '500'}}>
                  New Delhi{' '}
                  <Text style={{fontSize: 13, color: 'grey', fontWeight: '700'}}>
                    DEL
                  </Text>
                </Text>
              </View>
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
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/images/planeout.png')}
                style={{
                  marginLeft: wp('2%'),
                  alignSelf: 'flex-end',
                  marginRight: wp('2%'),
                }}
              />
              <View>
                <Text style={{fontSize: 11, color: 'grey'}}>TO</Text>
                <Text style={{fontSize: 12, color: '#000', fontWeight: '500'}}>
                  Mumbai{' '}
                  <Text style={{fontSize: 13, color: 'grey', fontWeight: '700'}}>
                    BOM
                  </Text>
                </Text>
              </View>
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
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/icons/calender.png')}
                style={{
                  marginLeft: wp('2%'),
                  alignSelf: 'flex-end',
                  marginRight: wp('2%'),
                }}
              />
              <View>
                <Text style={{fontSize: 11, color: 'grey'}}>Check-in</Text>
                <Text style={{fontSize: 12, color: 'black', fontWeight: '500'}}>
                  27 Jan Fri, 2023
                </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity>
              <Text style={{fontSize: 12, color: '#0759E2', textAlign: 'right'}}>
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
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={{fontSize: 11, color: 'grey'}}>Traveller & Class</Text>
                <Text style={{fontSize: 12, color: 'black', fontWeight: '500'}}>
                  1, Economy/ Premium Economy
                </Text>
              </View>
            </View>
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <Icon1 name="keyboard-arrow-down" size={30} color="#000" />
            </TouchableOpacity>
          </View>


            <View style={{ margin:20,flexDirection:'row'}}>
              <View style={{flexDirection: 'column'}}>
                <View style={style.checkboxContainer}>
                  {remember ? (
                    <TouchableOpacity
                      style={{marginTop: 2}}
                      onPress={() => setRemember(false)}>
                      <Icon1 name="check-box" size={22} color="#707070" />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={{marginTop: 2}}
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
                      style={{marginTop: 2}}
                      onPress={() => setRemember(false)}>
                      <Icon1 name="check-box" size={23} color="#707070" />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={{marginTop: 2}}
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

            <View style={{flexDirection:'column'}}>
              <View style={style.checkboxContainer}>
                {remember ? (
                  <TouchableOpacity
                    style={{marginTop: 2}}
                    onPress={() => setRemember(false)}>
                    <Icon1 name="check-box" size={23} color="#707070" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{marginTop: 2}}
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
                    style={{marginTop: 2}}
                    onPress={() => setRemember(false)}>
                    <Icon1 name="check-box" size={23} color="#707070" />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{marginTop: 2}}
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
            style={{
              backgroundColor: '#0759E2',
              width: wp('80%'),
              alignSelf: 'center',
              height: hp('6%'),
              borderRadius: 5,
              marginTop: hp('2%'),
              justifyContent:'center',
              marginBottom:hp('2%')
            }}
            onPress={()=>navigation.navigate("FlightSearchResult")}
            >
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontSize: 14,
                alignItems:'center',
                fontWeight:'500'
              }}>
              Search Flights
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flex:1,
          backgroundColor:'#fff',
          // marginTop:'5%'
        }}>
          <CommonBase />
        </View>
      </ScrollView>
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
    borderBottomWidth: 1.5,
    borderBottomColor: '#00000029',
    backgroundColor: 'white',
    color: 'black',
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
  mainUnselected:{
    backgroundColor: '#fff',
    width: wp('26%'),
    height: 40,
    borderRadius: 4,
    borderColor: '#CDCDCD',
    borderWidth: 0.5,
  },
  mainUnselectedText:{
    fontSize: 12,
    color: '#707070',
    textAlign: 'center',
    marginTop: 14,
  },
  mainSelected:{
    backgroundColor: '#0759E2',
    width: wp('26%'),
    height: 40,
    borderRadius: 4,
  },
  mainSelectedText:{
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    marginTop: 14,
    fontWeight:'600'
  },
  selectOption:{
    textAlign: 'center', 
    marginLeft: 5, 
    marginTop: 4,
    color:'#707070',
  fontSize:12,
  alignSelf:'center'
  }
});

export default Flight;
