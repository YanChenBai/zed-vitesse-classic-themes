import { theme } from './theme';

await Bun.write('./themes/vitesse-classic-theme.json', JSON.stringify(theme, null, 2));
console.log('Theme generated');
