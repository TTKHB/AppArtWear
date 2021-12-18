import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const LoaderNotificationHot = () => {
    return (
        <ScrollView>
            <SkeletonPlaceholder>
                {/* ----- */}
                <View style={{
                    padding: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: 20,
                    marginHorizontal: -15,
                    width: "100%",
                    marginTop: 50
                }}>
                    <View style={{
                        borderRadius: 8,
                        borderWidth: 2,
                        width: "50%",
                        height: "100%",
                        padding: 20,
                        marginLeft: 10
                    }}>
                        <View style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: "center",
                            alignSelf: 'center'
                        }} />
                        <View style={{
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: "center",
                        }}>
                            <View style={{ width: 120, height: 20, borderRadius: 4, marginTop: 6, }} />
                            <View style={{ width: 120, height: 20, borderRadius: 4, marginTop: 6, }} />
                        </View>
                    </View>
                    {/* ----- */}
                    <View style={{
                        borderRadius: 8,
                        borderWidth: 2,
                        width: "50%",
                        height: "100%",
                        padding: 20,
                        marginLeft: 10
                    }}>
                        <View style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: "center",
                            alignSelf: 'center'
                        }} />
                        <View style={{
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: "center",
                        }}>
                            <View style={{ width: 120, height: 20, borderRadius: 4, marginTop: 6, }} />
                            <View style={{ width: 120, height: 20, borderRadius: 4, marginTop: 6, }} />
                        </View>
                    </View>

                </View>
                {/* ----- */}
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: 35 }}>
                    <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ width: 80, height: 20, borderRadius: 4 }} />
                        </View>
                        <View
                            style={{ marginTop: 6, width: 240, height: 20, borderRadius: 4 }}
                        />
                        <View style={{ marginTop: 6, width: 300, height: 5, borderRadius: 4, marginTop: 10 }} />
                    </View>
                </View>
                {/* ----- */}
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: 35 }}>
                    <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ width: 80, height: 20, borderRadius: 4 }} />
                            <View style={{ marginLeft: 125, width: 60, height: 20, borderRadius: 4 }} />
                        </View>
                        <View
                            style={{ marginTop: 6, width: 140, height: 20, borderRadius: 4 }}
                        />
                        <View style={{ marginTop: 6, width: 300, height: 5, borderRadius: 4, marginTop: 10 }} />
                    </View>
                </View>
                {/* ----- */}
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20, marginLeft: 35 }}>
                    <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ width: 80, height: 20, borderRadius: 4 }} />
                            <View style={{ marginLeft: 125, width: 60, height: 20, borderRadius: 4 }} />
                        </View>
                        <View
                            style={{ marginTop: 6, width: 120, height: 20, borderRadius: 4 }}
                        />
                        <View style={{ marginTop: 6, width: 300, height: 5, borderRadius: 4, marginTop: 10 }} />
                    </View>
                </View>
            </SkeletonPlaceholder>

        </ScrollView>
    );
};


export default LoaderNotificationHot

