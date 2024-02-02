import React from 'react';
import { Box, Image,  Container, Text } from '@chakra-ui/react';
import { SAJ_LOCATIONS, MAX_CARD_TEXT_LENGHT } from 'app/constants';
import { Tag } from 'components/generic';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


interface CardProps {
    city: typeof SAJ_LOCATIONS[number],
    imageSrc: string,
}

const Card = ({ city, imageSrc }: CardProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onClickCard = () => {
        navigate(`/${city}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <Box
            _hover={{
                shadow: 'md',
                cursor: 'pointer'
            }}
            background="white"
            borderRadius="lg"
            borderWidth="1px"
            flex="0 1 19%"
            margin="5px"
            maxW="sm"
            minWidth="20rem"
            onClick={onClickCard}
            overflow="hidden"
        >

            <Image
                alt={city + 'img'}
                src={imageSrc}
            />
            <Tag text={t(`${city}.title`)} />
            <Container>
                <Box p="4">
                    <Text
                        align="left"
                    >{t(`${city}.desc`).slice(0, MAX_CARD_TEXT_LENGHT) + '...'}
                    </Text>
                </Box>
            </Container>
        </Box>
    );
};

export default Card;
