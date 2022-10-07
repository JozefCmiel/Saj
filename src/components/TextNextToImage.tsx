import React from 'react';
import { Flex, Container, Text, Image, Heading } from '@chakra-ui/react';


interface TextNextToImageProps {
    text: string,
    city: string,
    image: string,
    switched?: boolean,
    title: string,
}

const TextNextToImage = ({ text, city, image, switched, title }: TextNextToImageProps) => {
    return (
        <Flex mt="1rem">
            {switched &&
             <Image
                 alt={`${city}firstPhoto`}
                 height="275px"
                 src={image}
                 width="430px"
             />}
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
             <Image
                 alt={`${city}firstPhoto`}
                 height="275px"
                 src={image}
                 width="430px"
             />}
        </Flex>
    );
};

export default TextNextToImage;
