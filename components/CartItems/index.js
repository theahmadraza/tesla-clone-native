import React, {useState} from 'react'
import {ScrollView, View, Text, ImageBackground, Image, TouchableOpacity, } from "react-native"
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faToolbox, faFan, faKey, faLock, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import Menu from '../Menu'

const CartItem = () => {

    const [locked, setLocked] = useState(true)

    const lockHandler = () =>  {
        if (locked){
            setLocked(false)
        } else {
            setLocked(true)
        }
    }
    return (

        <View style={styles.carContainer}>
            <ImageBackground 
                source={require("../../assets/background.png")}
                style={styles.backgroundImage}
            />
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                <FontAwesomeIcon style={styles.icon} icon={ faCog } size={24}/>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Settings</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon style={styles.icon} icon={ faToolbox } size={24}/>
                    </TouchableOpacity>
            </View> 
            <View style={styles.batterySection}>
                <Image
                source={require("../../assets/battery.png")} 
                style={styles.batteryImage}>
                </Image>
                <Text style={styles.batteryText}>
                    150 mi
                </Text>
            </View>
            <View style={styles.status}>
                <Text style={styles.statusText}>
                    Parked
                </Text>
            </View>
            <ScrollView>
            <View style={styles.controls}>
            <TouchableOpacity>
 
                <View style={styles.controlButton}>
                                       <FontAwesomeIcon style={styles.icon} icon={ faFan } size={24}/>
                                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.controlButton}>
                    
                        <FontAwesomeIcon style={styles.icon} icon={ faKey } size={24}/>
                    
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={lockHandler}>
                <View style={styles.controlButton}>
                    
                        <FontAwesomeIcon style={styles.icon} icon={ locked ? faLock : faUnlockAlt } size={24}/>
                    
                </View>
                </TouchableOpacity>
            </View>
            <Menu />
            </ScrollView>
        </View>

    )
}

export default CartItem;