import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const LoaderNotificationHot = () => {
  return (
    <ScrollView>
      <SkeletonPlaceholder>
        <View style={{ width: 80, height: 20, borderRadius: 4, marginTop: 20, marginLeft: 35 }} />
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: 35 }}>
          <View style={{ width: 60, height: 60, borderRadius: 50 }} />
          <View style={{ marginLeft: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: 200, height: 20, borderRadius: 4 }} />
              <View style={{ marginLeft: 25, width: 40, height: 10, borderRadius: 4 }} />
            </View>
            <View
              style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
            />
            <View style={{ marginTop: 6, width: 120, height: 20, borderRadius: 4 }} />
          </View>
        </View>
        {/* ----- */}
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: 35 }}>
          <View style={{ width: 60, height: 60, borderRadius: 50 }} />
          <View style={{ marginLeft: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: 200, height: 20, borderRadius: 4 }} />
              <View style={{ marginLeft: 25, width: 40, height: 10, borderRadius: 4 }} />
            </View>
            <View
              style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
            />
            <View style={{ marginTop: 6, width: 120, height: 20, borderRadius: 4 }} />
          </View>
        </View>
        {/* ----- */}
        <View style={{ width: 80, height: 20, borderRadius: 4, marginTop: 20, marginLeft: 35 }} />
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: 35 }}>
          <View style={{ width: 60, height: 60, borderRadius: 50 }} />
          <View style={{ marginLeft: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: 200, height: 20, borderRadius: 4 }} />
              <View style={{ marginLeft: 25, width: 40, height: 10, borderRadius: 4 }} />
            </View>
            <View
              style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
            />
            <View style={{ marginTop: 6, width: 120, height: 20, borderRadius: 4 }} />
          </View>
        </View>
        {/* ----- */}
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: 35 }}>
          <View style={{ width: 60, height: 60, borderRadius: 50 }} />
          <View style={{ marginLeft: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: 200, height: 20, borderRadius: 4 }} />
              <View style={{ marginLeft: 25, width: 40, height: 10, borderRadius: 4 }} />
            </View>
            <View
              style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
            />
            <View style={{ marginTop: 6, width: 120, height: 20, borderRadius: 4 }} />
          </View>
        </View>
        {/* ----- */}
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: 35 }}>
          <View style={{ width: 60, height: 60, borderRadius: 50 }} />
          <View style={{ marginLeft: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: 200, height: 20, borderRadius: 4 }} />
              <View style={{ marginLeft: 25, width: 40, height: 10, borderRadius: 4 }} />
            </View>
            <View
              style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
            />
            <View style={{ marginTop: 6, width: 120, height: 20, borderRadius: 4 }} />
          </View>
        </View>
      </SkeletonPlaceholder>

    </ScrollView>
  );
};


export default LoaderNotificationHot

