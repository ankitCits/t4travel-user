import React, {useEffect, useContext} from 'react';
import {NavigationContainer,useNavigationContainerRef} from '@react-navigation/native';
// import {navigationRef} from './rootNavigation';

import PublicRoute from './PublicStack';
import MyDrawer from './drawer';
import {ActivityIndicator, View} from 'react-native';
import PrivateStack from './PrivateStack';
const Navigation = ({props}) => {
//   const authContext = useContext(AuthContext);
//   const {userToken, isLoading} = authContext;
const userToken="null"
const isLoading=false
  useEffect(() => {
    setTimeout(() => {
      // SplashScreen.hide();
    }, 1000);
    console.log(userToken);
  }, []);

  const navRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navRef} options={{headerShown: false}}>
      {
        isLoading ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <ActivityIndicator size="small" color={'#0759E2'} />
          </View>
        ) : userToken == null ? (
          <PublicRoute />
        ) : (
          <PrivateStack />
        )
        // <PrivateRoute />
      }
    </NavigationContainer>
  );
};

export default Navigation;
