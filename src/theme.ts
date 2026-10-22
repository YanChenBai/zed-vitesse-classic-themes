import { getStyle, type Appearance, type Variant } from './styles';

type ThemeDefinition = {
	name: string;
	appearance: Appearance;
	variants: Variant[];
};

// Every theme ships in its "classic" (translucent) form only.
const definitions: ThemeDefinition[] = [
	{ name: 'Vitesse Classic Dark', appearance: 'dark', variants: [] },
	{ name: 'Vitesse Classic Dark Soft', appearance: 'dark', variants: ['soft'] },
	{ name: 'Vitesse Classic Black', appearance: 'dark', variants: ['black'] },
	{ name: 'Vitesse Classic Black Soft', appearance: 'dark', variants: ['blackSoft'] },
	{ name: 'Vitesse Classic Light', appearance: 'light', variants: [] },
	{ name: 'Vitesse Classic Light Soft', appearance: 'light', variants: ['soft'] },
];

export const theme = {
	$schema: 'https://zed.dev/schema/themes/v0.2.0.json',
	name: 'Vitesse Classic Theme',
	author: 'YanChenBai',
	themes: definitions.map(({ name, appearance, variants }) => ({
		name,
		appearance,
		style: getStyle(appearance, 'classic', ...variants),
	})),
};
