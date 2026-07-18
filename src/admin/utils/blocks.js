import {
	clickToCopyIcon,
	terminalInstallIcon,
	secretApiKeyIcon,
	neonCouponIcon,
	paletteSwatchesIcon,
	codeBlockIcon,
	progressRingIcon,
	chatgptPromptIcon,
} from '../../utils/icons';

export default [
	{
		name: 'click-to-copy',
		title: 'Click to Copy',
		icon: clickToCopyIcon,
		isPremium: false,
		required: true,
	},
	{
		name: 'terminal-install',
		title: 'Terminal Install',
		icon: terminalInstallIcon,
		isPremium: true,
	},
	{
		name: 'secrete-api-key',
		title: 'Secret API Key',
		icon: secretApiKeyIcon,
		isPremium: true,
	},
	{
		name: 'neon-coupon',
		title: 'Neon Coupon',
		icon: neonCouponIcon,
		isPremium: true,
	},
	{
		name: 'plette-swatches',
		title: 'Palette Swatches',
		icon: paletteSwatchesIcon,
		isPremium: true,
	},
	{
		name: 'code-block',
		title: 'Code Block',
		icon: codeBlockIcon,
		isPremium: true,
	},
	{
		name: 'procesing-king',
		title: 'Progress Ring',
		icon: progressRingIcon,
		isPremium: true,
	},
	{
		name: 'chatGPT-prompt',
		title: 'ChatGPT Prompt',
		icon: chatgptPromptIcon,
		isPremium: true,
	},
];
