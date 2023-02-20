import React, { useState } from 'react';
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
  StatusBar,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const myIcon = <Icon name="arrowleft" size={30} color="#900" />;
const Setting = () => {
  const navigation = useNavigation();
  const [mainSelected, setMainSelected] = useState("mybooking")
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
                marginLeft: wp('32%'),
              }}>
              Setting
            </Text>
          </View>
        </View>
          <View>
                <Image
              source={require('../../assets/images/profile.jpg')}
              style={{
                width: 120,
                height: 120,
                borderColor: 'white',
                borderWidth: 3,
                borderRadius: 60,
                alignSelf: 'center',
                marginTop: hp('-8%'),
              }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: 'black',
                textAlign: 'center',
              }}>
              John Smith
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: '#0759E2',
                textAlign: 'center',
              }}>
              johnsmith@gmail.com
            </Text>
          </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: hp('8%'),
            height: hp('5%'),
            marginLeft: wp('2%'),
            marginBottom:'5%'
          }}>
          <TouchableOpacity
          onPress={()=>setMainSelected("mybooking")}
            style={mainSelected == "mybooking" ? style.chipContainerActive : style.chipContainer}>
            <Text
              style={mainSelected == "mybooking" ? style.chipLabelActive : style.chipLabel}>
              My Bookings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>{
            // setMainSelected("account")
            navigation.navigate('Accountdetail',{key:"props"})
          }}
            style={mainSelected == "account" ? style.chipContainerActive : style.chipContainer}>
            <Text
              style={mainSelected == "account" ? style.chipLabelActive : style.chipLabel}>
             Account Details
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
           onPress={()=>{
              // setMainSelected("employee")
              navigation.navigate('Employee')
            }}
            style={mainSelected == "employee" ? style.chipContainerActive : style.chipContainer}>
            <Text
              style={mainSelected == "employee" ? style.chipLabelActive : style.chipLabel}>
              Employee & Role Management
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
          </TouchableOpacity> */}
          {/* <View style={style.chipContainer}>
            <Text style={style.chipLabel}>Account Details</Text>
          </View>
          <View style={style.chipContainer}>
            <Text style={style.chipLabel}>Employee & Role Management</Text>
          </View>
          <View style={style.chipContainer}>
            <Text style={style.chipLabel}>Transaction & Credit Detail</Text>
          </View> */}
        </ScrollView>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#E3EDFF',
            height: hp('6%'),
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
              fontWeight: '500',
            }}>
            Destination
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                color: '#4C4C4C',
                fontSize: 13,
                textAlign: 'center',
                fontWeight: '500',
                marginRight: wp('12%'),
              }}>
              Date
            </Text>
            <Text
              style={{
                color: '#4C4C4C',
                fontSize: 13,
                textAlign: 'center',
                fontWeight: '500',
                marginRight: wp('2%'),
              }}>
              People
            </Text>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: hp('10%'),
            }}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Image
                source={require('../../assets/icons/dest.png')}
                style={{
                  width: 25,
                  height: 25,
                  borderColor: 'white',
                  marginLeft: 8,

                  borderRadius: 60,
                  alignSelf: 'center',
                  // marginTop: hp('-8%'),
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  color: 'black',
                  alignSelf: 'center',
                  marginLeft: 8,
                }}>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 9}}>
                  05:00
                </Text>
                <Text style={{color: '#7C7C7C', fontSize: 10}}>Canada</Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  color: 'black',
                  marginLeft: 15,
                }}>
                <Text
                  style={{color: '#7C7C7C', fontSize: 10, textAlign: 'center'}}>
                  Duration 3h 30m
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      color: 'blue',
                      width: 5,
                      height: 5,
                      backgroundColor: '#0F63F4',
                      borderRadius: 5,
                    }}></View>
                  <View
                    style={{
                      backgroundColor: '#0F63F4',
                      width: 111,
                      height: 1,
                      alignItems: 'center',
                    }}></View>
                  <View
                    style={{
                      color: 'blue',
                      width: 5,
                      height: 5,
                      backgroundColor: '#0F63F4',
                      borderRadius: 5,
                    }}></View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: '#7C7C7C', fontSize: 10}}>Can</Text>
                  <Text
                    style={{
                      color: '#4C4C4C',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    05:00
                  </Text>
                  <Text style={{color: '#7C7C7C', fontSize: 10}}>Can</Text>
                </View>
                <Text
                  style={{
                    color: '#0F63F4',
                    fontSize: 10,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Bandung
                </Text>
              </View>
            </View>
            <Text style={{color: 'black', fontSize: 11, fontWeight: '500'}}>
              Jan 01, 2022
            </Text>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={{
                  width: 20,
                  height: 20,
                  // borderColor: 'white',
                  // borderWidth: 3,
                  borderRadius: 60,
                  // alignSelf: 'center',
                  // marginTop: hp('-8%'),
                  //  marginLeft:wp('-1%')
                }}
              />
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={{
                  width: 20,
                  height: 20,
                  // borderColor: 'white',
                  // borderWidth: 3,
                  borderRadius: 60,
                  marginLeft: wp('-2%'),
                  // alignSelf: 'center',
                  // marginTop: hp('-8%'),
                }}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: 'black',
                  borderWidth: 3,
                  marginLeft: wp('-2%'),
                  borderRadius: 60,
                }}>
                <Text
                  style={{color: 'white', fontSize: 9, textAlign: 'center'}}>
                  +2
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: hp('10%'),
            }}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Image
                source={require('../../assets/icons/dest.png')}
                style={{
                  width: 25,
                  height: 25,
                  borderColor: 'white',
                  marginLeft: 8,

                  borderRadius: 60,
                  alignSelf: 'center',
                  // marginTop: hp('-8%'),
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  color: 'black',
                  alignSelf: 'center',
                  marginLeft: 8,
                }}>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 9}}>
                  05:00
                </Text>
                <Text style={{color: '#7C7C7C', fontSize: 10}}>Canada</Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  color: 'black',
                  marginLeft: 15,
                }}>
                <Text
                  style={{color: '#7C7C7C', fontSize: 10, textAlign: 'center'}}>
                  Duration 3h 30m
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      color: 'blue',
                      width: 5,
                      height: 5,
                      backgroundColor: '#0F63F4',
                      borderRadius: 5,
                    }}></View>
                  <View
                    style={{
                      backgroundColor: '#0F63F4',
                      width: 111,
                      height: 1,
                      alignItems: 'center',
                    }}></View>
                  <View
                    style={{
                      color: 'blue',
                      width: 5,
                      height: 5,
                      backgroundColor: '#0F63F4',
                      borderRadius: 5,
                    }}></View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: '#7C7C7C', fontSize: 10}}>Can</Text>
                  <Text
                    style={{
                      color: '#4C4C4C',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    05:00
                  </Text>
                  <Text style={{color: '#7C7C7C', fontSize: 10}}>Can</Text>
                </View>
                <Text
                  style={{
                    color: '#0F63F4',
                    fontSize: 10,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Bandung
                </Text>
              </View>
            </View>
            <Text style={{color: 'black', fontSize: 11, fontWeight: 'bold'}}>
              Jan 01, 2022
            </Text>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={{
                  width: 20,
                  height: 20,
                  // borderColor: 'white',
                  // borderWidth: 3,
                  borderRadius: 60,
                  // alignSelf: 'center',
                  // marginTop: hp('-8%'),
                  //  marginLeft:wp('-1%')
                }}
              />
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={{
                  width: 20,
                  height: 20,
                  // borderColor: 'white',
                  // borderWidth: 3,
                  borderRadius: 60,
                  marginLeft: wp('-2%'),
                  // alignSelf: 'center',
                  // marginTop: hp('-8%'),
                }}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: 'black',
                  borderWidth: 3,
                  marginLeft: wp('-2%'),
                  borderRadius: 60,
                }}>
                <Text
                  style={{color: 'white', fontSize: 9, textAlign: 'center'}}>
                  +2
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: hp('10%'),
            }}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Image
                source={require('../../assets/icons/dest.png')}
                style={{
                  width: 25,
                  height: 25,
                  borderColor: 'white',
                  marginLeft: 8,

                  borderRadius: 60,
                  alignSelf: 'center',
                  // marginTop: hp('-8%'),
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  color: 'black',
                  alignSelf: 'center',
                  marginLeft: 8,
                }}>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 9}}>
                  05:00
                </Text>
                <Text style={{color: '#7C7C7C', fontSize: 10}}>Canada</Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  color: 'black',
                  marginLeft: 15,
                }}>
                <Text
                  style={{color: '#7C7C7C', fontSize: 10, textAlign: 'center'}}>
                  Duration 3h 30m
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      color: 'blue',
                      width: 5,
                      height: 5,
                      backgroundColor: '#0F63F4',
                      borderRadius: 5,
                    }}></View>
                  <View
                    style={{
                      backgroundColor: '#0F63F4',
                      width: 111,
                      height: 1,
                      alignItems: 'center',
                    }}></View>
                  <View
                    style={{
                      color: 'blue',
                      width: 5,
                      height: 5,
                      backgroundColor: '#0F63F4',
                      borderRadius: 5,
                    }}></View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: '#7C7C7C', fontSize: 10}}>Can</Text>
                  <Text
                    style={{
                      color: '#4C4C4C',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    05:00
                  </Text>
                  <Text style={{color: '#7C7C7C', fontSize: 10}}>Can</Text>
                </View>
                <Text
                  style={{
                    color: '#0F63F4',
                    fontSize: 10,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Bandung
                </Text>
              </View>
            </View>
            <Text style={{color: 'black', fontSize: 11, fontWeight: 'bold'}}>
              Jan 01, 2022
            </Text>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={{
                  width: 20,
                  height: 20,
                  // borderColor: 'white',
                  // borderWidth: 3,
                  borderRadius: 60,
                  // alignSelf: 'center',
                  // marginTop: hp('-8%'),
                  //  marginLeft:wp('-1%')
                }}
              />
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={{
                  width: 20,
                  height: 20,
                  // borderColor: 'white',
                  // borderWidth: 3,
                  borderRadius: 60,
                  marginLeft: wp('-2%'),
                  // alignSelf: 'center',
                  // marginTop: hp('-8%'),
                }}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: 'black',
                  borderWidth: 3,
                  marginLeft: wp('-2%'),
                  borderRadius: 60,
                }}>
                <Text
                  style={{color: 'white', fontSize: 9, textAlign: 'center'}}>
                  +2
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: hp('10%'),
            }}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Image
                source={require('../../assets/icons/dest.png')}
                style={{
                  width: 25,
                  height: 25,
                  borderColor: 'white',
                  marginLeft: 8,

                  borderRadius: 60,
                  alignSelf: 'center',
                  // marginTop: hp('-8%'),
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  color: 'black',
                  alignSelf: 'center',
                  marginLeft: 8,
                }}>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 9}}>
                  05:00
                </Text>
                <Text style={{color: '#7C7C7C', fontSize: 10}}>Canada</Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  color: 'black',
                  marginLeft: 15,
                }}>
                <Text
                  style={{color: '#7C7C7C', fontSize: 10, textAlign: 'center'}}>
                  Duration 3h 30m
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      color: 'blue',
                      width: 5,
                      height: 5,
                      backgroundColor: '#0F63F4',
                      borderRadius: 5,
                    }}></View>
                  <View
                    style={{
                      backgroundColor: '#0F63F4',
                      width: 111,
                      height: 1,
                      alignItems: 'center',
                    }}></View>
                  <View
                    style={{
                      color: 'blue',
                      width: 5,
                      height: 5,
                      backgroundColor: '#0F63F4',
                      borderRadius: 5,
                    }}></View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: '#7C7C7C', fontSize: 10}}>Can</Text>
                  <Text
                    style={{
                      color: '#4C4C4C',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    05:00
                  </Text>
                  <Text style={{color: '#7C7C7C', fontSize: 10}}>Can</Text>
                </View>
                <Text
                  style={{
                    color: '#0F63F4',
                    fontSize: 10,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Bandung
                </Text>
              </View>
            </View>
            <Text style={{color: 'black', fontSize: 11, fontWeight: 'bold'}}>
              Jan 01, 2022
            </Text>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={{
                  width: 20,
                  height: 20,
                  // borderColor: 'white',
                  // borderWidth: 3,
                  borderRadius: 60,
                  // alignSelf: 'center',
                  // marginTop: hp('-8%'),
                  //  marginLeft:wp('-1%')
                }}
              />
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={{
                  width: 20,
                  height: 20,
                  // borderColor: 'white',
                  // borderWidth: 3,
                  borderRadius: 60,
                  marginLeft: wp('-2%'),
                  // alignSelf: 'center',
                  // marginTop: hp('-8%'),
                }}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: 'black',
                  borderWidth: 3,
                  marginLeft: wp('-2%'),
                  borderRadius: 60,
                }}>
                <Text
                  style={{color: 'white', fontSize: 9, textAlign: 'center'}}>
                  +2
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: hp('10%'),
            }}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Image
                source={require('../../assets/icons/dest.png')}
                style={{
                  width: 25,
                  height: 25,
                  borderColor: 'white',
                  marginLeft: 8,

                  borderRadius: 60,
                  alignSelf: 'center',
                  // marginTop: hp('-8%'),
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  color: 'black',
                  alignSelf: 'center',
                  marginLeft: 8,
                }}>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 9}}>
                  05:00
                </Text>
                <Text style={{color: '#7C7C7C', fontSize: 10}}>Canada</Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  color: 'black',
                  marginLeft: 15,
                }}>
                <Text
                  style={{color: '#7C7C7C', fontSize: 10, textAlign: 'center'}}>
                  Duration 3h 30m
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      color: 'blue',
                      width: 5,
                      height: 5,
                      backgroundColor: '#0F63F4',
                      borderRadius: 5,
                    }}></View>
                  <View
                    style={{
                      backgroundColor: '#0F63F4',
                      width: 111,
                      height: 1,
                      alignItems: 'center',
                    }}></View>
                  <View
                    style={{
                      color: 'blue',
                      width: 5,
                      height: 5,
                      backgroundColor: '#0F63F4',
                      borderRadius: 5,
                    }}></View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: '#7C7C7C', fontSize: 10}}>Can</Text>
                  <Text
                    style={{
                      color: '#4C4C4C',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    05:00
                  </Text>
                  <Text style={{color: '#7C7C7C', fontSize: 10}}>Can</Text>
                </View>
                <Text
                  style={{
                    color: '#0F63F4',
                    fontSize: 10,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Bandung
                </Text>
              </View>
            </View>
            <Text style={{color: 'black', fontSize: 11, fontWeight: 'bold'}}>
              Jan 01, 2022
            </Text>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={{
                  width: 20,
                  height: 20,
                  // borderColor: 'white',
                  // borderWidth: 3,
                  borderRadius: 60,
                  // alignSelf: 'center',
                  // marginTop: hp('-8%'),
                  //  marginLeft:wp('-1%')
                }}
              />
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={{
                  width: 20,
                  height: 20,
                  // borderColor: 'white',
                  // borderWidth: 3,
                  borderRadius: 60,
                  marginLeft: wp('-2%'),
                  // alignSelf: 'center',
                  // marginTop: hp('-8%'),
                }}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: 'black',
                  borderWidth: 3,
                  marginLeft: wp('-2%'),
                  borderRadius: 60,
                }}>
                <Text
                  style={{color: 'white', fontSize: 9, textAlign: 'center'}}>
                  +2
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: hp('10%'),
            }}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Image
                source={require('../../assets/icons/dest.png')}
                style={{
                  width: 25,
                  height: 25,
                  borderColor: 'white',
                  marginLeft: 8,

                  borderRadius: 60,
                  alignSelf: 'center',
                  // marginTop: hp('-8%'),
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  color: 'black',
                  alignSelf: 'center',
                  marginLeft: 8,
                }}>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 9}}>
                  05:00
                </Text>
                <Text style={{color: '#7C7C7C', fontSize: 10}}>Canada</Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  color: 'black',
                  marginLeft: 15,
                }}>
                <Text
                  style={{color: '#7C7C7C', fontSize: 10, textAlign: 'center'}}>
                  Duration 3h 30m
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      color: 'blue',
                      width: 5,
                      height: 5,
                      backgroundColor: '#0F63F4',
                      borderRadius: 5,
                    }}></View>
                  <View
                    style={{
                      backgroundColor: '#0F63F4',
                      width: 111,
                      height: 1,
                      alignItems: 'center',
                    }}></View>
                  <View
                    style={{
                      color: 'blue',
                      width: 5,
                      height: 5,
                      backgroundColor: '#0F63F4',
                      borderRadius: 5,
                    }}></View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: '#7C7C7C', fontSize: 10}}>Can</Text>
                  <Text
                    style={{
                      color: '#4C4C4C',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    05:00
                  </Text>
                  <Text style={{color: '#7C7C7C', fontSize: 10}}>Can</Text>
                </View>
                <Text
                  style={{
                    color: '#0F63F4',
                    fontSize: 10,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Bandung
                </Text>
              </View>
            </View>
            <Text style={{color: 'black', fontSize: 11, fontWeight: 'bold'}}>
              Jan 01, 2022
            </Text>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={{
                  width: 20,
                  height: 20,
                  // borderColor: 'white',
                  // borderWidth: 3,
                  borderRadius: 60,
                  // alignSelf: 'center',
                  // marginTop: hp('-8%'),
                  //  marginLeft:wp('-1%')
                }}
              />
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={{
                  width: 20,
                  height: 20,
                  // borderColor: 'white',
                  // borderWidth: 3,
                  borderRadius: 60,
                  marginLeft: wp('-2%'),
                  // alignSelf: 'center',
                  // marginTop: hp('-8%'),
                }}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: 'black',
                  borderWidth: 3,
                  marginLeft: wp('-2%'),
                  borderRadius: 60,
                }}>
                <Text
                  style={{color: 'white', fontSize: 9, textAlign: 'center'}}>
                  +2
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: hp('10%'),
            }}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Image
                source={require('../../assets/icons/dest.png')}
                style={{
                  width: 25,
                  height: 25,
                  borderColor: 'white',
                  marginLeft: 8,

                  borderRadius: 60,
                  alignSelf: 'center',
                  // marginTop: hp('-8%'),
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  color: 'black',
                  alignSelf: 'center',
                  marginLeft: 8,
                }}>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 9}}>
                  05:00
                </Text>
                <Text style={{color: '#7C7C7C', fontSize: 10}}>Canada</Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  color: 'black',
                  marginLeft: 15,
                }}>
                <Text
                  style={{color: '#7C7C7C', fontSize: 10, textAlign: 'center'}}>
                  Duration 3h 30m
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      color: 'blue',
                      width: 5,
                      height: 5,
                      backgroundColor: '#0F63F4',
                      borderRadius: 5,
                    }}></View>
                  <View
                    style={{
                      backgroundColor: '#0F63F4',
                      width: 111,
                      height: 1,
                      alignItems: 'center',
                    }}></View>
                  <View
                    style={{
                      color: 'blue',
                      width: 5,
                      height: 5,
                      backgroundColor: '#0F63F4',
                      borderRadius: 5,
                    }}></View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: '#7C7C7C', fontSize: 10}}>Can</Text>
                  <Text
                    style={{
                      color: '#4C4C4C',
                      fontSize: 10,
                      fontWeight: 'bold',
                    }}>
                    05:00
                  </Text>
                  <Text style={{color: '#7C7C7C', fontSize: 10}}>Can</Text>
                </View>
                <Text
                  style={{
                    color: '#0F63F4',
                    fontSize: 10,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Bandung
                </Text>
              </View>
            </View>
            <Text style={{color: 'black', fontSize: 11, fontWeight: 'bold'}}>
              Jan 01, 2022
            </Text>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={{
                  width: 20,
                  height: 20,
                  // borderColor: 'white',
                  // borderWidth: 3,
                  borderRadius: 60,
                  // alignSelf: 'center',
                  // marginTop: hp('-8%'),
                  //  marginLeft:wp('-1%')
                }}
              />
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={{
                  width: 20,
                  height: 20,
                  // borderColor: 'white',
                  // borderWidth: 3,
                  borderRadius: 60,
                  marginLeft: wp('-2%'),
                  // alignSelf: 'center',
                  // marginTop: hp('-8%'),
                }}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: 'black',
                  borderWidth: 3,
                  marginLeft: wp('-2%'),
                  borderRadius: 60,
                }}>
                <Text
                  style={{color: 'white', fontSize: 9, textAlign: 'center'}}>
                  +2
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    // flex :1,
    backgroundColor: '#0759E2',
    width: wp('100%'),
    height: hp('18%'),
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
    backgroundColor: '#0759E2',
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
    color: '#ffff',
    fontWeight: '400',
    textAlign: 'center',
  }
});

export default Setting;
