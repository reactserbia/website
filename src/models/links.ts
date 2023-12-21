export enum NAVIGATION_LINK_TYPE {
    HOME = 'Home',
    IDEOLOGY = 'Ideology'
}

export type NavigationLinkType = {
    href: string
    label: NAVIGATION_LINK_TYPE
}
