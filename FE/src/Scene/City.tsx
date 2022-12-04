/************************************************************\
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE             *
* CAUTION: This file contains SENSITIVE INFORMATION          *
* Kernun                                                     *
* Copyright (C) 2000-2022 by Trusted Network Solutions, a.s. *
* All rights reserved.                                       *
\************************************************************/
import { BRNO, SAJ_LOCATIONS } from 'app/constants';
import React from 'react';
import { Center, Container, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import TextNextToImage from 'components/TextNextToImage';
import { useTranslation } from 'react-i18next';
import { mapList } from 'app/cityMaped';


interface CityProps {
    city: typeof SAJ_LOCATIONS[number]
}

const City = ({ city }: CityProps) => {
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
                        {t(`${city}.title`)}
                    </Heading>
                    <Center>
                        <Divider
                            borderColor="primary.100"
                            width="45px"
                        />
                    </Center>

                    <Text p="1rem">{t(`${city}.desc`)}</Text>

                </Flex>

            </Container>
            {city === BRNO ? null :
                <>
                    <TextNextToImage
                        city={city}
                        image={mapList[city].first}
                        text={t(`${city}.saj.first.desc`)}
                        title={t(`${city}.saj.first.title`)}
                    />
                    <TextNextToImage
                        city={city}
                        image={mapList[city].second}
                        switched={true}
                        text={t(`${city}.saj.second.desc`)}
                        title={t(`${city}.saj.second.title`)}

                    />

                    <TextNextToImage
                        city={city}
                        image={mapList[city].third}
                        text={t(`${city}.saj.third.desc`)}
                        title={t(`${city}.saj.third.title`)}

                    />
                </>}
        </>
    );
};

export default City;
