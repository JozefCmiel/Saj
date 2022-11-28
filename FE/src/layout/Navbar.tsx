import React from 'react';
import logo from 'svg/logo.svg';
import { Link } from 'react-router-dom';
import { Flex, Stack, Box, Menu, MenuButton, IconButton, MenuList, MenuItem } from '@chakra-ui/react';
import { INSTAGRAM_LINK, SAJ_LOCATIONS } from 'app/constants';
import { Icon } from 'components/generic';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
    const { t } = useTranslation();
    return (
        <Box
            background="white"
            zIndex={5}
        >
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

                <div className="menuLinks">
                    <Flex
                        alignItems={'center'}
                    >
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

                            <Link
                                key="akademik"
                                to={'/akademik'}
                            >
                                {t('akademik.title')}
                            </Link>

                            <a
                                href={INSTAGRAM_LINK}
                            >
                                <Icon name="Instagram" />
                            </a>
                        </Stack>
                    </Flex>
                </div>
                <div className="menuDropdown">
                    <Menu>
                        <MenuButton
                            aria-label="Options"
                            as={IconButton}
                            icon={<Icon name="Menu" />}
                            variant="outline"
                        />
                        <MenuList>
                            {SAJ_LOCATIONS.map(item => (
                                <Link
                                    key={`${item}link`}
                                    to={`/${item}`}
                                >
                                    <MenuItem
                                        _active={{ bg: 'primary.20' }}
                                        _focus={{ bg: 'primary.20' }}
                                        _hover={{ bg: 'primary.20' }}
                                        key={`${item}MenuItem`}
                                    >

                                        {t(`${item}.title`)}

                                    </MenuItem>
                                </Link>
                            ))}
                            <Link

                                to={'/akademik'}
                            >
                                {t('akademik.title')}
                            </Link>

                        </MenuList>
                    </Menu>
                </div>
            </Flex>

        </Box>

    );
};

export default Navbar;
