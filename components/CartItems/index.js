import React from 'react'
import {View, Text} from "react-native"
import styles from './styles'

const CartItem = () => {
    return (

        <View style={styles.carContainer}>
            {/* Header */}
            <View style={styles.header}>
                <Text>Settings</Text>
                <Text>Settings</Text>
                <Text>Settings</Text>
            </View> 
        </View>

    )
}

export default CartItem;