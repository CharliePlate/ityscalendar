import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: 'gray.800',
				color: 'white',
			},
		},
	},
	colors: {
		gray: {
			50: '#717171',
			100: '#666666',
			200: '#5a5a5a',
			300: '#4f4f4f',
			400: '#444444',
			500: '#393939',
			600: '#2d2d2d',
			700: '#222222',
			800: '#121212',
			900: '#0b0b0b',
		},
	},
});
