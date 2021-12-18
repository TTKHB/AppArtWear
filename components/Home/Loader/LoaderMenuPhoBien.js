import React from 'react';
import {View,ScrollView,SafeAreaView} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LoaderMenuPhoBien= () => {
  return (
	  <SafeAreaView >
	  <ScrollView >
{/*Tat ca Tim kiem Pho biến */}
		  <SkeletonPlaceholder>
	  <View style={{marginTop: 50, flexDirection: 'row'}}>
      <View style={{marginLeft:35,marginTop: 6, width: 150, height: 200, borderRadius: 4}} />
	  <View style={{marginLeft:15,marginTop: 6, width: 150, height: 200, borderRadius: 4}} />
	  </View>
</SkeletonPlaceholder>
	  <SkeletonPlaceholder>
	  <View style={{marginStart:1, flexDirection: 'row',marginTop:10}}>
      <View style={{marginLeft:35,marginTop: 6, width: 150, height: 200, borderRadius: 4}} />
	  <View style={{marginLeft:15,marginTop: 6, width: 150, height: 200, borderRadius: 4}} />
	  </View>
</SkeletonPlaceholder>
<SkeletonPlaceholder>
	  <View style={{marginStart:1, flexDirection: 'row',marginTop:10}}>
      <View style={{marginLeft:35,marginTop: 6, width: 150, height: 200, borderRadius: 4}} />
	  <View style={{marginLeft:15,marginTop: 6, width: 150, height: 200, borderRadius: 4}} />
	  </View>
</SkeletonPlaceholder>

	</ScrollView>
	</SafeAreaView>
  );
};

export default LoaderMenuPhoBien;
