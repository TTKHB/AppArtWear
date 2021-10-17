import React from 'react';
import {View,ScrollView,SafeAreaView} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LoaderFavorite = () => {
  return (
	  <SafeAreaView >
	  <ScrollView >
{/*Tat ca Tim kiem hang dau */}
  {/* Banner */}
  <SkeletonPlaceholder>
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                marginLeft: 40,
                marginTop: 45,
                flexDirection: 'row',
                marginBottom: 15,
              }}>
              <View style={{width: 90, height: 35, borderRadius: 4}} />
              <View
                style={{
                  marginTop: 0,
                  width: 90,
                  height: 35,
                  borderRadius: 4,
                  margin: 20,
                }}
              />
              <View
                style={{marginTop: 0, width: 90, height: 35, borderRadius: 4}}
              />
            </View>
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
