import React from 'react';
import logo from 'svg/logo.svg';
import { Link } from 'react-router-dom';
import { Flex, Stack, Box } from '@chakra-ui/react';
import { INSTAGRAM_LINK, SAJ_LOCATIONS } from 'app/constants';
import { Icon } from 'components/generic';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
    const { t } = useTranslation();
    return (
        <Box background="white">
            <Flex
                alignItems={'center'}
                className="mr-4 ml-4 mt-2 mb-2"
                h={16}
                justifyContent={'space-between'}
            >
                <Box>
                    <Link to="/">
                        <img
                            alt="logo"
                            src={logo}
                        />
                    </Link>
                </Box>


                <Flex alignItems={'center'}>
                    <Stack
                        direction={'row'}
                        spacing={7}
                    >

                        {SAJ_LOCATIONS.map(item => (
                            <Link
                                key={`${item}link`}
                                to={`/${item}`}
                            >
                                {t(`${item}.title`)}
                            </Link>
                        ))}
                        <a
                            href={INSTAGRAM_LINK}
                        >
                            <Icon name="Instagram" />
                        </a>
                    </Stack>
                </Flex>
            </Flex>
        </Box>

    );
};

export default Navbar;
