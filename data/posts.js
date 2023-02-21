import { USERS } from "./users";

// generate dummy data for posts
export const POSTS = [
    {
        imageUrl: USERS[0].image,
        user: USERS[0].user,
        likes: 232121,
        caption: "I love this place",
        postedAt: "6 minutes ago",
        profile_picture: USERS[0].image,
        comments: [
            {
                user_id: 289,
                user: 'Vitoria Silva',
                comment: 'Nice place'
            },
            {
                user_id: 290,
                user: 'Vitor Silva',
                comment: 'Nice place, WOW!!'
            },
            {
                user_id: 297,
                user: 'Vitor Silva',
                comment: 'Nice place, WOW!!'
            },
            {
                user_id: 297,
                user: 'Ana Silva',
                comment: 'Nice place, WOW!!'
            },

        ]
    },
    {
        imageUrl: USERS[1].image,
        user: USERS[1].user,
        likes: 7321,
        caption: "Missing description #believe #newMusic",
        postedAt: "16 minutes ago",
        profile_picture: USERS[1].image,
        comments: [
            {
                user_id: 291,
                user: 'ana silva',
                comment: 'just watching'
            }
        ]
    },
    {
        imageUrl: USERS[2].image,
        user: USERS[2].user,
        likes: 79821921121,
        caption: "Something would be nothing Nothing if your heart didn't dream with me ...",
        postedAt: "26 minutes ago",
        profile_picture: USERS[2].image,
        comments: [

            {
                user_id: 293,
                user: 'justinbieber',
                comment: 'Pretty Lady, sweet!!'
            },
            {
                user_id: 294,
                user: 'diogoantunes__',
                comment: 'Mine Mine Mine 👸🏼'
            },
            {
                user_id: 292,
                user: 'nothing',
                comment: 'but nothing'
            },
        ]
    },
    {
        imageUrl: USERS[3].image,
        user: USERS[3].user,
        likes: 3901832123,
        caption: "Work hard at gym",
        postedAt: "36 minutes ago",
        profile_picture: USERS[3].image,
        comments: [
            {
                user_id: 293,
                user: 'random',
                comment: '0'
            }
        ]
    }
]

// icons
export const postFooterIcons = [
    {
        name: 'like',
        icon: 'https://img.icons8.com/ios-glyphs/30/FFFFFF/hearts.png',
        activeIcon: 'https://img.icons8.com/material-rounded/24/fa314a/like--v2.png',
    },
    {
        name: 'comment',
        icon: 'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/48/FFFFFF/external-comments-social-media-ui-tanah-basah-basic-outline-tanah-basah.png',
    },
    {
        name: 'share',
        icon: 'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/48/FFFFFF/external-send-arrows-pack-tanah-basah-basic-outline-tanah-basah-2.png',
    },
    {
        name: 'save',
        icon: 'https://img.icons8.com/material/24/FFFFFF/bookmark-outline.png',
        activeIcon: 'https://img.icons8.com/material-rounded/24/FFFFFF/bookmark-ribbon--v1.png',
    }
]

// bottomIcons
export const bottomTabIcons = [
    {
        name: 'home',
        icon: 'https://img.icons8.com/ios/50/FFFFFF/home--v3.png',
        activeIcon: 'https://img.icons8.com/ios-filled/50/FFFFFF/home.png',
    },
    {
        name: 'search',
        icon: 'https://img.icons8.com/external-inkubators-detailed-outline-inkubators/30/FFFFFF/external-search-ecommerce-user-interface-inkubators-detailed-outline-inkubators.png',
        activeIcon: 'https://img.icons8.com/ios-glyphs/30/FFFFFF/search--v1.png',
    },
    {
        name: 'add',
        icon: 'https://img.icons8.com/ios/50/FFFFFF/plus-2-math.png',
        activeIcon: 'https://img.icons8.com/ios-glyphs/30/FFFFFF/filled-plus-2-math.png',
    },
    {
        name: 'reels',
        icon: 'https://img.icons8.com/ios/50/FFFFFF/instagram-reel.png',
        activeIcon: 'https://img.icons8.com/ios-filled/50/FFFFFF/instagram-reel.png',
    },
    // {
    //     name: 'shop',
    //     icon: 'https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-bag.png',
    //     activeIcon: 'https://img.icons8.com/ios-glyphs/30/fa314a/shopping-bag.png',
    // },
    {
        name: 'profile',
        icon: 'https://www.save-insta.com/cdn/https://instagram.fiev8-2.fna.fbcdn.net/v/t51.2885-19/304750734_152124517445474_5060270740423945286_n.jpg?_nc_ht=instagram.fiev8-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=0ac4gCctI8oAX-eh3UH&tn=Wtq7WIiNg268JVR4&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AfBYWhg7oxlXPRcJd6AvtlYX8wHsjYebMr_Sgm6TT4JfRQ&oe=63FAD026&_nc_sid=a9513d',
        activeIcon: 'https://www.save-insta.com/cdn/https://instagram.fiev8-2.fna.fbcdn.net/v/t51.2885-19/304750734_152124517445474_5060270740423945286_n.jpg?_nc_ht=instagram.fiev8-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=0ac4gCctI8oAX-eh3UH&tn=Wtq7WIiNg268JVR4&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AfBYWhg7oxlXPRcJd6AvtlYX8wHsjYebMr_Sgm6TT4JfRQ&oe=63FAD026&_nc_sid=a9513d',
    }
]