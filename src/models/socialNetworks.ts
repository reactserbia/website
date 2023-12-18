export enum SOCIAL_NETWORK_ICONS {
    GITHUB = 'GITHUB',
    TWITTER = 'TWITTER',
    LINKEDIN = 'LINKEDIN',
    TELEGRAM = 'TELEGRAM',
    INSTAGRAM = 'INSTAGRAM'
}

export type SocialLinkType = {
    type: SOCIAL_NETWORK_ICONS
    url: string
}
