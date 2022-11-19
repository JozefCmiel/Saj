import React from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';


const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
};

interface AnimatedPageType  {
    children: React.ReactNode
}

const AnimatedPage = ({ children }: AnimatedPageType) => {
    return (
        <motion.div
            animate="animate"
            className="fullSize"
            exit="exit"
            initial="initial"
            transition={{ duration: 0.5, ease: [ 0.17, 0.67, 0.83, 0.67 ] }}
            variants={animations}
        >
            {children}
        </motion.div>
    );
};

interface SceneProps {
    children: React.ReactNode,
}

const Scene = ({ children }: SceneProps) => {
    return (
        <AnimatedPage>
            <Box
                flex="1"
                position={'relative'}
            >
                <Center>
                    <Flex
                        flexDirection="column"
                        paddingY="4rem"
                    >
                        {children}
                    </Flex>
                </Center>

            </Box>
        </AnimatedPage>
    );
};

export default Scene;
