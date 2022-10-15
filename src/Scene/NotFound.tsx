/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Kernun                                                     *
* Copyright (C) 2000-2022 by Trusted Network Solutions, a.s. *
* All rights reserved.                                       *
\************************************************************/
import { Center, Container, Heading, Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import notFoundCode from 'svg/404.svg';


const NotFound = () => {
    const { t } = useTranslation();
    return (
        <Box
            flex="1"
            position={'relative'}
        >
            <Center>
                <Flex
                    flexDirection="column"
                    paddingY="4rem"
                >

                    <Container>
                        <img
                            alt="404"
                            src={notFoundCode}
                        />
                        <Heading
                            margin="2rem"
                            size={'md'}
                        >
                            {t('notFound.title')}
                        </Heading>
                    </Container>
                </Flex>
            </Center>
        </Box>
    );
};

export default NotFound;
