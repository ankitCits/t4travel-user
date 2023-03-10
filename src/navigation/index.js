import React, { useEffect, useContext } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
// import {navigationRef} from './rootNavigation';

import PublicRoute from './PublicStack';
import MyDrawer from './drawer';
import { ActivityIndicator, View } from 'react-native';
import PrivateStack from './PrivateStack';
import { connect } from 'react-redux';
const Navigation = (props) => {
  //   const authContext = useContext(AuthContext);
  //   const {userToken, isLoading} = authContext;
  const userToken = props.redux.userDataReducer.userValidator
  const isLoading = false
  useEffect(() => {
    setTimeout(() => {
      // SplashScreen.hide();
    }, 1000);
    console.log(userToken);
  }, []);

  const navRef = useNavigationContainerRef();
  console.log("REDUX_IN_NAV_INDEX>>", props.redux.userDataReducer)
  return (
    <NavigationContainer ref={navRef} options={{ headerShown: false }}>
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
        ) : userToken ? (
          <PrivateStack />
        ) : (
          <PublicRoute />
        )
        // <PrivateRoute />
      }
    </NavigationContainer>
  );
};

// export default Navigation;
// dispatcher functions
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

//getting props from redux
function mapStateToProps(state) {
  let redux = state;
  return { redux };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

