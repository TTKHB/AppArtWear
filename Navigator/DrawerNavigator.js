import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductMenu from '../Screens/Menu/ProductMenu';
import { DrawerContent } from '../Screens/Menu/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            screenOptions={{
                drawerWidth: 200,
                // drawerPosition:'right'
            }}
        >
            <Drawer.Screen name="ProductMenu" component={ProductMenu}
            options={{
                headerShown:false,
            }}
            />
        </Drawer.Navigator>

    );
}

export default DrawerNavigator;