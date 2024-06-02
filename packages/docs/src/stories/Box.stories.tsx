import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@marci-ui/react'

export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: (
            <>
                <span>testando elemento box</span>
            </>
        )
    },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
    
}
