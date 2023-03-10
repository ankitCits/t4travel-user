import moment from 'moment';
import {Platform} from 'react-native';
import * as RNLocalize from 'react-native-localize';
// import Intl from 'react-native-intl'
import 'intl';
import 'intl/locale-data/jsonp/en';

/**
import {
    Analytics,
    Hits as GAHits,
    Experiment as GAExperiment
  } from 'react-native-google-analytics';
*/

const Util = {
  /**
   * Is the text is empty or not
   * @param {*} text
   * @return Boolean true|false
   */
  isEmpty: function(text) {
    return !text || text.trim().length === 0;
  },

    /**
   * Is the text is 10digit or not
   * @param {*} text
   * @return Boolean true|false
   */
    // isEmpty: function(text) {
    //   return !text || text.trim().length === 0;
    // },

  /**
   * Validate mobile number
   * @param {*} mobileNumber
   * @return Boolean true|false
   */
  validMobile: function(mobileNumber) {
    if (this.isEmpty(mobileNumber)) {
      return {
        status: false,
        message: 'Please enter your mobile number',
      };
    } else {
      if (
        // mobileNumber.trim().length === 9 ||
        mobileNumber.trim().length === 10
      ) {
        return {
          status: true,
          message: '',
        };
      } else {
        return {
          status: false,
          message: 'Please enter your mobile number in between 9 and 10.',
        };
      }
    }
  },


    /* Reformat a date like 2016-10-14 as dd MMM
  ** @param {string} s - date string to reformat
  ** @returns {string}
  */
  formatDDMMM:function(s) {
    if(this.isEmpty(s)){
      return "22 Feb 2024"
    }
    var months = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
    var b = s.split(/\D/);
    return b[2] + ' ' + months[b[1] - 1] + ' ' + b[[1] - 1];
  },

  /**
   * Check whether terms and condition is accepted or not
   * @param {*} isAgreed
   * @return Boolean true|false
   */
  isTermsAccepted: function(isAgreed) {
    if (typeof isAgreed === 'boolean') {
      if (isAgreed) {
        return {
          status: true,
          message: 'You are aggreed',
        };
      } else {
        return {
          status: false,
          message: 'You are not aggreed',
        };
      }
    } else {
      return {
        status: false,
        message: 'You are not aggreed',
      };
    }
  },

  /**
   * Validate whether text having alphabets and space or not
   * @param {*} value
   * return Boolean true|false
   */
  isValidName: function(value) {
    const regEx = /^[a-zA-Z ]+$/;

    if (!value) {
      return false;
    }
    if (value.trim().match(regEx)) {
      return true;
    } else {
      return false;
    }
  },

  /**
   * Validate whether text with in a range or not
   * @param {*} min
   * @param {*} max
   * return Boolean true|false
   */
  isValidRange: function(value, min, max) {
    let textLength = 0;
    if (value) {
      textLength = value.trim().length;
    }
    if (textLength >= min && textLength <= max) {
      return true;
    } else {
      return false;
    }
  },

  /**
   * Validate whether text is valid email or not
   * @param {*} value
   */
  isValidEmail: function(value) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!value) {
      return false;
    }

    if (regEx.test(value.trim())) {
      return true;
    } else {
      return false;
    }
  },

  /**
   * Validate whether Date is valid Date format or not [02-03-1989]
   * @param {*} value
   */
   isValiDate: function(value) {
    const regEx = /(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;;
    if (!value) {
      return false;
    }
    if (regEx.test(value)) {
      return true;
    } else {
      return false;
    }
  },
  /**
   * Validate user's first name
   * @param {*} value
   * @return object
   */
  validateFirstName: function(value) {
    if (this.isEmpty(value)) {
      return {
        status: false,
        message: 'First Name is required',
      };
    }

    if (!this.isValidName(value)) {
      return {
        status: false,
        message: 'Please enter alphabet',
      };
    }

    if (!this.isValidRange(value, 3, 50)) {
      return {
        status: false,
        message: 'First Name should be 3 to 50 characters in length',
      };
    }

    return {
      status: true,
      message: '',
    };
  },

  /**
   * Validate user's last name
   * @param {*} value
   * @return object
   */
  validateLastName: function(value) {
    if (this.isEmpty(value)) {
      return {
        status: false,
        message: 'Last Name is required',
      };
    }

    if (!this.isValidName(value)) {
      return {
        status: false,
        message: 'Please enter alphabet',
      };
    }

    if (!this.isValidRange(value, 3, 50)) {
      return {
        status: false,
        message: 'Last Name should be 3 to 50 characters in length',
      };
    }

    return {
      status: true,
      message: '',
    };
  },

  /**
   * Validate user's email
   * @param {*} value
   * @return object
   */
  validateEmail: function(value) {
    if (this.isEmpty(value)) {
      return {
        status: true,
        // message: 'Please enter your email',
      };
    }

    if (!this.isValidEmail(value)) {
      return {
        status: true,
        // message: 'Invalid email format',
      };
    }

    return {
      status: true,
      message: '',
    };
  },

     /**
   * Validate Date in DD-MM-YYYY format
   * @param {*} value
   * return Boolean true|false
   */
      validateDate: function(value) {
        if(value === undefined){
          return {
            status: false,
            message: 'Please enter your date of birth',
          };
        }
        if (this.isEmpty(value)) {
          return {
            status: false,
            message: 'Please enter your date of birth',
          };
        }
        if (!this.isValiDate(value)) {
          return {
            status: false,
            message: 'Invalid date format. Please enter date of birth in DD-MM-YYYY',
          };
        }
    
        return {
          status: true,
          message: '',
        };
        
      },



      //Change Date Patter
      changeDateFormat: function(inputDate){  // expects Y-m-d
        var splitDate = inputDate.split('-');
        if(splitDate.count == 0){
            return null;
        }
    
        var year = splitDate[0];
        var month = splitDate[1];
        var day = splitDate[2]; 
    
        return day + '\/' + month + '\/' + year;
    },


  /*method to convert time to time ago (IOS* Time) */
  getTimeAgo: function(time, showTime = true) {
    //time  =1583691640000;
    let timezone = RNLocalize.getTimeZone();
    const now = moment.tz(timezone).format('DD');
    const nowMonth = moment.tz(timezone).format('MM');
    let getTime = moment.tz(time, timezone).format('DD');
    let getMonth = moment.tz(time, timezone).format('MM');
    let yesterday = moment.tz(timezone).subtract(1, 'days').format('DD');

    if (showTime === true) {
      if (now === getTime && getMonth === nowMonth) {
        return `Today at ${moment(time).format('hh:mm A')}`;
      }
      if (yesterday === getTime && getMonth === nowMonth) {
        return `Yesterday at ${moment(time).format('hh:mm A')}`;
      } else {
        return moment(time).format('DD MMM YYYY, hh:mm A');
      }
    } else {
      if (now === getTime) {
        return `Today`;
      }
      if (yesterday === getTime) {
        return `Yesterday`;
      } else {
        return moment(time).format('DD MMM YYYY');
      }
    }
  },

  /*method to convert time to time ago (IOS* Time) */
  getDaysAgo: function(time) {
    let timezone = RNLocalize.getTimeZone();
    let currentTime = moment.tz(timezone).format('X');
    var diff = currentTime - time;

    // Time difference in seconds
    var sec = diff;
    // Convert time difference in minutes
    var min = (diff / 60).toFixed(0);
    // Convert time difference in hours
    var hrs = (diff / 3600).toFixed(0);
    // Convert time difference in days
    var days = (diff / 86400).toFixed(0);
    // Convert time difference in weeks
    var weeks = (diff / 604800).toFixed(0);
    // Convert time difference in months
    var mnths = (diff / 2600640).toFixed(0);
    // Convert time difference in years
    var yrs = (diff / 31207680).toFixed(0);
    if (days < 1) {
      return moment(time).format('DD MMM YYYY');
    } else if (days == 1) {
      return moment(time).format('DD MMM YYYY');
    } else {
      return moment(time).format('DD MMM YYYY');
    }
  },

  daysLeft: function(time) {
    console.log(time);
    var a = moment();
    var b = moment.unix(time);
    return a.diff(b, 'days'); // 1
  },
  upcomingDaysLeft: function(date) {
    // let currentTime = moment().unix();
    // let value = Math.ceil((time - currentTime) / (3600*24));
    // return value;
    // console.log(date)
    var a = moment();
    var b = moment.unix(date);
    // console.log("upcomingDaysLeft function",b.to(a, 'hour'), b, b.local(true), a)
    if (b.to(a, 'days') <= 0) {
      return b.to(a, 'hour');
    } else {
      return b.to(a, 'days');
    }
    // 1
  },
  daysLeftWhenChallengeOptOut_Failed: function(start_time, fail_time) {
    // let currentTime = moment().unix();
    // let value = Math.ceil((time - currentTime) / (3600*24));
    // return value;
    var a = moment.unix(start_time);
    var b = moment.unix(fail_time);
    if (Math.abs(a.diff(b, 'days')) == 0) {
      return 0;
    }
    return Math.abs(a.diff(b, 'days')); // 1
  },

  daysExpiry: function(time) {
    let timezone = RNLocalize.getTimeZone();
    let currentTime = moment.tz(timezone).format('X');

    var diff = time - currentTime;

    var sec = diff;
    // Convert time difference in minutes
    var min = diff / 60;
    // Convert time difference in hours
    var hrs = diff / 3600;
    // Convert time difference in days
    var days = diff / 86400;
    // Convert time difference in weeks
    var weeks = diff / 604800;
    // Convert time difference in months
    var mnths = diff / 2600640;
    // Convert time difference in years
    var yrs = diff / 31207680;
    if (days < 0) {
      return -1;
    } else {
      return Math.ceil(days);
    }
  },

  getChallangeStartIndexByStartDate: function(time) {
    let timezone = RNLocalize.getTimeZone();
    // let currentTime =   moment.tz(timezone).format('X');
    // let end         =   moment.tz(time * 1000, timezone).startOf('day').format('X');
    let current_moment = moment.tz(timezone);
    let end_moment = moment.tz(time * 1000, timezone).startOf('day');

    // var diff        =   end - currentTime;
    // var days        =   (diff / 86400 ).toFixed(0);
    return current_moment.diff(end_moment, 'days');
  },

  daysToX: function(time) {
    let timezone = RNLocalize.getTimeZone();
    let end = moment.unix(time).endOf('day');
    let start = moment();
    return end.to(start, true);
  },

  /*
   * [numberWithCommasInDecimal format the coins added commas]
   * @param {num decimal}
   * @return {two decimal string with formated coins}
   */
  numberWithCommasInDecimal: function(num) {
    num = parseFloat(num).toFixed(4);
    let str = num.toString();
    let result = str.substring(0, str.indexOf('.') + 3);
    result = parseFloat(result).toFixed(2);
    return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  /*
   * [numberWithCommas format the coins added commas]
   * @param {num Int}
   * @return {In string with formated coins}
   */
  numberWithCommas: function(num) {
    // result = parseFloat(num).toFixed(0);
    let obj = Intl.NumberFormat('en-US').format(num);
    // console.log('Format', obj)
    return `${obj}`;
  },

  /*
   * [nFormatter format the steps]
   * @param {num decimal}
   * @return {decimal number with formated}
   */
  nFormatter: function(num) {
    if (num >= 1000000000) {
      return roundedToFixed(num / 1000000000, 10) + 'G';
    }
    if (num >= 1000000) {
      return roundedToFixed(num / 1000000, 10) + 'M';
    }
    if (num >= 1000) {
      return roundedToFixed(num / 1000, 10) + 'K';
    }
    return num;
  },

  /*
   * [check Application Installed in Device]
   * @param {app_name	string} data
   * @return {row status true || false}
   */
//   checkAppInstalled: async function(app_name) {
//     return (promise = new Promise(function(resolve, reject) {
//       if (Platform.OS === 'android') {
//         let user_app = InstalledApps.getNonSystemApps();
//         console.log('user_app', user_app);
//         const index = user_app.findIndex(app => app == app_name);
//         if (index > -1) {
//           resolve(true);
//         } else {
//           resolve(false);
//         }
//       } else {
//         resolve(true);
//       }
//     }));
//   },

  /*
   * [get Device Unique Id of Device]
   * @return { return string || Unique Id }
   */
//   getdeviceUniqueId: function() {
//     let uniqueId = DeviceInfo.getUniqueId();
//     return uniqueId;
//   },

  /*
   * [get Device OS of Device]
   * @return { return string || Unique Id }
   */
//   getDeviceOS: function() {
//     let os = DeviceInfo.getSystemVersion();
//     return os;
//   },

  /*
   * [get Device OS of Device]
   * @return { return string || Unique Id }
   */
//   getDeviceToken: function() {
//     const fcmToken = firebase.messaging().getToken();
//     return fcmToken;
//   },

  setGoogleAnalytics: async function(screen_name) {
    // let config      = getConfiguration();
    // const trackingId  = config.anayticsTrackingId;
    // let clientId = DeviceInfo.getUniqueId();
    // let ga = new Analytics(trackingId , clientId, 1, await DeviceInfo.getUserAgent());
    // var screenView = new GAHits.ScreenView(
    //     'Fitze',
    //     screen_name,
    //     DeviceInfo.getReadableVersion(),
    //     DeviceInfo.getBundleId()
    // );
    //return ga.send(screenView);
    return {
      status: 0,
      message: 'code commented remove bottom return',
    };
  },
};
export default Util;

function roundedToFixed(digits, unit) {
  var decimals = digits - Math.floor(digits);
  return Math.floor(digits) + '.' + Math.floor(decimals * unit);
}