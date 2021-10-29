import React from 'react';
import {View,ScrollView,SafeAreaView,Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const {height, width} = Dimensions.get('window');
const LoaderFavorite = () => {
  return (
	  <SafeAreaView >
	  <ScrollView >
		  <SkeletonPlaceholder>
          <View
              style={{marginTop: 9, width: 150, height: 20, borderRadius: 4,marginLeft:30 }}
            />
	  <View style={{marginTop: 10,marginVertical: 10, flexDirection: 'row',justifyContent:'center',alignItems: 'center'}}>
      <View style={{ marginTop: 6, width: width / 2.5, height: 200, borderRadius: 4}} />
	  <View style={{marginLeft:4,marginTop: 6, width: width / 2.5, height: 200, borderRadius: 4}} />
	  </View>
</SkeletonPlaceholder>
	  <SkeletonPlaceholder>
	  <View style={{marginTop: 10,marginVertical: 10, flexDirection: 'row',justifyContent:'center',alignItems: 'center'}}>
      <View style={{ marginTop: 6, width: width / 2.5, height: 200, borderRadius: 4}} />
	  <View style={{marginLeft:4,marginTop: 6, width: width / 2.5, height: 200, borderRadius: 4}} />
	  </View>
</SkeletonPlaceholder>
<SkeletonPlaceholder>
<View style={{marginTop: 10,marginVertical: 10, flexDirection: 'row',justifyContent:'center',alignItems: 'center'}}>
      <View style={{ marginTop: 6, width: width / 2.5, height: 200, borderRadius: 4}} />
	  <View style={{marginLeft:4,marginTop: 6, width: width / 2.5, height: 200, borderRadius: 4}} />
	  </View>
</SkeletonPlaceholder>
<SkeletonPlaceholder>
          <View
              style={{marginTop: 9, width: 150, height: 20, borderRadius: 4,marginLeft:30 }}
            />
	   <View style={{marginTop: 10,marginVertical: 10, flexDirection: 'row',justifyContent:'center',alignItems: 'center'}}>
      <View style={{ marginTop: 6, width: width / 2.5, height: 200, borderRadius: 4}} />
	  <View style={{marginLeft:4,marginTop: 6, width: width / 2.5, height: 200, borderRadius: 4}} />
	  </View>
</SkeletonPlaceholder>
	  <SkeletonPlaceholder>
	  <View style={{marginTop: 10,marginVertical: 10, flexDirection: 'row',justifyContent:'center',alignItems: 'center'}}>
      <View style={{ marginTop: 6, width: width / 2.5, height: 200, borderRadius: 4}} />
	  <View style={{marginLeft:4,marginTop: 6, width: width / 2.5, height: 200, borderRadius: 4}} />
	  </View>
</SkeletonPlaceholder>
<SkeletonPlaceholder>
<View style={{marginTop: 10,marginVertical: 10, flexDirection: 'row',justifyContent:'center',alignItems: 'center'}}>
      <View style={{ marginTop: 6, width: width / 2.5, height: 200, borderRadius: 4}} />
	  <View style={{marginLeft:4,marginTop: 6, width: width / 2.5, height: 200, borderRadius: 4}} />
	  </View>
</SkeletonPlaceholder>


	</ScrollView>
	</SafeAreaView>
  );
};

export default LoaderFavorite;
