import React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LoaderHome = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder>
            <View style={{alignItems: 'center'}}>
              <View
                style={{marginTop: 70, width: 390, height: 80, borderRadius: 4}}
              />
            </View>
          </SkeletonPlaceholder>
    
          <View style={{marginTop: 10, marginBottom: 30}}>
          <View  style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4,marginLeft:25 }}  />
              <View style={{flexDirection: "row", alignItems: "center" ,marginTop:20,marginLeft:35}}>

                <View style={{ width: 80, height: 80 }} />
                <View style={{ marginLeft: 20 }}>
                <View style={{flexDirection: "row", alignItems: "center" }}>
                  <View style={{ width: 160, height: 20, borderRadius: 4 }} />
    
                  </View>
                  <View
                    style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                  />
                    <View style={{ marginTop: 6,width: 180, height: 20, borderRadius: 4 }} />
                </View>
              </View>
          </View>
        </SkeletonPlaceholder>

        <SkeletonPlaceholder>
          <View style={{alignItems: 'center',marginTop:20}}>
            <View
              style={{ width: 370, height: 60, borderRadius: 4}}
            />
          </View>
             <View
            style={{
              marginBottom: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 100,
                height: 25,
                borderRadius: 4,
                marginLeft: 10,
                marginTop: 5,
              }}
            />
            <View
              style={{
                width: 100,
                height: 25,
                borderRadius: 4,
                marginTop: 5,
              }}
            />
            
            
          </View>
          <View
            style={{
              marginBottom: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 100,
                height: 25,
                borderRadius: 4,
                marginLeft: 10,
                marginTop: 5,
              }}
            />
            <View
              style={{
                width: 100,
                height: 25,
                borderRadius: 4,
                marginTop: 5,
              }}
            />
            
            
          </View>
          <View
            style={{
              marginBottom: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 100,
                height: 25,
                borderRadius: 4,
                marginLeft: 10,
                marginTop: 5,
              }}
            />
            <View
              style={{
                width: 100,
                height: 25,
                borderRadius: 4,
                marginTop: 5,
              }}
            />
            
            
          </View>
          <View style={{alignItems: 'center',marginTop:20}}>
            <View
              style={{ width: 370, height: 80, borderRadius: 4}}
            />
             <View
              style={{ width: 370, height: 60, borderRadius: 4,marginTop:5}}
            />
          </View>
          <View style={{alignItems: 'center',marginTop:20}}>
            <View
              style={{ width: 370, height: 60, borderRadius: 4}}
            />
          </View>
          <View style={{alignItems: 'center',marginTop:20}}>
            <View
              style={{ width: 370, height: 60, borderRadius: 4}}
            />
          </View>
        </SkeletonPlaceholder>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoaderHome;
