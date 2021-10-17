import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native'
import React from 'react';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const LoaderNotification= () => {
    return (
            <ScrollView>
            <SkeletonPlaceholder>
              <View style={{flexDirection: "row", alignItems: "center" ,marginTop:20,marginLeft:35}}>

                <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                <View style={{ marginLeft: 20 }}>
                <View style={{flexDirection: "row", alignItems: "center" }}>
                  <View style={{ width: 160, height: 20, borderRadius: 4 }} />
                  <View style={{marginLeft:65, width: 50, height: 50, borderRadius: 4 }} />
                  </View>
                  <View
                    style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                  />
                    <View style={{ marginTop: 6,width: 180, height: 20, borderRadius: 4 }} />
                </View>
              </View>
    {/* ----- */}
              <View style={{flexDirection: "row", alignItems: "center" ,marginTop:30,marginLeft:35, }}>
                <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                
                <View style={{ marginLeft: 20 }}>
                <View style={{flexDirection: "row", alignItems: "center" }}>
                  <View style={{ width: 160, height: 20, borderRadius: 4 }} />
                  <View style={{marginLeft:65, width: 50, height: 50, borderRadius: 4 }} />
                  </View>
                  <View
                    style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                  />
                    <View style={{ marginTop: 6,width: 180, height: 20, borderRadius: 4 }} />
                </View>
              </View>
     {/* ----- */}
     <View style={{flexDirection: "row", alignItems: "center" ,marginTop:30,marginLeft:35}}>
                <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                
                <View style={{ marginLeft: 20 }}>
                <View style={{flexDirection: "row", alignItems: "center" }}>
                  <View style={{ width: 160, height: 20, borderRadius: 4 }} />
                  <View style={{marginLeft:65, width: 50, height: 50, borderRadius: 4 }} />
                  </View>
                  <View
                    style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                  />
                    <View style={{ marginTop: 6,width: 180, height: 20, borderRadius: 4 }} />
                </View>
              </View>
               {/* ----- */}
               <View style={{flexDirection: "row", alignItems: "center" ,marginTop:30,marginLeft:35}}>
                <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                
                <View style={{ marginLeft: 20 }}>
                <View style={{flexDirection: "row", alignItems: "center" }}>
                  <View style={{ width: 160, height: 20, borderRadius: 4 }} />
                  <View style={{marginLeft:65, width: 50, height: 50, borderRadius: 4 }} />
                  </View>
                  <View
                    style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                  />
                    <View style={{ marginTop: 6,width: 180, height: 20, borderRadius: 4 }} />
                </View>
              </View>
               {/* ----- */}
               <View style={{flexDirection: "row", alignItems: "center" ,marginTop:30,marginLeft:35}}>
                <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                
                <View style={{ marginLeft: 20 }}>
                <View style={{flexDirection: "row", alignItems: "center" }}>
                  <View style={{ width: 160, height: 20, borderRadius: 4 }} />
                  <View style={{marginLeft:65, width: 50, height: 50, borderRadius: 4 }} />
                  </View>
                  <View
                    style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                  />
                    <View style={{ marginTop: 6,width: 180, height: 20, borderRadius: 4 }} />
                </View>
              </View>
               {/* ----- */}
               <View style={{flexDirection: "row", alignItems: "center" ,marginTop:30,marginLeft:35}}>
                <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                
                <View style={{ marginLeft: 20 }}>
                <View style={{flexDirection: "row", alignItems: "center" }}>
                  <View style={{ width: 160, height: 20, borderRadius: 4 }} />
                  <View style={{marginLeft:65, width: 50, height: 50, borderRadius: 4 }} />
                  </View>
                  <View
                    style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                  />
                    <View style={{ marginTop: 6,width: 180, height: 20, borderRadius: 4 }} />
                </View>
              </View>
              
              
              

            </SkeletonPlaceholder>
    
            </ScrollView>
          );
        };
        

export default LoaderNotification

