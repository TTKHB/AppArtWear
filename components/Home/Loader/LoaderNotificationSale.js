import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const LoaderNotificationSale = () => {
    return (
        <ScrollView>
            <SkeletonPlaceholder>
                <View style={{ width: 120, height: 20, borderRadius: 4, marginTop: 20, alignSelf: 'center', }} />
                <View style={{ width: '90%', height: 120, borderRadius: 4, marginTop: 20, alignSelf: 'center' }} />
                <View style={{ width: 240, height: 20, borderRadius: 4, marginTop: 10, alignSelf: 'flex-start', marginStart: 22 }} />
                <View style={{ width: 180, height: 20, borderRadius: 4, marginTop: 10, alignSelf: 'flex-start', marginStart: 22 }} />
                {/*  */}
                <View style={{ width: 120, height: 20, borderRadius: 4, marginTop: 20, alignSelf: 'center', }} />
                <View style={{ width: '90%', height: 120, borderRadius: 4, marginTop: 20, alignSelf: 'center' }} />
                <View style={{ width: 240, height: 20, borderRadius: 4, marginTop: 10, alignSelf: 'flex-start', marginStart: 22 }} />
                <View style={{ width: 180, height: 20, borderRadius: 4, marginTop: 10, alignSelf: 'flex-start', marginStart: 22 }} />
                {/*  */}
                <View style={{ width: 120, height: 20, borderRadius: 4, marginTop: 20, alignSelf: 'center', }} />
                <View style={{ width: '90%', height: 120, borderRadius: 4, marginTop: 20, alignSelf: 'center' }} />
                <View style={{ width: 240, height: 20, borderRadius: 4, marginTop: 10, alignSelf: 'flex-start', marginStart: 22 }} />
                <View style={{ width: 180, height: 20, borderRadius: 4, marginTop: 10, alignSelf: 'flex-start', marginStart: 22 }} />
                {/*  */}
                <View style={{ width: 120, height: 20, borderRadius: 4, marginTop: 20, alignSelf: 'center', }} />
                <View style={{ width: '90%', height: 120, borderRadius: 4, marginTop: 20, alignSelf: 'center' }} />
                <View style={{ width: 240, height: 20, borderRadius: 4, marginTop: 10, alignSelf: 'flex-start', marginStart: 22 }} />
                <View style={{ width: 180, height: 20, borderRadius: 4, marginTop: 10, alignSelf: 'flex-start', marginStart: 22 }} />
            </SkeletonPlaceholder>

        </ScrollView>
    );
};


export default LoaderNotificationSale

