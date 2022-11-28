import React from 'react';
import { Container, Heading, Flex, Divider, Center } from '@chakra-ui/react';
import { SAJ_LOCATIONS } from 'app/constants';
import { Card } from 'components';
import { mapList } from 'app/cityMaped';
import { useTranslation } from 'react-i18next';


const Home = () => {
    const { t } = useTranslation();
    return (
        <>
            <Container>
                <Heading size="lg">
                    {t('title')}
                </Heading>
                <Center mt="1rem">
                    <Divider
                        borderColor="primary.100"
                        width="80px"
                    />
                </Center>
                <img
                    alt="test"
                    className="mt-2 position--absolute"
                    onError={(event) => event.currentTarget.style.display = 'none'}
                    onLoad={event => event.currentTarget.style.position = 'static'}
                    src="https://gdurl.com/2MTj"
                />
            </Container>
            <Flex
                flexWrap="wrap"
                justifyContent="center"
                marginBottom="4rem"
                marginTop="4rem"
                zIndex={2}
            >
                {SAJ_LOCATIONS.map(item => (
                    <Card
                        city={item}
                        imageSrc={mapList[item].card}
                        key={item + 'city'}
                    />
                ))}

            </Flex>

        </>
    );
};

export default Home;
