import React from 'react';
import { Center, Text, Flex, Divider, Heading, Button, Container } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';


const Akademik = () => {


    const { t } = useTranslation();

    return (
        <>
            <Container
                marginBottom="2rem"
            >
                <Flex direction="column">
                    <Heading
                        size="lg"
                        textTransform="uppercase"
                    >
                        {t('akademik.title')}
                    </Heading>
                    <Center>
                        <Divider
                            borderColor="primary.100"
                            width="45px"
                        />
                    </Center>

                    <Text p="1rem">{t('akademik.desc')}</Text>

                </Flex>

            </Container>

            <Center
                marginTop={'2rem'}
            >
                <div className="tt-widget">
                    <div className="tt-widget-fallback">
                        <p>
                            <a
                                href="https://www.tickettailor.com/events/akademik/810789"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Button
                                    _hover={{
                                        bg: 'primary.50'
                                    }}
                                    bg="primary.100"
                                    color="white"
                                    size="sm"
                                >
                                    {t('akademik.buy')}
                                </Button>
                            </a>
                        </p>
                    </div>
                </div>
            </Center>

        </>
    );
};

export default Akademik;
