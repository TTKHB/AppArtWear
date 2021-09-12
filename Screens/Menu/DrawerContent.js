import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import IconClose from 'react-native-vector-icons/EvilIcons';
import { List } from 'react-native-paper';
import Rheostat, { AreaRheostat, BarRheostat } from "react-native-rheostat";

export function DrawerContent(props) {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    const demoTwoValues = [20, 50]
    const demoSnaps = [0, 20, 30, 40, 50, 60, 70, 80, 100];
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    {/* Header */}
                    <View style={styles.viewHeader}>
                        <Paragraph style={styles.caption}>Sàng lọc</Paragraph>
                        <View style={styles.viewClose}>
                            <IconClose name="close" size={28} onPress={() => props.navigation.closeDrawer()} />
                        </View>
                    </View>
                    {/* Màu sắc */}
                    <Drawer.Section style={styles.drawerSection}>
                        <TouchableRipple>
                            <View style={styles.preference}>
                                <Text style={{ fontWeight: 'bold', color: 'black' }}>Màu sắc</Text>
                            </View>
                        </TouchableRipple>
                        <View style={styles.viewBody}>
                            {/* Color Red */}
                            <TouchableOpacity>
                                <View style={styles.itemBody}>
                                    <Text style={styles.itemText}>Đỏ</Text>
                                    <View style={{ height: 15, width: 15, backgroundColor: 'red', marginLeft: 10 }}>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* Color White */}
                            <TouchableOpacity>
                                <View style={styles.itemBody}>
                                    <Text style={styles.itemText}>Trắng</Text>
                                    <View style={{ height: 15, width: 15, backgroundColor: 'white', marginLeft: 10, borderWidth: 0.2, borderColor: 'black' }}>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* Color Black */}
                            <TouchableOpacity>
                                <View style={styles.itemBody}>
                                    <Text style={styles.itemText}>Đen</Text>
                                    <View style={{ height: 15, width: 15, backgroundColor: 'black', marginLeft: 10 }}>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* Color Gray */}
                        <View style={styles.viewBody}>
                            <TouchableOpacity>
                                <View style={styles.itemBody}>
                                    <Text style={styles.itemText}>Xám</Text>
                                    <View style={{ height: 15, width: 15, backgroundColor: 'gray', marginLeft: 10 }}>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* Color Brown */}
                            <TouchableOpacity>
                                <View style={styles.itemBody}>
                                    <Text style={styles.itemText}>Nâu</Text>
                                    <View style={{ height: 15, width: 15, backgroundColor: 'brown', marginLeft: 10 }}>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* Color Green */}
                            <TouchableOpacity>
                                <View style={styles.itemBody}>
                                    <Text style={styles.itemText}>Xanh</Text>
                                    <View style={{ height: 15, width: 15, backgroundColor: 'green', marginLeft: 10 }}>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Drawer.Section>
                    <List.Section >
                        <List.Accordion
                            title="Tình trạng"
                            titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}
                            style={{ backgroundColor: '#fff' }}
                        >
                            <View style={styles.viewBody}>
                                <TouchableOpacity>
                                    <View style={styles.itemBody}>
                                        <Text style={styles.itemText}>99%</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* Color Brown */}
                                <TouchableOpacity>
                                    <View style={styles.itemBody}>
                                        <Text style={styles.itemText}>98%</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* Color Green */}
                                <TouchableOpacity>
                                    <View style={styles.itemBody}>
                                        <Text style={styles.itemText}>92%</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </List.Accordion>
                        {/* Thương hiệu */}
                        <List.Accordion
                            title="Thương hiệu"
                            titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}
                            style={{ backgroundColor: '#fff' }}
                            expanded={expanded}
                            onPress={handlePress}>
                            <View style={styles.viewBody}>
                                <TouchableOpacity>
                                    <View style={styles.itemBody}>
                                        <Text style={styles.itemText}>CHANEL</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* Color Brown */}
                                <TouchableOpacity>
                                    <View style={styles.itemBody}>
                                        <Text style={styles.itemText}>GUCCI</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* Color Green */}
                                <TouchableOpacity>
                                    <View style={styles.itemBody}>
                                        <Text style={styles.itemText}>DIOR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.viewBody}>
                                <TouchableOpacity>
                                    <View style={styles.itemBody}>
                                        <Text style={styles.itemText}>JORDAN</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* Color Brown */}
                                <TouchableOpacity>
                                    <View style={styles.itemBody}>
                                        <Text style={styles.itemText}>NIKE</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* Color Green */}
                                <TouchableOpacity>
                                    <View style={styles.itemBody}>
                                        <Text style={styles.itemText}>ADIDAS</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </List.Accordion>
                    </List.Section>
                    {/* Sap xep theo gia */}
                    <Drawer.Section >
                        <TouchableRipple>
                            <View style={styles.preference}>
                                <Text style={{ fontWeight: 'bold', color: 'black' }}>Sắp xếp theo giá (VNĐ)</Text>
                            </View>
                        </TouchableRipple>
                        <View style={{ height: 100, paddingHorizontal: 15 }}>
                            <Rheostat values={demoTwoValues} min={0} max={100}
                                snap snapPoints={demoSnaps} />
                        </View>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    viewHeader: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    viewClose: {
        marginLeft: '25%',
        flexDirection: 'column',
        paddingHorizontal: 10
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: 'bold',
    },
    drawerSection: {
        marginTop: 10,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    viewBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 5,
    },
    itemBody: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#C0C0C0',
        width: 70
    },
    itemText: {
        fontSize: 16,
        fontStyle: 'normal',
        color: '#000000'
    }
});