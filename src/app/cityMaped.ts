import {  KRAKOW, OLOMUNIEC, OSTRAWA, PRAGA, SAJ_LOCATIONS } from 'app/constants';
import brno from 'img/brno.jpg';
import prague from 'img/prague.jpg';
import pragueFirst from 'img/praga/first.jpg';
import pragueSecond from 'img/praga/second.jpg';
import pragueThird from 'img/praga/third.jpg';
import olomoucFirst from 'img/olomouc/first.jpg';
import olomoucSecond from 'img/olomouc/second.jpeg';
import olomoucThird from 'img/olomouc/third.jpg';
import ostrawaFirst from 'img/ostrawa/first.jpeg';
import ostrawaSecond from 'img/ostrawa/second.jpg';
import ostrawaThird from 'img/ostrawa/third.jpg';
import olomouc from 'img/olomouc.jpg';
import krakow from 'img/krakow.jpg';


type sajPhotos = Record<'card' | 'first' | 'second' | 'third', string>

export const mapList: Record<typeof SAJ_LOCATIONS[number], sajPhotos> = {
    //[BRNO]: brno,
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
        first: pragueFirst,
        second: pragueSecond,
        third: pragueThird,
    },
    [OSTRAWA]: {
        card: brno,
        first: ostrawaFirst,
        second: ostrawaSecond,
        third: ostrawaThird,
    },
};
