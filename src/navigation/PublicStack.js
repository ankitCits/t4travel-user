import React, {useEffect, useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Public from "../screen/public"
import Login from '../screen/public/login';
import Signup from '../screen/public/signup';
import ForgetPasswordOtp from '../screen/public/forgetpasswordOtp';
import SignupVerify from '../screen/public/signupVerify';
import ForgetPasswordEmail from '../screen/public/forgetpassword';

const Stack = createStackNavigator();

function PublicStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: '#fff',
        width: '60%',
      },
    }}
    initialRouteName={"Login"}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgetPasswordOtp" component={ForgetPasswordOtp} />
      <Stack.Screen name="SignupVerify" component={SignupVerify} />
      <Stack.Screen name="ForgetPasswordEmail" component={ForgetPasswordEmail} />
    </Stack.Navigator>
  );
}

export default PublicStack