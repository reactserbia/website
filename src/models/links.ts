export enum NAVIGATION_LINK_TYPE {
    HOME = 'Home',
    IDEOLOGY = 'Ideology'
}

export type NavigationLinkType = {
    href: string
    label: NAVIGATION_LINK_TYPE
}

export enum SOCIAL_LINK_TYPE {
    GITHUB = 'github',
    TWITTER = 'twitter',
    TELEGRAM = 'telegram'
}

export type SocialLinkType = {
    type: SOCIAL_LINK_TYPE
    url: string
}
