import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native'
import React from 'react';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const LoaderHot = () => {
    return (
    <SafeAreaView>
      <ScrollView>
      <SkeletonPlaceholder>
      <View style={{flexDirection: 'row',marginTop:50,marginLeft:5}}>
        <View style={{ width: 80, height:80, borderRadius: 50, marginLeft: 10}} />
        <View style={{ width: 80, height:80, borderRadius: 50, marginLeft: 10}} />
        <View style={{ width: 80, height:80, borderRadius: 50, marginLeft: 10}} />
        <View style={{ width: 80, height:80, borderRadius: 50, marginLeft: 10}} />
      </View>
      </SkeletonPlaceholder>

      <SkeletonPlaceholder>
      <View style={{ flexDirection: "row",marginTop:5,marginLeft:20}}>
        <View style={{ width: 60, height:60, borderRadius: 50 }} />
        <View style={{ marginLeft: 20,flexDirection: 'row'}}>
          <View style={{ marginTop: 15, width: 80, height: 20, borderRadius: 4 }} />
          <View
            style={{ marginTop: 7, width: 100, height: 30, borderRadius: 4,marginLeft: 50}}
          />
        </View>
      </View>
      <View style={{marginTop: 6, width:370, height: 180, borderRadius: 4,marginLeft:10}} />

      <View style={{marginTop: 10, marginBottom: 30, flexDirection: 'row'}}>
        <View style={{   width: 30,height: 30, borderRadius: 4,marginLeft: 8 }} />
        <View style={{   width: 30, height: 30, borderRadius: 4, marginLeft: 8}}/>
        <View style={{ width: 30,height: 30,borderRadius: 4, marginLeft: 8 }}/>
        <View style={{width: 30, height: 30, borderRadius: 4,marginLeft: 220 }}  />
      </View>
      <View style={{ marginTop: -25, width: 80, height: 20, borderRadius: 4,marginLeft:8 }} />
          <View style={{marginTop:5, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{ width: 150, height: 25, borderRadius: 4, marginLeft: 8, marginTop: -15}} />
		<View style={{ width: 70, height: 25, borderRadius: 4, marginTop: 5,marginLeft:-75}} />
      </View>
    </SkeletonPlaceholder>
    <SkeletonPlaceholder>
      <View style={{ flexDirection: "row",marginLeft:20,marginTop:15}}>
        <View style={{ width: 60, height:60, borderRadius: 50 }} />
        <View style={{ marginLeft: 20,flexDirection: 'row'}}>
          <View style={{ marginTop: 15, width: 80, height: 20, borderRadius: 4 }} />
          <View
            style={{ marginTop: 7, width: 100, height: 30, borderRadius: 4,marginLeft: 50}}
          />
        </View>
      </View>
      <View style={{marginTop: 6, width:370, height: 180, borderRadius: 4,marginLeft:10}} />

      <View style={{marginTop: 10, marginBottom: 30, flexDirection: 'row'}}>
        <View style={{   width: 30,height: 30, borderRadius: 4,marginLeft: 8 }} />
        <View style={{   width: 30, height: 30, borderRadius: 4, marginLeft: 8}}/>
        <View style={{ width: 30,height: 30,borderRadius: 4, marginLeft: 8 }}/>
        <View style={{width: 30, height: 30, borderRadius: 4,marginLeft: 220 }}  />
      </View>
      <View style={{ marginTop: -25, width: 80, height: 20, borderRadius: 4,marginLeft:8 }} />
          <View style={{marginTop:5, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{ width: 150, height: 25, borderRadius: 4, marginLeft: 8, marginTop: -15}} />
		<View style={{ width: 70, height: 25, borderRadius: 4, marginTop: 5,marginLeft:-75}} />
      </View>
    </SkeletonPlaceholder>
    </ScrollView>
    </SafeAreaView>
    )
}

export default LoaderHot

