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
                style={{marginTop: 0, width: 390, height: 440, borderRadius: 4}}
              />
            </View>
          </SkeletonPlaceholder>
    
          <View style={{marginTop: 10, marginBottom: 30}}>
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
                marginLeft: 10,
                marginTop: 5,
              }}
            />
               <View
              style={{
                width: 100,
                height: 25,
                borderRadius: 4,
                marginLeft: 10,
                marginTop: 5,
              }}
            />
          </View>
        </SkeletonPlaceholder>

        <SkeletonPlaceholder>
          <View style={{alignItems: 'center',marginTop:20}}>
            <View
              style={{ width: 370, height: 80, borderRadius: 4}}
            />
          </View>
             <View
            style={{
              marginTop: 5,
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

         
        <View style={{ flexDirection: 'row',marginTop:10}}>
      
            <View
              style={{
                marginTop: 0,
                width: 30,
                height: 30,
                borderRadius: 25,
                marginLeft: 8,
              }}
            />
            <View
              style={{
                marginTop: 0,
                width: 30,
                height: 30,
                borderRadius: 25,
                marginLeft: 8,
              }}
            />
            <View
              style={{
                marginTop: 0,
                width: 30,
                height: 30,
                borderRadius: 25,
                marginLeft: 8,
              }}
            />
            <View
              style={{
                marginTop: 0,
                width: 30,
                height: 30,
                borderRadius: 25,
                marginLeft: 170,
              }}
            />
            <View
              style={{
                marginTop: 0,
                width: 30,
                height: 30,
                borderRadius: 25,
                marginLeft: 8,
              }}
            />
            <View
              style={{
                marginTop: 0,
                width: 30,
                height: 30,
                borderRadius: 25,
                marginLeft: 8,
              }}
            />
            
          </View>
        
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
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
                marginLeft: 10,
                marginTop: 15,
              }}
            />
            
        </SkeletonPlaceholder>

         <SkeletonPlaceholder>
          <View
            style={{
              marginTop: 5,
              marginBottom: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 170,
                height: 25,
                borderRadius: 4,
                marginLeft: 10,
                marginTop: 5,
              }}
            />
            
          </View>
          <View style={{marginTop: 10, marginBottom: 30, flexDirection: 'row'}}>
            <View
              style={{
                marginLeft: 35,
                marginTop: 6,
                width: 150,
                height: 200,
                borderRadius: 4,
              }}
            />
            <View
              style={{
                marginLeft: 15,
                marginTop: 6,
                width: 150,
                height: 200,
                borderRadius: 4,
              }}
            />
          </View>
    
        </SkeletonPlaceholder>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoaderHome;
