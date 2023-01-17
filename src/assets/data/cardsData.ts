import aratakiItto from '../images/aratakiItto.png';
import beidou from '../images/beidou.png';
import kamisatoAyaka from '../images/kamisatoAyaka.png';
import keqing from '../images/keqing.png';
import nilou from '../images/nilou.png';
import ningguang from '../images/ningguang.png';
import raidenShogun from '../images/raidenShogun.png';
import shenhe from '../images/shenhe.png';
import venti from '../images/venti.png';
import yaeMiko from '../images/yaeMiko.png';
import yelan from '../images/yelan.png';
import zhongli from '../images/zhongli.png';

export type Card = {
	id: number;
	src: string;
	title: string;
};

export const cardsData: Card[] = [
	{ id: 1, src: aratakiItto, title: 'Arataki Itto' },
	{ id: 2, src: beidou, title: 'Beidou' },
	{ id: 3, src: kamisatoAyaka, title: 'Kamisato Ayaka' },
	{ id: 4, src: keqing, title: 'Keqing' },
	{ id: 5, src: nilou, title: 'Nilou' },
	{ id: 6, src: ningguang, title: 'Ningguang' },
	{ id: 7, src: raidenShogun, title: 'Raiden Shogun' },
	{ id: 8, src: shenhe, title: 'Shenhe' },
	{ id: 9, src: venti, title: 'Venti' },
	{ id: 10, src: yaeMiko, title: 'Yae Miko' },
	{ id: 11, src: yelan, title: 'Yelan' },
	{ id: 12, src: zhongli, title: 'Zhongli' },
];
