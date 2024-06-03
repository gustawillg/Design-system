import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@marci-ui/react'

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
      src: 'https://github.com/gustawillg.png',
      alt: 'Gustavo'
    },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    },
}