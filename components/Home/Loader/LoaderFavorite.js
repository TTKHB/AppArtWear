import React from 'react';
import {View,ScrollView,SafeAreaView} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LoaderFavorite = () => {
  return (
	  <SafeAreaView >
	  <ScrollView >
		  <SkeletonPlaceholder>
          <View
              style={{marginTop: 9, width: 150, height: 20, borderRadius: 4,marginLeft:30 }}
            />
	  <View style={{marginTop: 10, flexDirection: 'row'}}>
      <View style={{marginLeft:35,marginTop: 6, width: 150, height: 200, borderRadius: 4}} />
	  <View style={{marginLeft:15,marginTop: 6, width: 150, height: 200, borderRadius: 4}} />
	  </View>
</SkeletonPlaceholder>
	  <SkeletonPlaceholder>
	  <View style={{marginStart:1, flexDirection: 'row',marginTop:5}}>
      <View style={{marginLeft:35,marginTop: 6, width: 150, height: 200, borderRadius: 4}} />
	  <View style={{marginLeft:15,marginTop: 6, width: 150, height: 200, borderRadius: 4}} />
	  </View>
</SkeletonPlaceholder>
<SkeletonPlaceholder>
	  <View style={{marginStart:1, flexDirection: 'row',marginTop:5}}>
      <View style={{marginLeft:35,marginTop: 6, width: 150, height: 200, borderRadius: 4}} />
	  <View style={{marginLeft:15,marginTop: 6, width: 150, height: 200, borderRadius: 4}} />
	  </View>
</SkeletonPlaceholder>
<SkeletonPlaceholder>
          <View
              style={{marginTop: 9, width: 150, height: 20, borderRadius: 4,marginLeft:30 }}
            />
	  <View style={{marginTop: 10, flexDirection: 'row'}}>
      <View style={{marginLeft:35,marginTop: 6, width: 150, height: 200, borderRadius: 4}} />
	  <View style={{marginLeft:15,marginTop: 6, width: 150, height: 200, borderRadius: 4}} />
	  </View>
</SkeletonPlaceholder>
	  <SkeletonPlaceholder>
	  <View style={{marginStart:1, flexDirection: 'row',marginTop:5}}>
      <View style={{marginLeft:35,marginTop: 6, width: 150, height: 200, borderRadius: 4}} />
	  <View style={{marginLeft:15,marginTop: 6, width: 150, height: 200, borderRadius: 4}} />
	  </View>
</SkeletonPlaceholder>
<SkeletonPlaceholder>
	  <View style={{marginStart:1, flexDirection: 'row',marginTop:5}}>
      <View style={{marginLeft:35,marginTop: 6, width: 150, height: 200, borderRadius: 4}} />
	  <View style={{marginLeft:15,marginTop: 6, width: 150, height: 200, borderRadius: 4}} />
	  </View>
</SkeletonPlaceholder>


	</ScrollView>
	</SafeAreaView>
  );
};

export default LoaderFavorite;
