import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native'
import React from 'react';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const LoaderChat = () => {
    return (
            <ScrollView>
            <SkeletonPlaceholder>
              <View style={{flexDirection: "row", alignItems: "center" ,marginTop:80,marginLeft:35}}>
                <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                <View style={{ marginLeft: 20 }}>
                  <View style={{ width: 180, height: 20, borderRadius: 4 }} />
                  <View
                    style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                  />
                </View>
              </View>
    
              <View style={{flexDirection: "row", alignItems: "center",marginTop:10 ,marginLeft:35}}>
                <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                <View style={{ marginLeft: 20 }}>
                  <View style={{ width: 180, height: 20, borderRadius: 4 }} />
                  <View
                    style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                  />
                </View>
              </View>

              <View style={{flexDirection: "row", alignItems: "center",marginTop:10 ,marginLeft:35 }}>
                <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                <View style={{ marginLeft: 20 }}>
                  <View style={{ width: 180, height: 20, borderRadius: 4 }} />
                  <View
                    style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                  />
                </View>
              </View>
              <View style={{flexDirection: "row", alignItems: "center" ,marginTop:10,marginLeft:35}}>
                <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                <View style={{ marginLeft: 20 }}>
                  <View style={{ width: 180, height: 20, borderRadius: 4 }} />
                  <View
                    style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                  />
                </View>
              </View>
    
              <View style={{flexDirection: "row", alignItems: "center",marginTop:10 ,marginLeft:35}}>
                <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                <View style={{ marginLeft: 20 }}>
                  <View style={{ width: 180, height: 20, borderRadius: 4 }} />
                  <View
                    style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                  />
                </View>
              </View>

              <View style={{flexDirection: "row", alignItems: "center",marginTop:10 ,marginLeft:35 }}>
                <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                <View style={{ marginLeft: 20 }}>
                  <View style={{ width: 180, height: 20, borderRadius: 4 }} />
                  <View
                    style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                  />
                </View>
              </View>
            </SkeletonPlaceholder>
    
            </ScrollView>
          );
        };
        

export default LoaderChat

