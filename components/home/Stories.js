import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'

const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>

                {USERS.map((story, index) => (
                    <View key={index} style={{ alignItems: 'center' }}>
                        <View style={styles.story_border}>
                            <Image source={{ uri: story.image }} style={styles.story} />
                        </View>
                        <Text style={{ color: "white", fontSize: "12"}}>{
                            story.user.length > 11 ? story.user.slice(0, 12) + "..." : story.user.toLocaleLowerCase()
                        }</Text>
                    </View>
                ))}


                {/* <Text style={{ color: "white" }}>Stories</Text> */}

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    story_border: {
        padding: 4,
        borderWidth: 3,
        borderRadius: 50,
        marginLeft: 14,
        borderColor: 'pink',
    }
})

export default Stories