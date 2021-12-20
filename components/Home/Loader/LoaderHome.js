import React from 'react';
import {View, ScrollView, SafeAreaView,Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
const {height, width} = Dimensions.get('window')
const LoaderHome = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <SkeletonPlaceholder>
          {/* Banner */}
          <SkeletonPlaceholder>
            <View style={{alignItems: 'center'}}>
              <View
                style={{marginTop: 6, width: width / 1.05, height: 115, borderRadius: 4}}
              />
            </View>
          </SkeletonPlaceholder>
          {/* Flash Sales */}
          <View style={{marginTop: 10, marginBottom: 30, flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}>
            <View
              style={{
                width: width / 3.1,
                height: 25,
                borderRadius: 4,
                marginTop: 5,
                marginLeft:8
              }}
            />
            <View
              style={{
                marginTop: 0,
                width: width /14.2,
                height: 30,
                borderRadius: 4,
                marginLeft:110,
                margin:5
              }}
            />
              <View
              style={{
                marginTop: 0,
                width: width / 14.2,
                height: 30,
                borderRadius: 4,
                margin:5
              }}
            />
              <View
              style={{
                marginTop: 0,
                width: width / 14.2,
                height: 30,
                borderRadius: 4,
                marginRight:3,
                 margin:5
              }}
            />
               <View
              style={{
                marginTop: 0,
                width: width / 14.2,
                height: 30,
                borderRadius: 4,
                marginRight:5,
                margin:5
              }}
            />
            </View>
          <View
            style={{
              marginTop: -25,
              marginBottom: 30,
              marginLeft: 100,
              flexDirection: 'row',
              justifyContent: 'center',alignItems: 'center'
            }}>
            <View
              style={{
                marginTop: 0,
                width: width / 14.2,
                height: 10,
                borderRadius: 4,
                marginLeft: 135,
              }}
            />
            <View
              style={{
                marginTop: 0,
                width: width / 14.2,
                height: 10,
                borderRadius: 4,
                marginLeft: 10,
              }}
            />
            <View
              style={{
                marginTop: 0,
                width: width / 14.2,
                height: 10,
                borderRadius: 4,
                marginLeft: 10,
              }}
            />
            <View
              style={{
                marginTop: 0,
                width: width / 14.2,
                height: 10,
                borderRadius: 4,
                marginLeft: 10,
              }}
            />
          </View>
          <View style={{marginTop: -15, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
            <View
              style={{
                marginTop: 6,
                width: width / 2.3,
                height: 200,
                borderRadius: 4,
              }}
            />
            <View
              style={{
                marginLeft: 30,
                marginTop: 6,
                width: width / 2.3,
                height: 200,
                borderRadius: 4,
              }}
            />
          </View>
        </SkeletonPlaceholder>

        {/* Banner */}
        <SkeletonPlaceholder>
          <View style={{alignItems: 'center'}}>
            <View
              style={{marginTop: 9, width: 250, height: 20, borderRadius: 4}}
            />
            <View
                style={{marginTop: 6, width: width / 1.05, height: 115, borderRadius: 4}}
              />
            <View
                style={{marginTop: 6, width: width / 1.05, height: 115, borderRadius: 4}}
              />
          </View>
        </SkeletonPlaceholder>

        {/* Tim kiem hang dau */}
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
                width: 150,
                height: 25,
                borderRadius: 4,
                marginLeft: 10,
                marginTop: 5,
              }}
            />
            <View
              style={{
                width: 70,
                height: 25,
                borderRadius: 4,
                marginTop: 5,
                marginLeft: -80,
              }}
            />
          </View>
          <View style={{marginTop: 10, marginBottom: 30, flexDirection: 'row',justifyContent:'center',alignItems: 'center'}}>
            <View
              style={{
      
                marginTop: 6,
                width: width / 2.3,
                height: 200,
                borderRadius: 4,
              }}
            />
            <View
              style={{
                marginLeft: 25,
                marginTop: 6,
                width: width / 2.3,
                height: 200,
                borderRadius: 4,
              }}
            />
          </View>
          {/* Tim kiem pho bien */}
          <View
            style={{
              marginTop: -12,
              marginBottom: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 150,
                height: 25,
                borderRadius: 4,
                marginTop: 5,
                marginLeft: 10,
              }}
            />
            <View
              style={{
                width: 70,
                height: 25,
                borderRadius: 4,
                marginTop: 5,
                marginLeft: -85,
              }}
            />
          </View>
          <View style={{marginTop: 10, marginBottom: 30, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
            <View
              style={{
                marginTop: 6,
                width: width / 2.3,
                height: 200,
                borderRadius: 4,
              }}
            />
            <View
              style={{
                marginLeft: 25,
                marginTop: 6,
                width: width / 2.3,
                height: 200,
                borderRadius: 4,
              }}
            />
          </View>
        </SkeletonPlaceholder>

        {/* Banner */}
        <SkeletonPlaceholder>
          <View style={{}}>
            <View
              style={{
                marginTop: 0,
                width: 250,
                height: 20,
                borderRadius: 4,
                marginLeft: 10,
              }}
            />
          </View>
          <View style={{alignItems: 'center'}}>
          <View
                style={{marginTop: 6, width: width / 1.05, height: 115, borderRadius: 4}}
              />
          </View>
        </SkeletonPlaceholder>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoaderHome;
