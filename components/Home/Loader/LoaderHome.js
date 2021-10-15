import React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LoaderHome = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <SkeletonPlaceholder>
          {/* the loai */}
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
          {/* Banner */}
          <SkeletonPlaceholder>
            <View style={{alignItems: 'center'}}>
              <View
                style={{marginTop: 6, width: 350, height: 115, borderRadius: 4}}
              />
            </View>
          </SkeletonPlaceholder>
          {/* Flash Sales */}
          <View style={{marginTop: 10, marginBottom: 30, flexDirection: 'row'}}>
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
                marginTop: 0,
                width: 30,
                height: 30,
                borderRadius: 4,
                marginLeft: 120,
              }}
            />
            <View
              style={{
                marginTop: 0,
                width: 30,
                height: 30,
                borderRadius: 4,
                marginLeft: 8,
              }}
            />
            <View
              style={{
                marginTop: 0,
                width: 30,
                height: 30,
                borderRadius: 4,
                marginLeft: 8,
              }}
            />
            <View
              style={{
                marginTop: 0,
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
              marginBottom: 30,
              marginLeft: 110,
              flexDirection: 'row',
            }}>
            <View
              style={{
                marginTop: 0,
                width: 30,
                height: 10,
                borderRadius: 4,
                marginLeft: 120,
              }}
            />
            <View
              style={{
                marginTop: 0,
                width: 30,
                height: 10,
                borderRadius: 4,
                marginLeft: 8,
              }}
            />
            <View
              style={{
                marginTop: 0,
                width: 30,
                height: 10,
                borderRadius: 4,
                marginLeft: 8,
              }}
            />
            <View
              style={{
                marginTop: 0,
                width: 30,
                height: 10,
                borderRadius: 4,
                marginLeft: 8,
              }}
            />
          </View>
          <View style={{marginTop: -15, flexDirection: 'row'}}>
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

        {/* Banner */}
        <SkeletonPlaceholder>
          <View style={{alignItems: 'center'}}>
            <View
              style={{marginTop: 9, width: 250, height: 20, borderRadius: 4}}
            />
            <View
              style={{marginTop: 6, width: 350, height: 115, borderRadius: 4}}
            />
            <View
              style={{marginTop: 6, width: 350, height: 115, borderRadius: 4}}
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
                marginLeft: -75,
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
                marginLeft: -75,
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
              style={{marginTop: 6, width: 350, height: 115, borderRadius: 4}}
            />
          </View>
        </SkeletonPlaceholder>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoaderHome;
