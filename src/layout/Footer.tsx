import React from 'react';
import { Flex, Center, Box, Divider, Image, Heading } from '@chakra-ui/react';
import pzkoLogo from 'img/pzkoLogo.png';
import smpLogo from 'img/smpLogo.png';
import { Icon } from 'components/generic';
import { INSTAGRAM_LINK, PZKO_LINK, SMP_LINK } from 'app/constants';


const Footer = () => {
    return (
        <Flex justifyContent="space-evenly">
            <Box flex="1">
                <Box
                    bg="primary.100"
                    color="white"
                >
                    <Center p="1rem">
                        <Flex
                            direction="column"
                            justifyContent="space-around"
                        >
                            <Heading size="sm">Za współpraca</Heading>
                            <Center>
                                <Divider
                                    borderColor="white"
                                    m="1rem"
                                    width="60px"
                                />
                            </Center>
                            <Flex
                                gap="10px"
                                justifyContent="center"
                                wrap="wrap"
                            >
                                <a
                                    href={PZKO_LINK}
                                >
                                    <Image
                                        alt="pzkoLogo"
                                        flex="0 0 48%"
                                        src={pzkoLogo}
                                    />
                                </a>
                                <a
                                    href={SMP_LINK}
                                >
                                    <Image
                                        alt="smpLogo"
                                        flex="0 0 48%"
                                        src={smpLogo}
                                    />
                                </a>

                            </Flex>
                        </Flex>
                    </Center>
                </Box>
            </Box>
            <Box
                background="white"
                flex="1"
            >
                <Center p="1rem">
                    <Flex
                        direction="column"
                        justifyContent="space-around"
                    >
                        <Heading size="sm">Kontaktuj nas</Heading>
                        <Center>
                            <Divider
                                borderColor="primary.100"
                                m="1rem"
                                width="60px"
                            />
                        </Center>
                        <Flex gap="10px">
                            <Icon name="Phone" />
                            <Icon name="Mail" />
                            <a
                                href={INSTAGRAM_LINK}
                            >
                                <Icon name="Instagram" />
                            </a>
                        </Flex>
                    </Flex>
                </Center>
            </Box>
        </Flex>
    );
};

export default Footer;
