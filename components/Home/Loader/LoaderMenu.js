import React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LoaderMenu = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        {/* Menu loại sp*/}
        <SkeletonPlaceholder>
          <View style={{ marginTop: 50,marginBottom: 10,flexDirection: 'row',marginLeft: 100}}>
            <View style={{width: 80,  height: 20,  borderRadius: 4,  marginLeft: 30,marginTop: 5}}/>
            </View>
</SkeletonPlaceholder>
<SkeletonPlaceholder>
          <View style={{flexDirection: 'row',marginLeft:100}}>
            <View style={{marginLeft: 35,  arginTop: 6, width: 70,  height: 95, borderRadius: 4 }}/>
            <View style={{marginLeft: 15,  arginTop: 6, width: 70,  height: 95, borderRadius: 4 }}/>
            <View style={{marginLeft: 15,  arginTop: 6, width: 70,  height: 95, borderRadius: 4 }}/>
          </View>
          
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <View style={{flexDirection: 'row',marginLeft:100,marginTop: 10}}>
            <View style={{marginLeft: 35,  arginTop: 6, width: 70,  height: 15, borderRadius: 4 }}/>
            <View style={{marginLeft: 15,  arginTop: 6, width: 70,  height: 15, borderRadius: 4 }}/>
            <View style={{marginLeft: 15,  arginTop: 6, width: 70,  height: 15, borderRadius: 4 }}/>
          </View>
        </SkeletonPlaceholder>
{/* Quần */}
        <SkeletonPlaceholder>
          <View style={{ marginTop: 35,marginBottom: 10,flexDirection: 'row',marginLeft: 100}}>
            <View style={{width: 80,  height: 20,  borderRadius: 4,  marginLeft: 30,marginTop: 5}}/>
            </View>
</SkeletonPlaceholder>
<SkeletonPlaceholder>   
          <View style={{flexDirection: 'row',marginLeft:100}}>
            <View style={{marginLeft: 35,  arginTop: 6, width: 70,  height: 95, borderRadius: 4 }}/>
            <View style={{marginLeft: 15,  arginTop: 6, width: 70,  height: 95, borderRadius: 4 }}/>
            <View style={{marginLeft: 15,  arginTop: 6, width: 70,  height: 95, borderRadius: 4 }}/>
          </View>
          
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <View style={{flexDirection: 'row',marginLeft:100,marginTop: 10}}>
            <View style={{marginLeft: 35,  arginTop: 6, width: 70,  height: 15, borderRadius: 4 }}/>
            <View style={{marginLeft: 15,  arginTop: 6, width: 70,  height: 15, borderRadius: 4 }}/>
            <View style={{marginLeft: 15,  arginTop: 6, width: 70,  height: 15, borderRadius: 4 }}/>
          </View>
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <View style={{ marginTop: 35,marginBottom: 10,flexDirection: 'row',marginLeft: 100}}>
            <View style={{width: 80,  height: 20,  borderRadius: 4,  marginLeft: 30,marginTop: 5}}/>
            </View>
</SkeletonPlaceholder>
<SkeletonPlaceholder>   
          <View style={{flexDirection: 'row',marginLeft:100}}>
            <View style={{marginLeft: 35,  arginTop: 6, width: 70,  height: 95, borderRadius: 4 }}/>
            <View style={{marginLeft: 15,  arginTop: 6, width: 70,  height: 95, borderRadius: 4 }}/>
            <View style={{marginLeft: 15,  arginTop: 6, width: 70,  height: 95, borderRadius: 4 }}/>
          </View>
          
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <View style={{flexDirection: 'row',marginLeft:100,marginTop: 10}}>
            <View style={{marginLeft: 35,  arginTop: 6, width: 70,  height: 15, borderRadius: 4 }}/>
            <View style={{marginLeft: 15,  arginTop: 6, width: 70,  height: 15, borderRadius: 4 }}/>
            <View style={{marginLeft: 15,  arginTop: 6, width: 70,  height: 15, borderRadius: 4 }}/>
          </View>
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <View style={{ marginTop: 35,marginBottom: 10,flexDirection: 'row',marginLeft: 100}}>
            <View style={{width: 80,  height: 20,  borderRadius: 4,  marginLeft: 30,marginTop: 5}}/>
            </View>
</SkeletonPlaceholder>
<SkeletonPlaceholder>   
          <View style={{flexDirection: 'row',marginLeft:100}}>
            <View style={{marginLeft: 35,  arginTop: 6, width: 70,  height: 95, borderRadius: 4 }}/>
            <View style={{marginLeft: 15,  arginTop: 6, width: 70,  height: 95, borderRadius: 4 }}/>
            <View style={{marginLeft: 15,  arginTop: 6, width: 70,  height: 95, borderRadius: 4 }}/>
          </View>
          
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <View style={{flexDirection: 'row',marginLeft:100,marginTop: 10}}>
            <View style={{marginLeft: 35,  arginTop: 6, width: 70,  height: 15, borderRadius: 4 }}/>
            <View style={{marginLeft: 15,  arginTop: 6, width: 70,  height: 15, borderRadius: 4 }}/>
            <View style={{marginLeft: 15,  arginTop: 6, width: 70,  height: 15, borderRadius: 4 }}/>
          </View>
        </SkeletonPlaceholder>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoaderMenu;
