import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/instagram_header_white.png')} />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image
                        source={{
                            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADIklEQVR4nO2YSUhVURzGj4pmNBiUTTRIYS6yRdNCgkBo0USbsggiDUQoJYICoYKiTesQGogKIqNhE7USIigKqpU0aPO0yeaBJrH8xel9l87CfO/cdx9e4/7gwsXn9/2/89655/7PMSYhISEhISHBD6AQWAwcANqBLqAbeApcBnYB5Rn4lAO7gSvSdsurXd62RmEuBpAH1AAPyIwLQFkfPmX6LBPuA6uiHMRQoNUp0AHsAOYB4zTIsUA1cBD4rP/7AtQ6PnXAV332Sf9bLW2evOYDO4FOp94JoDiKQVyT4QeFKUijGaGQll6gUZe9R1NneBqPAmAD8FGaqzZL2EHYb+mUjB4BMzz1dir2aAC9ul/p6VEBPFaGkzZTmIGslcF730E4HvXOFNkU0qNCGSyrfcVFzjexPkwAx+uIvbL0qFMWm6nIR7hcwttAfpYhRtorS4984K4yLfMRHpWo2cQEYLsyHfYR3ZJojokJpJZ7S7uP6K1Eo01MAMYo0xsfkW0Z8HqwcgypBcjS7SN6LVGpiQmk3vyWLh9RsELMNjEBmBuspD6ioLdqMDEB2KhMx31EmyU6bWICcFaZmnxEZeqPvtkmMKcJM8tTAnwHfgGTfcV202PZlrOEmWdpVpZLYcQrJH41kL8KqRYnWEWXhm3jb8qgJScpM8uxXxmuZ9sW9GhuLoo0YWb1l6h2T9avAmBv0Br0tQ/PFcA04J1q74nC0G4722T4DJgaSdL+a05y9kMX022vfYxLdaphuQeMj8S471oTnNOazsgbV/tLAC9UwLYwUyIt8LdGh2o8935neBZ66DwzCyP0rgJeyvsJMD0q738VnOgsy/Ztuy4Cz1rghzxv2OkVTdr0hYcAx1T4TyMHDAvhUwzsc3xaQ59fZQOwFfipEHeASg/tLGe7YN8TW3KbNn2gBTqIRk1mY38HaeoYmjQtg+ehysQBUv3QIWeKtPU1z7WMu4fYZ4BRJm4Aa5yDiy63ybP3+luw4tWYOAOMB84rsN3TtOgKDrHP2f23GSwADXpmAux9vRmMAJV6U9trphnMkNqmlgx0joSEBPN/8BvfrDZyoUnJKQAAAABJRU5ErkJggg=='
                        }}
                        style={styles.icon} />
                </TouchableOpacity>
                {/* <TouchableOpacity>
                    <Image
                        source={{
                            uri: 'https://img.icons8.com/ios/50/FFFFFF/plus-2-math.png'}}
                        style={styles.icon} />
                </TouchableOpacity> */}
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>13</Text>
                    </View>
                    <Image
                        source={{
                            uri: 'https://img.icons8.com/ios/50/FFFFFF/telegram-app.png'
                        }}
                        style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    icon: {
        width: 25,
        height: 25,
        marginLeft: 20,
        resizeMode: 'contain',
    },
    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 25,
        bottom: 18,
        borderRadius: 25,
        width: 25,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex : 100,
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: '600',
    }
})

export default Header