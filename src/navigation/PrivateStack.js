import React, {useEffect, useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Employee from '../screen/private/employee';
import Transtions from '../screen/private/transaction';
import Accountdetail from '../screen/private/account';
import Profile from '../screen/private/profile';
import Drawer from './drawer'
import FlightSearchResult from '../screen/private/flightSearchResult';
import FlightSearchDeatil from '../screen/private/flightSearchDetail';
import Payments from '../screen/private/payment';
import HotelSearchResult from '../screen/private/hotelSearchResult';
import HotelSearchDetail from '../screen/private/hotelSearchDetail';
import HotelCheckout from '../screen/private/hotelCheckout';
import Flight from '../screen/private/flight';
import Hotel from '../screen/private/hotel';
import HolidayPlanner from '../screen/private/holidayPlanner';
import HolidayplannerList from '../screen/private/holidayPlannerList';
import HotelCardQuatation from '../screen/private/hotelCardQuatation';
import HolidayPayment from '../screen/private/holidayPayment';
import MyBottomTabs from './bottom';
const Stack = createStackNavigator();

function PrivateStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#fff',
          width: '60%',
        },
      }}
      initialRouteName="Drawer"
    >
      {/* <Stack.Screen name="MyBottomTabs" component={MyBottomTabs} /> */}
      <Stack.Screen name="Drawer" component={Drawer} />
      {/* <Stack.Screen name="Employee" component={Employee} /> */}
      {/* <Stack.Screen name="Transtions" component={Transtions} /> */}
      <Stack.Screen name="Accountdetail" component={Accountdetail} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Flight" component={Flight} />
      <Stack.Screen name="Hotel" component={Hotel} />
      <Stack.Screen name="FlightSearchResult" component={FlightSearchResult} />
      <Stack.Screen name="FlightSearchDeatil" component={FlightSearchDeatil} />
      <Stack.Screen name="Payments" component={Payments} />
      <Stack.Screen name="HotelSearchResult" component={HotelSearchResult} />
      <Stack.Screen name="HotelSearchDetail" component={HotelSearchDetail} />
      <Stack.Screen name="HotelCheckout" component={HotelCheckout} />
      <Stack.Screen name="HolidayPlanner" component={HolidayPlanner} />
      <Stack.Screen name="HolidayplannerList" component={HolidayplannerList} />
      <Stack.Screen name="HotelCardQuatation" component={HotelCardQuatation} />
      <Stack.Screen name="HolidayPayment" component={HolidayPayment} />
    </Stack.Navigator>
  );
}

export default PrivateStack