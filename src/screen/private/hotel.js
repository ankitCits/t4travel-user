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
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import CommonBase from '../../component/CommonBase';
import { useNavigation } from '@react-navigation/native';
// const myIcon = <Icon name="keyboard-arrow-down" size={30} color="#900" />;

const Hotel = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
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
                      marginLeft: wp('20%'),
                      marginTop: hp('2.5%'),
                      alignItems:'center',
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
                }}>
                <Text style={{fontSize: 12, color: 'grey'}}>
                  Select City, Location or Hotel Name (Worldwide)
                </Text>
                <Text style={{fontSize: 13, color: 'black', fontWeight: '500'}}>
                  Greater Noida, India
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
                  left:10
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
                  style={{position: 'absolute', marginLeft: wp('1%')}}
                />
                <Image
                  source={require('../../assets/images/sell.png')}
                  style={{position: 'absolute', marginLeft: wp('3%')}}
                />

                <Text
                  style={{
                    position: 'absolute',
                    marginLeft: wp('8%'),
                    fontSize: 12,
                    fontWeight: '500',
                    color:'#fff'
                  }}>
                  Flexi stay
                </Text>

                <Text
                  style={{
                    position: 'absolute',
                    fontSize: 12,
                    marginLeft: wp('27%'),
                    fontWeight: '500',
                    color:'#fff'
                  }}>
                  Anytime check-in/check-out
                </Text>
                <Image
                  source={require('../../assets/icons/info.png')}
                  style={{position: 'absolute', marginLeft: wp('72%')}}
                />
                <View style={{right:50}}>
                  <Icon1 name="toggle-on" size={40} color="#939393" />
                </View>
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
                  justifyContent:'space-between'
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../../assets/icons/calender.png')}
                    style={{ marginLeft: wp('2%'),alignSelf:'flex-end',marginRight:wp('2%')}}
                  />
                  <View style={{alignSelf:'center'}}>
                    <Text style={{fontSize: 11, color: 'grey'}}>
                    Check-in
                    </Text>
                    <Text style={{fontSize: 12, color: 'black', fontWeight: 'bold'}}>
                    27 Jan Fri, 2023
                    </Text>
                  </View>
                </View>
                <View >
                  <Text style={{fontSize: 12, color: '#0759E2',textAlign:'right'}}>
                  Check-out
                  </Text>
                  <Text style={{fontSize: 12, color: 'black', fontWeight: '500'}}>
                  27 Jan Sun, 2023
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
                  justifyContent:'space-between'
                }}>
                <View style={{flexDirection: 'row'}}>

                  <View style={{alignSelf:'center'}}>
                    <Text style={{fontSize: 12, color: 'grey'}}>
                    Traveller & Hotel
                    </Text>
                    <Text style={{fontSize: 13, color: 'black', fontWeight: '500'}}>
                    2 Travellers, 1 Room
                    </Text>
                  </View>
                </View>
                <View style={{alignSelf:'center'}}>
                <Icon1 name="keyboard-arrow-down" size={30} color="#000" />
                </View>
              </View>

              <TouchableOpacity style={style.searchButton}
              onPress={()=>navigation.navigate("HotelSearchResult")}
              >
                <Text style={
                  {
                    textAlign: 'center',
                    color: '#fff',
                    fontSize: 14,
                    alignItems:'center',
                    fontWeight:'500'
                  }
                }>Search Hotels</Text>
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
    // justifyContent:''
  },
  underLine:{
    height:1,
    // flex:1,
    backgroundColor:"grey",
    opacity:0.5,
    width:'92%',
    alignSelf:'center'
  },
  searchButton:{
    backgroundColor:'#0759E2',
    width:wp('80%'),
    alignSelf:'center',
    height:hp('6%'),
    borderRadius:5,
    marginTop:hp('2%'),
    justifyContent:'center',
    marginBottom:10
  }
});

export default Hotel;
