import {  KRAKOW, OLOMUNIEC, OSTRAWA, PRAGA, SAJ_LOCATIONS, BRNO } from 'app/constants';
import ostrawa from 'img/ostrawa.jpg';
import prague from 'img/prague.jpg';
import brno from 'img/brno.jpg';
import pragueFirst from 'img/praga/first.jpg';
import pragueSecond from 'img/praga/second.jpg';
import pragueThird from 'img/praga/third.jpg';
import olomoucFirst from 'img/olomouc/first.jpg';
import olomoucSecond from 'img/olomouc/second.jpeg';
import olomoucThird from 'img/olomouc/third.jpg';
import ostrawaFirst from 'img/ostrawa/first.jpeg';
import ostrawaSecond from 'img/ostrawa/second.jpg';
import ostrawaThird from 'img/ostrawa/third.jpg';
import krakowFirst from 'img/krakow/first.jpg';
import krakowSecond from 'img/krakow/second.jpg';
import krakowThird from 'img/krakow/third.jpg';
import olomouc from 'img/olomouc.jpg';
import krakow from 'img/krakow.jpg';


type sajPhotos = Record<'card' | 'first' | 'second' | 'third', string>

export const mapList: Record<typeof SAJ_LOCATIONS[number], sajPhotos> = {
    [BRNO]: {
        card: brno,
        first: pragueFirst,
        second: pragueSecond,
        third: pragueThird,
    },
    [PRAGA]: {
        card: prague,
        first: pragueFirst,
        second: pragueSecond,
        third: pragueThird,
    },
    [OLOMUNIEC]: {
        card: olomouc,
        first: olomoucFirst,
        second: olomoucSecond,
        third: olomoucThird,
    },
    [KRAKOW]: {
        card: krakow,
        first: krakowFirst,
        second: krakowSecond,
        third: krakowThird,
    },
    [OSTRAWA]: {
        card: ostrawa,
        first: ostrawaFirst,
        second: ostrawaSecond,
        third: ostrawaThird,
    },
};
