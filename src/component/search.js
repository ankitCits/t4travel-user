import * as React from 'react';
import { Alert, FlatList, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ActivityIndicator } from 'react-native-paper';


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
export default function Search(props) {

    const Item = ({ title }) => (
        <TouchableOpacity style={style.item}
        onPress={()=>props.onSelectCity(title)}
        >
            <Text style={style.title}>{title.city}</Text>
        </TouchableOpacity>
    );
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
                                    size={30}
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
                                Search City
                            </Text>
                        </View>
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
                    // onPress={() => setSearchModal(true)}
                    >
                        <Text style={{ fontSize: 10, color: 'grey' }}>
                            Select City, Location or Hotel Name (Worldwide)
                        </Text>
                        <TextInput
                            style={style.input}
                            onChangeText={(t) => props.onChangeKey(t)}
                            placeholder="Search City"

                        // keyboardType="numeric"
                        />
                        {/* <Text style={{ fontSize: 13, color: 'black', fontWeight: '500' }}>
                            Greater Noida, India */}
                        {/* </Text> */}
                    </TouchableOpacity>
                    <View style={style.underLine} />


                    <View style={{ marginTop: '5%', alignItems: 'center', }}>
                        {props.modaLoader ?
                            <ActivityIndicator size="small" color={"#0F63F4"} />
                            :
                            <FlatList
                                data={props.fetchResultState}
                                renderItem={({ item }) => <Item title={item} />}
                                keyExtractor={item => item.id}
                            />
                        }

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
