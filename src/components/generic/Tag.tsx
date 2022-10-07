import React from 'react';
import { Tag } from '@chakra-ui/react';


interface TagProps {
    text: string
}

const TagWrap = ({ text }: TagProps) => {
    return (
        <Tag
            background="primary.50"
            borderTopRadius="0px"
            left="0px"
            size="lg"
            variant="solid"
        >
            {text}
        </Tag>
    );
};

export default TagWrap;
