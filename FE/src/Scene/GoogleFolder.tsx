import React from 'react';
import { Container, Heading, Flex, Divider, Center } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';


const GoogleDocumentViewer = () => {
    const documentURL = 'https://drive.google.com/embeddedfolderview?id=15YZh0CPuRyfbASxi3RKM3KtsKaOPOJGW#grid';

    return (
        <iframe
            height={'100%'}
            src={documentURL}
            width={'100%'}

        >
        </iframe>
    );
};


const GoogleFolder = () => {

    const { t } = useTranslation();
    return (
        <>
            <Container>
                <Heading size="md">
                    {t('work.desc')}
                </Heading>
                <Center mt="1rem">
                    <Divider
                        borderColor="primary.100"
                        width="80px"
                    />
                </Center>
            </Container>
            <Flex
                flexWrap="wrap"
                height="60rem"
                justifyContent="center"
                marginBottom="4rem"
                marginTop="4rem"
                width="100rem"
                zIndex={2}
            >
                <GoogleDocumentViewer />

            </Flex>
        </>


    );
};


export default GoogleFolder;
