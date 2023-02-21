import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { bottomTabIcons } from '../../data/posts'


const bottomTabs = () => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image
                source={{ uri: activeTab === icon.name ? icon.activeIcon : icon.icon }}
                style={[styles.icon,
                     icon.name === 'profile' ? styles.profile_picture() : null,
                     activeTab === 'profile' && icon.name === activeTab ? styles.profile_picture(activeTab) : null]}
            />
        </TouchableOpacity>
    )

    return (
        <View style={styles.wrapper}>
            {/* Create a divider line */}
            <View style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 0.5,
                marginBottom: 10
            }}></View>
            <View style={styles.container}>
                {
                    bottomTabIcons.map(icon => (
                        <Icon key={icon.name} icon={icon} />
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor: '#000'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        padding: 10
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    profile_picture: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'profile' ? 2 : 0,
        borderColor: 'white',
    })
})

export default bottomTabs