import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@marci-ui/react'

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: (
            <>
                <Text>testando elemento box</Text>
            </>
        )
    },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
