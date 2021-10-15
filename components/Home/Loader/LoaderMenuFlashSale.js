import React from 'react';
import {View,ScrollView,SafeAreaView} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LoaderMenuFlashSale = () => {
  return (
	  <SafeAreaView >
	  <ScrollView >
   
{/*Tat ca menu Flash Sales*/}
<SkeletonPlaceholder>
<View style={{alignItems: 'center',marginTop:25}}>
              <View style={{width: 50, height: 15, borderRadius: 4}}
              />
            </View>
          {/* Flash Sales */}
          <View style={{ marginBottom: 30, flexDirection: 'row',alignItems: 'center'}}>
     
            <View
              style={{
                marginTop: 30,
                width: 30,
                height: 30,
                borderRadius: 4,
                marginLeft: 120,
              }}
            />
            <View
              style={{
                marginTop: 30,
                width: 30,
                height: 30,
                borderRadius: 4,
                marginLeft: 8,
              }}
            />
            <View
              style={{
                marginTop: 30,
                width: 30,
                height: 30,
                borderRadius: 4,
                marginLeft: 8,
              }}
            />
            <View
              style={{
                marginTop: 30,
                width: 30,
                height: 30,
                borderRadius: 4,
                marginLeft: 8,
              }}
            />
          </View>

          <View
            style={{
              marginTop: -25,
              marginBottom: 10,
              flexDirection: 'row',
            }}>
        <View style={{ marginTop: 10, width: 30, height: 10,  borderRadius: 4, marginLeft: 120, }}/>
    <View style={{ marginTop: 10, width: 30, height: 10,  borderRadius: 4, marginLeft: 8, }}/>
        <View style={{  marginTop: 10, width: 30, height: 10,  borderRadius: 4, marginLeft: 8, }}/>
            <View style={{  marginTop: 10, width: 30, height: 10,  borderRadius: 4, marginLeft: 8, }}/>
          </View>
        </SkeletonPlaceholder>

  {/* Banner */}
  <SkeletonPlaceholder>
            <View style={{alignItems: 'center',marginTop:0}}>
              <View
                style={{marginTop: 15, width: 350, height: 115, borderRadius: 4}}
              />
            </View>
          </SkeletonPlaceholder>
		  <SkeletonPlaceholder>
          <View style={{alignItems: 'center',marginTop:25}}>
              <View style={{width: 50, height: 15, borderRadius: 4}}
              />
            </View>
	  <View style={{ flexDirection: 'row'}}>
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

export default LoaderMenuFlashSale;
