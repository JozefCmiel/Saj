/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Kernun                                                     *
* Copyright (C) 2000-2022 by Trusted Network Solutions, a.s. *
* All rights reserved.                                       *
\************************************************************/
import React, { useEffect, useState } from 'react';
import { Center, Text, Flex, Box, Divider, Checkbox, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';
import { Icon } from 'components/generic';


const Akademik = () => {
    const [ understand, setUnderstand ] = useState(false);

    const onClick = () => {
        setUnderstand(!understand);
    };
    const { t } = useTranslation();
    const { loginWithRedirect } = useAuth0();
    const { isAuthenticated,  } = useAuth0();
    useEffect(() => {
        if (!isAuthenticated) {
            loginWithRedirect();
        }
    }, []);
    return (
        <>

            <Flex
                flexWrap="wrap"
                justifyContent="space-evenly"
                marginTop="2rem"
                zIndex={2}
            >
                <Box
                    display={'block'}
                    minWidth={'200px'}
                    padding="2rem"
                >
                    <Center>
                        <Icon
                            name="Clipboard"
                            size="52px"
                        />
                    </Center>

                    <Text>{t('akademik.steps.first')}</Text>
                </Box>
                <Box
                    display={'block'}
                    minWidth={'200px'}
                    padding="2rem"

                >
                    <Center>
                        <Icon
                            name="ShoppingCart"
                            size="52px"
                        />
                    </Center>

                    <Text>{t('akademik.steps.second')}</Text>
                </Box>

                <Box
                    display={'block'}
                    minWidth={'200px'}
                    padding="2rem"

                >
                    <Center>
                        <Icon
                            name="Smile"
                            size="52px"
                        />
                    </Center>

                    <Text>{t('akademik.steps.third')}</Text>
                </Box>

            </Flex>

            <Center>
                <Divider
                    borderColor="primary.100"
                    width="45px"
                />
            </Center>

            <Center>
                <Text fontWeight={700}>
                    Uwaga:
                </Text>
                <Text>
                    Jesli chcecie wieczerze tak prosimy przy zakupie biletu przylaczyc taktez donation
                    w wartosci 200kč za miejsce
                </Text>

            </Center>
            <Center padding="1rem">
                <Checkbox
                    colorScheme="red"
                    isChecked={understand}
                    onChange={onClick}
                >
                    Rozumiem
                </Checkbox>
            </Center>
            <Center
                marginTop={'2rem'}
            >

                <div className="tt-widget">
                    <div className="tt-widget-fallback">
                        <p>
                            {understand &&
                                <a
                                    href="https://www.tickettailor.com/all-tickets/akademik/?ref=website_widget"
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


                                </a>}
                        </p>
                    </div>
                    <script
                        data-inline-bg-fill="false"
                        data-inline-inherit-ref-from-url-param=""
                        data-inline-minimal="true"
                        data-inline-ref="website_widget"
                        data-inline-show-logo="false"
                        data-type="inline"
                        data-url="https://www.tickettailor.com/all-tickets/akademik/"
                        src="https://cdn.tickettailor.com/js/widgets/min/widget.js"
                    >
                    </script>
                </div>
            </Center>

        </>
    );
};

export default Akademik;
