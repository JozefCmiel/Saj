import React from 'react';
import * as FeatherIcons from 'react-feather';


interface IconProps {
    name: string, // would be better if typed to all FeatherIcons names,
    size?: string
}

const Icon = ({ name, size }: IconProps) => {

    const FeatherIcon = FeatherIcons[name];
    if (!FeatherIcon) {
        throw 'Unknown icon';
    }
    return (
        <FeatherIcon size={size} />
    );
};

export default Icon;
