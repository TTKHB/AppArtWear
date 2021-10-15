import React from "react";
import {View,SafeAreaView,ScrollView}  from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const LoaderProfile = () => {
  return (
      <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} height={3000}>
    <SkeletonPlaceholder>
      <View style={{ flexDirection: "row",marginTop:50,marginLeft:5}}>
        <View style={{ width: 60, height:60, borderRadius: 50 }} />
        <View style={{ marginLeft: 20 }}>
          <View style={{ width: 200, height: 20, borderRadius: 4 }} />
          <View
            style={{ marginTop: 6, width: 150, height: 20, borderRadius: 4 }}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
    <SkeletonPlaceholder >
	  <View style={{marginTop: 50,alignItems: 'center'}}>
      <View style={{marginTop: 6, width:370, height: 140, borderRadius: 4}} />
      <View style={{marginTop: 6, width:370, height: 180, borderRadius: 4}} />
      <View style={{marginTop: 6, width:370, height: 180, borderRadius: 4}} />
      <View style={{marginTop: 6, width:370, height: 140, borderRadius: 4}} />
	  </View>
    </SkeletonPlaceholder>
</ScrollView>
</SafeAreaView>

  );
};
export default LoaderProfile