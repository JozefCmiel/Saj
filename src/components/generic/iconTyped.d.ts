import type { Icon } from 'react-feather';


declare module 'react-feather' {
    const foo: Record<string, Icon>;
    export = foo;
}
