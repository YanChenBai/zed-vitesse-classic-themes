import { expect, it } from 'bun:test';
import generatedRaw from '../themes/vitesse-classic-theme.json';
import { theme } from '../src/theme';

// A JSON import widens every literal type (`appearance` in particular becomes `string`), so the
// file is asserted to the shape the generator promises before the two are compared.
const generated = generatedRaw as unknown as typeof theme;

it('should match the generated theme', () => {
	expect(theme).toEqual(generated);
});
