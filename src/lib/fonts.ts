import {
	Jacques_Francois_Shadow,
	Libre_Baskerville,
	Open_Sans
} from 'next/font/google'
import localFont from 'next/font/local'

export const jacquesFrancoisShadow = Jacques_Francois_Shadow({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-jacques'
})

export const libreBaskerville = Libre_Baskerville({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	variable: '--font-libre'
})

export const openSans = Open_Sans({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-open-sans'
})

export const sovMode = localFont({
	src: '../../public/fonts/SovMod.ttf',
	variable: '--font-sov-mode'
})
