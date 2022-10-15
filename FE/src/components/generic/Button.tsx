import React from 'react';
import { Button } from '@chakra-ui/react';


interface ButtonProps {
    text: string
}

const ButtonWrap = ({ text }: ButtonProps) => {
    return (
        <Button
            _hover={{
                bg: 'primary.50'
            }}
            bg="primary.100"
            color="white"
            size="sm"
        >
            {text}
        </Button>
    );
};

export default ButtonWrap;
