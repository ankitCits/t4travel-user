import React, {useState} from 'react';
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
  } from 'react-native';
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import Icon from 'react-native-vector-icons/FontAwesome5';


export default function CommonBase() {
    const [outerScaleValue] = useState(new Animated.Value(1));
    const [innerScaleValue] = useState(new Animated.Value(1));
    const [email, setEmail] = useState('');
    const handleSubmit = () => {
        // Add code to handle the submit action here
        console.log('Submitting email:', email);
      };
    const animateOuterImage = () => {
        Animated.timing(outerScaleValue, {
          toValue: 0.9,
          duration: 500,
        }).start();
      };
    
      const restoreOuterImage = () => {
        Animated.timing(outerScaleValue, {
          toValue: 1,
          duration: 500,
        }).start();
      };
    
      const animateInnerImage = () => {
        Animated.timing(innerScaleValue, {
          toValue: 0.9,
          duration: 500,
        }).start();
      };
    
      const restoreInnerImage = () => {
        Animated.timing(innerScaleValue, {
          toValue: 1,
          duration: 500,
        }).start();
      };
  return (
    <>
    <SafeAreaView>
    <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp('90%'),
            alignSelf: 'center',
            marginTop:'5%'
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                fontSize: 11,
                // fontFamily: 'Roboto',
                color: '#0759E2',
                fontWeight: '500',
              }}>
              FEATURED TOURS
            </Text>
            <Text
              style={{
                fontSize: 13,
                // fontFamily: 'Roboto',
                color: '#000',
                fontWeight: '500',
              }}>
              Most Popular Tours
            </Text>
          </View>
          <TouchableOpacity style={{alignSelf: 'center'}}>
            <Text
              style={{
                fontSize: 11,
                // fontFamily: 'Roboto',
                color: '#0759E2',
                fontWeight: '500',
                textAlign: 'center',
              }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          // vertical={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            height: hp('25%'),
            borderEndColor: 'grey',
            marginBottom:"-10%"
            // borderBottomWidth: 1,
          }}>
          <TouchableOpacity
            style={{width: wp('25%'), height: hp('25%'), alignSelf: 'center'}}>
            <Image
              source={require('../assets/images/dubai.png')}
              style={{alignSelf: 'center'}}
            />
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                textAlign: 'center',
                marginTop: hp('-5%'),
              }}>
              Dubai
            </Text>
            <Text
              style={{
                fontSize: 11,
                color: '#0759E2',
                textAlign: 'center',
                marginTop: hp('0.5%'),
              }}>
              Flight - Hotel
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{width: wp('25%'), height: hp('25%'), alignSelf: 'center'}}>
            <Image
              source={require('../assets/images/dubai.png')}
              style={{alignSelf: 'center'}}
            />
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                textAlign: 'center',
                marginTop: hp('-5%'),
              }}>
              Australia
            </Text>
            <Text
              style={{
                fontSize: 11,
                color: '#0759E2',
                textAlign: 'center',
                marginTop: hp('0.5%'),
              }}>
              Flight - Hotel
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{width: wp('25%'), height: hp('25%'), alignSelf: 'center'}}>
            <Image
              source={require('../assets/images/dubai.png')}
              style={{alignSelf: 'center'}}
            />
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                textAlign: 'center',
                marginTop: hp('-5%'),
              }}>
              India
            </Text>
            <Text
              style={{
                fontSize: 11,
                color: '#0759E2',
                textAlign: 'center',
                marginTop: hp('0.5%'),
              }}>
              Flight - Hotel
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={{width: wp('25%'), height: hp('25%'), alignSelf: 'center'}}>
            <Image
              source={require('../assets/images/dubai.png')}
              style={{alignSelf: 'center'}}
            />
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                textAlign: 'center',
                marginTop: hp('-5%'),
              }}>
              Mumbai
            </Text>
            <Text
              style={{
                fontSize: 11,
                color: '#0759E2',
                textAlign: 'center',
                marginTop: hp('0.5%'),
              }}>
              Flight - Hotel
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={{width: wp('25%'), height: hp('25%'), alignSelf: 'center'}}>
            <Image
              source={require('../assets/images/dubai.png')}
              style={{alignSelf: 'center'}}
            />
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                textAlign: 'center',
                marginTop: hp('-5%'),
              }}>
              Dubai
            </Text>
            <Text
              style={{
                fontSize: 11,
                color: '#0759E2',
                textAlign: 'center',
                marginTop: hp('0.5%'),
              }}>
              Flight - Hotel
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={style.underLine} />
        <View style={{marginLeft: wp('5%'), height: hp('8%'), top: hp('2%')}}>
          <Text
            style={{
              fontSize: 14,
              // fontFamily: 'Roboto',
              color: '#000',
              fontWeight: '500',
              // textAlign:'center'
            }}>
            Best Destinations Offers
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#939393',
              top:5
            }}>
            An enim nullam tempor gravida donec enim congue
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{}}>
          <TouchableWithoutFeedback
            onPressIn={animateOuterImage}
            onPressOut={restoreOuterImage}
            style={{
              width: wp('40%'),
              alignSelf: 'center',
              borderRadius: 20,
              marginLeft: wp('5%'),
            }}>
            <Animated.View style={{transform: [{scale: outerScaleValue}]}}>
              <TouchableWithoutFeedback
                onPressIn={animateInnerImage}
                onPressOut={restoreInnerImage}>
                <Animated.View style={{transform: [{scale: innerScaleValue}]}}>
                  <View
                    style={{
                      width: wp('40%'),
                      alignSelf: 'center',
                      borderRadius: 20,
                      left: wp('2%'),
                      // height:100
                    }}>
                    <Image
                      source={require('../assets/images/water.png')}
                      style={style.destinationImages}
                    />
                    <View style={style.destinationImagesText}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#000',
                        textAlign: 'center',
                        position: 'absolute',
                        // top: 125,
                        fontWeight: '600',
                        marginLeft: wp('3%'),
                        left:10,
                        bottom:25
                      }}>
                      Hotels
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        color: '#000',
                        textAlign: 'center',
                        position: 'absolute',
                        // top: 140,
                        fontWeight: '500',
                        marginLeft: wp('3%'),
                        left:10,
                        bottom:15
                      }}>
                      Lorem Ipsum is simply...
                    </Text>
                    </View>

                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPressIn={animateOuterImage}
            onPressOut={restoreOuterImage}
            style={{
              width: wp('40%'),
              alignSelf: 'center',
              borderRadius: 20,
              marginLeft: wp('5%'),
            }}>
            <Animated.View style={{transform: [{scale: outerScaleValue}]}}>
              <TouchableWithoutFeedback
                onPressIn={animateInnerImage}
                onPressOut={restoreInnerImage}>
                <Animated.View style={{transform: [{scale: innerScaleValue}]}}>
                  <View
                    style={{
                      width: wp('40%'),
                      alignSelf: 'center',
                      borderRadius: 20,
                      left: wp('2%'),
                      // height:100
                    }}>
                    <Image
                      source={require('../assets/images/water.png')}
                      style={style.destinationImages}
                    />
                    <View style={style.destinationImagesText}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#000',
                        textAlign: 'center',
                        position: 'absolute',
                        // top: 125,
                        fontWeight: '600',
                        marginLeft: wp('3%'),
                        left:10,
                        bottom:25
                      }}>
                      Hotels
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        color: '#000',
                        textAlign: 'center',
                        position: 'absolute',
                        // top: 140,
                        fontWeight: '500',
                        marginLeft: wp('3%'),
                        left:10,
                        bottom:15
                      }}>
                      Lorem Ipsum is simply...
                    </Text>
                    </View>

                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>
            </Animated.View>
          </TouchableWithoutFeedback>
        </ScrollView>
        <ImageBackground
          source={require('../assets/images/rafting.jpg')}
          style={{height: 180, marginTop: hp('3%'),opacity:0.7}}>
          <View style={{alignSelf: 'center'}}>
            <Text
              style={{
                fontSize: 14,
                color: '#000',
                // fontFamily: 'roboto',
                fontWeight: '700',
                textAlign: 'center',
                marginTop: hp('5%'),
              }}>
              Our Video
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                // fontFamily: 'Open Sans',
                fontWeight: '900',
                textAlign: 'center',
              }}>
              Travel Tips and Advice
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                width: 50,
                height: 50,
                borderRadius: 25,
                borderWidth: 1,
                alignSelf: 'center',
                borderStyle: 'dotted',
                borderColor: 'black',
                borderStartWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name="play"
                size={23}
                color="#0759E2"
                style={{marginLeft: 3}}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={{marginTop: hp('5%'), marginBottom: hp('6%')}}>
          <View
            style={{
              backgroundColor: '#5DA6C7',
              width: wp('94%'),
              height: hp('20%'),
              borderRadius: 10,
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <View style={{width: wp('42%')}}>


            </View>
            <View style={{width: wp('52%')}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  // fontFamily: 'Roboto',
                  fontWeight: '600',
                  marginTop: hp('5%'),
                  marginBottom: hp('2%'),
                }}>
                Subscribe Newsletter ${'\n'}Get Company News.
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={style.input}
                  placeholder="Email Your Email"
                  placeholderTextColor="#939393"
                  keyboardType="email-address"
                  onChangeText={email => setEmail(email)}
                  value={email}
                />
                <TouchableOpacity style={style.button} onPress={handleSubmit}>
                  <Image
                    source={require('../assets/icons/send.png')}
                    style={{alignSelf: 'center'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={style.container1}>
          <View
            style={{backgroundColor: '#032444', height: hp('25%'), zIndex: -1}}>
            <Text
              style={{
                fontSize: 12,
                color: 'white',
                marginTop: hp('5%'),
                marginLeft: wp('5%'),
              }}>
              TESTIMONIALS
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                fontWeight: '600',
                marginLeft: wp('5%'),
                top:5
              }}>
              What Our Happy Clients Say
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={style.scrollView}>
            <View
              style={style.reviewBox}>
              <Image
                source={require('../assets/images/star.png')}
                style={{marginTop:hp('2%'),marginLeft:wp('3%')}}
              />
              <Text style={{fontSize:12,color:'#5F5F5F',marginTop:hp('1%'),marginLeft:wp('3%')}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
              <View style={{flexDirection:'row',marginTop:hp('2%'),justifyContent:'space-between'}}>
              <View style={{flexDirection:'row',marginTop:hp('2%'),marginLeft:wp('2%')}}>
              <Image
                source={require('../assets/images/profile.jpg')}
                style={{width:50,height:50,borderRadius:30}}
              />
              <View style={{flexDirection:'column',marginLeft:wp('2%')}}>
              <Text style={{fontSize:14,fontWeight:'bold' ,color:'#000000',marginTop:hp('1%')}}>Jenny Kitson</Text>
              <Text style={{fontSize:12,fontWeight:'bold',color:'#0759E2'}}>U.S.A</Text>

              </View>

              </View>
              <Text style={{fontSize:30,color:'#0759E2',marginTop:hp('2%'),marginRight:wp("4%")}}>
                "
              </Text>

              </View>
            </View>
            <View
              style={style.reviewBox}>
              <Image
                source={require('../assets/images/star.png')}
                style={{marginTop:hp('2%'),marginLeft:wp('3%')}}
              />
              <Text style={{fontSize:12,color:'#5F5F5F',marginTop:hp('1%'),marginLeft:wp('3%')}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
              <View style={{flexDirection:'row',marginTop:hp('2%'),justifyContent:'space-between'}}>
              <View style={{flexDirection:'row',marginTop:hp('2%'),marginLeft:wp('2%')}}>
              <Image
                source={require('../assets/images/profile.jpg')}
                style={{width:50,height:50,borderRadius:30}}
              />
              <View style={{flexDirection:'column',marginLeft:wp('2%')}}>
              <Text style={{fontSize:14,fontWeight:'bold' ,color:'#000000',marginTop:hp('1%')}}>Jenny Kitson</Text>
              <Text style={{fontSize:12,fontWeight:'bold',color:'#0759E2'}}>U.S.A</Text>

              </View>

              </View>
              <Text style={{fontSize:30,color:'#0759E2',marginTop:hp('2%'),marginRight:wp("4%")}}>
                "
              </Text>

              </View>
            </View>
          </ScrollView>
        </View>

        <View style={{marginBottom:-150}} />
        </View>
    </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
    container: {
      width: wp('100%'),
      // height: hp('100%'),
      backgroundColor: 'white',
      color: 'white',
    },
    homeimg: {
      height: hp('30%'),
      // borderRadius:20
    },
    image: {
      width: wp('100%'),
      height: hp('25%'),
      // borderBottomEndRadius:25,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      backgroundColor: '#000000',
      opacity: 0.7
      // position:'relative'
    },
    titleinfo: {
      fontSize: 14,
      color: '#0759E2',
      // fontFamily: 'Roboto',
      textAlign: 'center',
      marginTop:7.5,
      // fontWeight:'500'
    },
    titleinfo1: {
      fontSize: 14,
      color: '#ACACAC',
      // fontFamily: 'Roboto',
      textAlign: 'center',
      marginTop:4
    },
  
    infobox: {
      // backgroundColor: 'red',
      height: hp('9%'),
      width: wp('20%'),
      borderRadius: 10,
      flexDirection: 'column',
      alignSelf: 'center',
      justifyContent: 'center',
      alignContent: 'center',
    },
    infobox1: {
      backgroundColor: '#E9F0FD',
      height: hp('9%'),
      width: wp('20%'),
      borderRadius: 10,
      flexDirection: 'column',
      alignSelf: 'center',
      justifyContent: 'center',
      alignContent: 'center',
    },
    viewinfo: {
      backgroundColor:'#fff',
      width: wp('90%'),
      height: hp('11%'),
      color: 'white',
      top: hp('-7%'),
      borderRadius: 5,
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      marginBottom:'-10%'
    },
  
    input: {
      width: '70%',
      height: 35,
      // borderColor: 'gray',
      // borderWidth: 1,
      backgroundColor: 'white',
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      paddingHorizontal:5,
      fontSize:12
    },
    button: {
      width: '20%',
      height: 35,
      backgroundColor: '#0759E2',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
    buttonText: {
      color: 'white',
    },
    container1: {
      // flex: 1,
      // width:wp('90%'),
      // alignItems: 'center',
      justifyContent: 'center',
      height: hp('60%'),
    },
    backgroundView: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'yellow',
  
      opacity: 0.5,
      zIndex: -1,
    },
    scrollView: {
      width: '100%',
      alignSelf: 'center',
      // height: '60%',
      // backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      zIndex: 1,
      color: 'black',
      marginTop: hp('-14%'),
    },
    text: {
      fontSize: 16,
      marginVertical: 10,
      color: 'red',
    },
    underLine:{
      height:0.5,
      flex:1,
      backgroundColor:"grey",
      opacity:0.5,
    },
    destinationImages:{
      alignSelf: 'center',
      opacity:0.6,
      height:200,
      borderRadius:10
    },
    destinationImagesText:{
      justifyContent:'flex-end'
    },
    reviewBox:{
      backgroundColor: 'white',
      width: wp('70%'),
      height: hp('20%'),
      borderRadius: 10,
      elevation: 5,
      marginRight:wp('4%'),
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
  
    }
  });
  