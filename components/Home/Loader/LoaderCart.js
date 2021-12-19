import React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LoaderCart = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder>
            <View style={{alignItems: 'center'}}>
              <View
                style={{marginTop: 0, width: 390, height: 480, borderRadius: 4}}
              />
            </View>
          </SkeletonPlaceholder>
        </SkeletonPlaceholder>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoaderCart;
