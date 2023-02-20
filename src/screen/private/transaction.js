import React, { useState } from 'react';
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
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialIcons';
import IconA from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const myIcon = <IconA name="eye-off-sharp" size={20} color="#808080" />;
const Transtions= () => {
  const navigation = useNavigation();
  const [mainSelected, setMainSelected] = useState("Opening Balance")
  const data = [
    { date: '27-01-2023',debit :'$50.00',credit:'$20.00',view:myIcon },
    { date: '27-01-2023',debit :'$50.00',credit:'$20.00',view:myIcon },
    { date: '27-01-2023',debit :'$50.00',credit:'$20.00',view:myIcon },
    { date: '27-01-2023',debit :'$50.00',credit:'$20.00',view:myIcon },
    { date: '27-01-2023',debit :'$50.00',credit:'$20.00',view:myIcon },
    { date: '27-01-2023',debit :'$50.00',credit:'$20.00',view:myIcon },
    { date: '27-01-2023',debit :'$50.00',credit:'$20.00',view:myIcon },
    { date: '27-01-2023',debit :'$50.00',credit:'$20.00',view:myIcon },
    { date: '27-01-2023',debit :'$50.00',credit:'$20.00',view:myIcon },




  ];

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{backgroundColor: '#FFFFFF'}}>
        <View style={style.header}>
          <View style={style.headerapp}>
          <TouchableOpacity
          style={{marginTop:5}}
            onPress={()=>navigation.pop()}
            >
            <Icon name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontWeight: '500',
                textAlign: 'center',
                marginLeft: wp('10%'),
                marginRight:wp('8%'),
                marginTop:hp('1%')
              }}>
              Transaction & credit details
            </Text>
            <View style={{flexDirection:'column',justifyContent:'center',alignSelf:'center'}}>


            <TouchableOpacity style={style.addButton}>
              <Icons name="add" size={17} color="#0759E2" />
            </TouchableOpacity>
            <Text style={
              {
                color:'white',
                fontSize:10,
                marginTop:hp('0.5%'),
                fontWeight:'500'
                }}>
            Add fund
            </Text>
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: hp('5%'),
              height: hp('10%'),
              marginLeft: wp('5%'),
            }}>
              <TouchableOpacity
          onPress={()=>setMainSelected("Opening Balance")}
            style={mainSelected == "Opening Balance" ? style.chipContainerActive : style.chipContainer}>
            <Text
              style={mainSelected == "Opening Balance" ? style.chipLabelActive : style.chipLabel}>
              Opening Balance
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>{
            setMainSelected("Recent transaction")
            // navigation.navigate('Accountdetail',{key:"props"})
          }}
            style={mainSelected == "Recent transaction" ? style.chipContainerActive : style.chipContainer}>
            <Text
              style={mainSelected == "Recent transaction" ? style.chipLabelActive : style.chipLabel}>
             Recent transaction
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>{
              setMainSelected("Total outstanding")
              // navigation.navigate('Total outstanding')
            }}
            style={mainSelected == "Total outstanding" ? style.chipContainerActive : style.chipContainer}>
            <Text
              style={mainSelected == "Total outstanding" ? style.chipLabelActive : style.chipLabel}>
              Total outstanding
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>{
            // setMainSelected("transaction")
            navigation.navigate("Transtions")
          }}
            style={mainSelected == "transaction" ? style.chipContainerActive : style.chipContainer}>
            <Text
              style={mainSelected == "transaction" ? style.chipLabelActive : style.chipLabel}>
              Transaction & Credit Detail
            </Text>
          </TouchableOpacity>
            {/* <View style={style.chipContainer}>
              <Text style={style.chipLabel}>Opening Balance</Text>
            </View>
            <View style={style.chipContainer}>
              <Text style={style.chipLabel1}>Recent transaction</Text>
            </View>
            <View style={style.chipContainer}>
              <Text style={style.chipLabel1}>Total outstanding</Text>
            </View>
            <View style={style.chipContainer}>
              <Text style={style.chipLabel1}>Credit line</Text>
            </View>
            <View style={style.chipContainer}>
              <Text style={style.chipLabel1}>Current Balance</Text>
            </View>
            <View style={style.chipContainer}>
              <Text style={style.chipLabel1}>Available Credit</Text>
            </View>
            <View style={style.chipContainer}>
              <Text style={style.chipLabel1}>Ledger Account</Text>
            </View> */}
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F5F6FB',
            height: hp('6%'),
            justifyContent: 'space-between',
            paddingLeft: wp('3%'),
            paddingRight: wp('3%'),
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              textAlign: 'center',
              fontWeight: '500',
            }}>
            Debit
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              textAlign: 'center',
              fontWeight: '500',
            }}>
            Credit
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              textAlign: 'center',
              fontWeight: '500',
            }}>
            Date
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              textAlign: 'center',
              fontWeight: '500',
            }}>
            View
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
            height: hp('8%'),
            justifyContent: 'space-between',
            paddingLeft: wp('3%'),
            paddingRight: wp('3%'),
            alignItems: 'center',
            marginTop:hp('1%')
          }}>
          <Text
            style={{
              color: '#FF4848',
              fontSize: 12,
              textAlign: 'center',
              fontWeight: '500',
            }}>
            {/* 27-01-2023 */}
            {item.debit}
          </Text>
          <Text
            style={{
              color: '#0BA900',
              fontSize: 12,
              textAlign: 'center',
              fontWeight: '500',
            }}>
            {item.credit}
          </Text>
          <Text
            style={{
              color: '#0759E2',
              fontSize: 12,
              textAlign: 'center',
              fontWeight: '500',
            }}>
            {item.date}
          </Text>
          <View
            style={{
              color: '#000',
              fontSize: 12,
              textAlign: 'center',
              fontWeight: '500',
            }}>
            {item.view}
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
    justifyContent: 'flex-start',
    marginLeft: wp('2%'),
    marginTop: hp('2%'),
    // alignItems:'center',
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
    // width: wp('25%'),
    height: hp('4%'),
  },
  chipContainer: {
    backgroundColor: '#EBF3FF',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    // width: wp('25%'),
    height: hp('4%'),
    justifyContent:'center'
  },
  chipLabel: {
    fontSize: 12,
    color: '#2D3133',
    fontWeight: '400',
    textAlign: 'center',
  },
  chipContainerActive:{
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    // width: wp('27%'),
    height: hp('4%'),
    justifyContent:'center'
  },
  chipLabelActive:{
    fontSize: 12,
    color: '#0759E2',
    fontWeight: '400',
    textAlign: 'center',
  },
  addButton:{
    width:30,
    height:30,
    backgroundColor:'white',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:wp('2%'),
  }
});

export default Transtions;
