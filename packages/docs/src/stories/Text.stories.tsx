import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@marci-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        children: 
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quaerat aliquam reprehenderit officiis voluptatibus repellat at, deserunt doloremque tempore saepe autem ratione perspiciatis itaque recusandae ea blanditiis, qui, molestiae accusamus.',
    },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong',
    }
}
