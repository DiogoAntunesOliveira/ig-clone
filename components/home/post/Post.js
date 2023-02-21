import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { postFooterIcons } from '../../../data/posts'

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <View style={{ borderBottomColor: 'grey', borderBottomWidth: 0.5, marginBottom: 10 }}></View>
            <PostHeader post={post} />
            <PostImage post={post} />
            <View
                style={{
                    marginHorizontal: 12,
                    marginTop: 10
                }}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentsSection post={post} />
                <Comments post={post} />
            </View>

        </View>
    )
}

// Post Header
const PostHeader = ({ post }) => {
    return (
        <View style={{
            margin: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.story_border}>
                    <Image source={{ uri: post.profile_picture }}
                        style={styles.story} />
                </View>
                <Text style={styles.post_user}>{post.user}</Text>
            </View>

            <View>
                <Image source={{
                    uri: 'https://img.icons8.com/material-rounded/24/FFFFFF/menu-2.png'
                }} style={styles.icon} />
            </View>

        </View>
    )
}

// post image
const PostImage = ({ post }) => {
    return (
        <View style={{
            width: '100%',
            height: 450,
        }}>
            <Image source={{ uri: post.imageUrl }}
                style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
        </View>
    )
}

// post footer
const PostFooter = () => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <View style={styles.left_footer_icon}>
                <Icon imgStyle={styles.footer_icon} imageUrl={postFooterIcons[0].icon} />
                <Icon imgStyle={styles.footer_icon} imageUrl={postFooterIcons[1].icon} />
                <Icon imgStyle={styles.footer_icon} imageUrl={postFooterIcons[2].icon} />
            </View>

            <View>
                <Icon imgStyle={styles.footer_icon} imageUrl={postFooterIcons[3].icon} />
            </View>

        </View>
    )
}

const Icon = ({ imgStyle, imageUrl }) => {
    return (
        <TouchableOpacity>
            <Image style={imgStyle} source={{ uri: imageUrl }} />
        </TouchableOpacity>
    )
}

// likes
const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
        <Text style={{ color: 'white', fontWeight: '600' }}>{post.likes.toLocaleString('en')} likes </Text>
    </View>
)

// caption
const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        <Text style={{ color: 'white', fontWeight: '600' }}>
            <Text style={{ fontWeight: '600' }}>{post.user}</Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
)

// Comments
const Comments = ({ post }) => (
    <>
        {
            // only show the last 4 comments
            post.comments.slice(0, 2).map((comment, index) => (
                <View key={index} style={{ marginTop: 5, flexDirection: 'row' }}>
                    <Text style={{ color: 'white' }}>
                        <Text style={{ fontWeight: '600' }}>{comment.user}</Text>
                        {' '}<Text>{comment.comment}</Text>
                    </Text>
                </View>
            ))
        }
    </>
)

// comments
const CommentsSection = ({ post }) => (
    <View style={{ marginTop: 4 }}>
        {!!post.comments.length && (
            <Text style={{ color: 'grey' }}>
                {
                    post.comments.length > 1 ? 'View all ' + post.comments.length + ' comments' : 'Posted ' + post.postedAt
                }
            </Text>
        )
        }
    </View>
)

// com

const styles = StyleSheet.create({
    story: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    story_border: {
        padding: 2,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: 'pink',
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 20,
        resizeMode: 'contain',
    },
    post_user: {
        color: 'white',
        marginLeft: 8,
        fontWeight: '700',
    },
    footer_icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    left_footer_icon: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '28%',
    }
})


export default Post