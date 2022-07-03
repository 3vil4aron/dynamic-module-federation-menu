import { createScope } from 'https://harmony.azureedge.net/npm/@harmony/enablers/5.2.0/utilities/scope.js';
import theme from 'https://harmony.azureedge.net/npm/@harmony/enablers/5.2.0/themes/partner-center/index.js';

const root = document.getElementsByTagName('lib-price-engine').item(0);
const scope = createScope({
    rootElement: root,
    theme
});

const components = await Promise.all([
    /*
    You will need to import the components you want to use here
    https://aka.ms/harmony
    */
    import('https://harmony.azureedge.net/npm/@harmony/enablers/5.2.0/components/message-bar/message-bar.js'),
    import('https://harmony.azureedge.net/npm/@harmony/enablers/5.2.0/components/task-menu/task-menu.js'),
    import('https://harmony.azureedge.net/npm/@harmony/enablers/5.2.0/components/task-item/task-item.js'),
    import('https://harmony.azureedge.net/npm/@harmony/enablers/5.2.0/components/anchor/anchor.js')
]);

components.map(c => scope.registerComponent(c));