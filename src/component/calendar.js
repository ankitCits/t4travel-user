import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import * as React from 'react';
import { Alert, FlatList, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ActivityIndicator } from 'react-native-paper';
import moment from 'moment';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];
export default function CalendarUi(props) {
    const[isStartDatePicked, setisStartDatePicked] = React.useState(false)
    const[isEndDatePicked, setisEndDatePicked] = React.useState(false)
    const[startDate, setstartDate] = React.useState('')

    onDayPress = (day) => {
        if (isStartDatePicked == false) {
            props.onSelect({"start":true,day})
            console.log("START>",day.dateString)
            let markedDates = {}
            markedDates[day.dateString] = { startingDay: true, color: '#0F63F4', textColor: '#FFFFFF' };
            // this.setState({
            //     markedDates: markedDates,
            //     isStartDatePicked: true,
            //     isEndDatePicked: false,
            //     startDate: day.dateString,
            // });
            // console.log("MArked>>>",markedDates)
            props.setmarkedDates(markedDates)
            setisStartDatePicked(true)
            setisEndDatePicked(false)
            setstartDate(day.dateString)
        } else {
            props.onSelect({"end":true,day})
            console.log("END>",day.dateString)
            // console.log("MArked",markedDates)
            let markedDatess = props.markedDates
            let startDates = moment(startDate);
            let endDate = moment(day.dateString);
            let range = endDate.diff(startDates, 'days')
            if (range > 0) {
                for (let i = 1; i <= range; i++) {
                    let tempDate = startDates.add(1, 'day');
                    tempDate = moment(tempDate).format('YYYY-MM-DD')
                    if (i < range) {
                        markedDatess[tempDate] = { color: '#0F63F4', textColor: '#FFFFFF' };
                    } else {
                        markedDatess[tempDate] = { endingDay: true, color: '#0F63F4', textColor: '#FFFFFF' };
                    }
                }
                // this.setState({
                //     markedDates: markedDates,
                //     isStartDatePicked: false,
                //     isEndDatePicked: true,
                //     startDate: ''
                // });
                props.setmarkedDates(markedDatess)
                setisStartDatePicked(false)
                setisEndDatePicked(true)
                setstartDate('')

                console.log("MARKED FINAL>",markedDatess)
                props.closeModal()
            } else {
                alert('Select an upcomming date!');
            }
        }
    }
    // console.log("PROPS_IN_SEARCH_COMPONENT", props)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.isVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has now been closed.');
                }}>
                <View style={{
                    flex: 1,
                    // justifyContent: "center",
                    // alignItems: "center",
                    backgroundColor: '#fff',
                }}>
                    <View style={{ marginTop: '10%' }}>
                        <View style={style.headerapp}>
                            <TouchableOpacity
                                onPress={() => {
                                    props.closeModal()
                                    // if (props.route.params) {
                                    //     navigation.pop()
                                    // } else {
                                    //     navigation.openDrawer()
                                    // }
                                }}
                            >
                                <Icon
                                    name="close"
                                    size={25}
                                    color="#000"
                                    style={{ marginLeft: wp('2%') }}
                                />
                            </TouchableOpacity>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: '#000',
                                    fontWeight: '500',
                                    textAlign: 'center',
                                    marginLeft: wp('30%'),
                                    // marginTop: hp('2.5%'),
                                    alignItems: 'center',
                                }}>
                                Select Date
                            </Text>
                        </View>
                    </View>
                    <View>
                    <CalendarList
                        // Callback which gets executed when visible months change in scroll view. Default = undefined
                        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                        // Max amount of months allowed to scroll to the past. Default = 50
                        pastScrollRange={50}
                        // Max amount of months allowed to scroll to the future. Default = 50
                        futureScrollRange={50}
                        // Enable or disable scrolling of calendar list
                        scrollEnabled={true}
                        // Enable or disable vertical scroll indicator. Default = false
                        showScrollIndicator={true}
                        minDate={new Date()}
                        //   ...calendarParams
                        // onDayPress={day => {
                        //     console.log('selected day', day);
                        //     props.onSelect(day)
                        //   }}

                        //   onSuccess={(start,end)=>{
                        //     console.log("DAY___",start,":",end)
                        //     setState({
                        //         ...start,
                        //         fromDate:state,
                        //         toDate:end
                        //     })
                        //   }}

                        monthFormat={"MMMM yyyy"}
                        markedDates={props.markedDates}
                        markingType="period"
                        hideExtraDays={true}
                        hideDayNames={true}
                        onDayPress={onDayPress}
                    />
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

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
        alignItems: 'center'
    },
    underLine: {
        height: 1,
        // flex:1,
        backgroundColor: "grey",
        opacity: 0.5,
        width: '92%',
        alignSelf: 'center'
    },
    input: {
        height: 20,
        // margin: 12,
        // borderWidth: 1,
        // padding: 10,
    },
    container: {
        flex: 1,
        marginTop: 0,
    },
    item: {
        // backgroundColor: 'grey',
        padding: 0,
        marginVertical: 5,
        // marginHorizontal: 16,
        width: wp('92%')
    },
    title: {
        fontSize: 12,
        color: '#000',
        padding: 10
    },
});
