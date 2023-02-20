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
import IconI from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const myIcon = <Icon name="calendar" size={30} color="#900" />;
const Accountdetail = (props) => {
  const navigation = useNavigation();
  const data = [
    {
      month : 'Jan',
      year :'2022',
      dowload : 'Download',
    },
    {
      month : 'Feb',
      year :'2022',
      dowload : 'Download',
    },
    {
      month : 'Mar',
      year :'2022',
      dowload : 'Download',
    },
    {
      month : 'Apr',
      year :'2022',
      dowload : 'Download',
    },
    {
      month : 'May',
      year :'2022',
      dowload : 'Download',
    },
    {
      month : 'Jun',
      year :'2022',
      dowload : 'Download',
    },
    {
      month : 'Jul',
      year :'2022',
      dowload : 'Download',
    },
    {
      month : 'Aug',
      year :'2022',
      dowload : 'Download',
    },
    {
      month : 'Sep',
      year :'2022',
      dowload : 'Download',
    },
    {
      month : 'Oct',
      year :'2022',
      dowload : 'Download',
    },
    {
      month : 'Nov',
      year :'2022',
      dowload : 'Download',
    },
    {
      month : 'Dec',
      year :'2022',
      dowload : 'Download',
    },
  ];

  console.log("PROPS_IN_ACCOUNT_DETAIL>",props)
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
      <StatusBar
        animated={true}
        backgroundColor="#0759E2"
        barStyle="dark-content"
      />
      <ScrollView contentContainerStyle={{backgroundColor: '#FFFFFF'}}>
        <View style={style.header}>
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
            <Iconss name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontWeight: '500',
                textAlign: 'center',
                marginLeft: wp('20%'),
              }}>
              Account Detail
            </Text>
          </View>
        </View>
        <View
          style={style.mainBox}>
           <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:hp('2%'),paddingBottom:hp('2%'),borderBottomColor:'#00000017',borderBottomWidth:1}}>
             <View style={{flexDirection:'row',alignSelf:'center'}}>
             <Image
                source={require('../../assets/images/profile.jpg')}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 17,
                  marginLeft: wp('4%'),
                }}
              />
              <Text style={{color:'#707070',fontSize:14,marginTop:hp('1%'),marginLeft:wp('3%')}}>
              Wallet balance
              </Text>

             </View>
             <Text style={{color:'#000',fontSize:18,fontWeight:'500',marginRight:wp('2%')}}>
             0.00$
              </Text>

           </View>
           <Text style={{fontSize:14,fontWeight:'500',color:'#000',marginLeft:wp('5%'),marginTop:hp('3%')}}>Date Range</Text>
           <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:hp('1%'),marginLeft:wp('2%')}}>
              <View style={{flexDirection:'row',marginLeft:wp('5%'),}}>
                  <TouchableOpacity style={{borderColor:'#C5C5C5',borderRadius:4,width:wp('25%'),height:hp('3.5%'),borderWidth:1,flexDirection:'row',alignItems:'center'}}>

                      <Icon name="calendar" size={22} color="#000" />
                      <Text style={{color:'#C5C5C5',fontSize:12}}>Start Date</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{borderColor:'#C5C5C5',borderRadius:4,width:wp('25%'),height:hp('3.5%'),borderWidth:1,flexDirection:'row',alignItems:'center',marginLeft:wp('2%')}}>

                      <Icon name="calendar" size={22} color="#000" />
                      <Text style={{color:'#C5C5C5',fontSize:12}}>End Date</Text>
                  </TouchableOpacity>
              </View>
              <Text style={{color:'#019123',fontSize:12,fontWeight:'500',marginRight:wp('5%'),alignSelf:"center"}}>
                Download
              </Text>
           </View>

          </View>
        <View
          style={style.secondBox}>
          <Text
            style={{
              color: 'black',
              fontSize: 13,
              textAlign: 'center',
              fontWeight: '500',
            }}>
            Periodic Statement
          </Text>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{borderColor:'#C5C5C5',borderRadius:4,width:wp('25%'),height:hp('3.5%'),borderWidth:1,flexDirection:'row',alignItems:'center'}}>

              <Icon name="search" size={25} color="#C5C5C5" />
              <Text style={{color:'#C5C5C5',fontSize:11}}>Search</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{borderColor:'#C5C5C5',borderRadius:4,width:wp('18%'),height:hp('3.5%'),borderWidth:1,flexDirection:'row',alignItems:'center',marginLeft:6}}>


              <Text style={{color:'#C5C5C5',fontSize:11,marginLeft:5,marginRight:7}}>Year</Text>
              <Icons name="keyboard-arrow-down" size={20} color="black" />
           </TouchableOpacity>

          </View>
        </View>

        <FlatList
          style={{backgroundColor: '#F5F6FB'}}
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#ffff',
                height: hp('6%'),
                justifyContent: 'space-between',
                paddingLeft: wp('3%'),
                paddingRight: wp('3%'),
                alignItems: 'center',
                marginTop: hp('1%'),
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  textAlign: 'center',
                  fontWeight: '300',
                  marginLeft:6
                }}>
                {/* 27-01-2023 */}
                {item.month}
              </Text>
              <Text
                style={{
                  color: '#0759E2',
                  fontSize: 12,
                  textAlign: 'center',
                  fontWeight: '300',
                }}>
                {item.year}
              </Text>
              <Text
                style={{
                  color: '#019123',
                  fontSize: 12,
                  textAlign: 'center',
                  fontWeight: '300',
                  marginRight:5
                }}>
                {item.dowload}
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
    width: wp('90%'),
    height: hp('24%'),
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: hp('-10%'),
    marginBottom:hp('2%'),
    elevation: 5,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  secondBox:{
    flexDirection: 'row',
    backgroundColor: '#F5F6FB',
    height: hp('8%'),
    justifyContent: 'space-between',
    paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
    alignItems: 'center',
  }
});

export default Accountdetail;
