import React from 'react';
import { Flex, Container, Text, Image, Heading, Center } from '@chakra-ui/react';


interface TextNextToImageProps {
    text: string,
    city: string,
    image: string,
    switched?: boolean,
    title: string,
}

const TextNextToImage = ({ text, city, image, switched, title }: TextNextToImageProps) => {
    return (
        <Flex
            className={switched ? 'textNextToImage--switched' : ''}
            mt="1rem"
            wrap={'wrap'}
        >
            {switched &&
                <Center margin={'auto'}>
                    <Image
                        alt={`${city}firstPhoto`}
                        height="275px"
                        src={image}
                        width="430px"
                    />
                </Center>}
            <Container>
                <Heading
                    mb="1rem"
                    size="sm"
                    textAlign="left"
                >
                    {title}
                </Heading>
                <Text
                    align="left"
                >
                    {text}
                </Text>
            </Container>
            {!switched &&
                <Center margin={'auto'}>
                    <Image
                        alt={`${city}firstPhoto`}
                        height="275px"
                        src={image}
                        width="430px"
                    />
                </Center>}
        </Flex>
    );
};

export default TextNextToImage;
