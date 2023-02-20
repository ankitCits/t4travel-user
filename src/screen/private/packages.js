import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native'
import CommonBase from '../../component/CommonBase';


export default function Packages() {
  return (
    <>
    <SafeAreaView>
    <ScrollView>
    <View style={{
          flex:1,
          backgroundColor:'#fff',
          // marginTop:'5%'
        }}>
          <CommonBase />
        </View>
    </ScrollView>
    </SafeAreaView>
    </>
  );
}