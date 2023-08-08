import { constants as hero } from 'texts/hero';
import { constants as features } from 'texts/features';
import { constants as benefits } from 'texts/benefits';
import { constants as usecases } from 'texts/usecases';
import { constants as achivement } from 'texts/achivements';
import { constants as team } from 'texts/team';
import {
  blogIcon,
  facebookIcon,
  homeIcon,
  linkedinIcon,
  videoIcon,
} from 'common/icons';

export const lable = {
  brochure: 'View brochure',
  contact: 'Contact us',
  learn: 'Learn more',
};

export const sections = [
  hero,
  features,
  benefits,
  usecases,
  { id: 'about', name: 'About us', sub: [achivement, team] },
];

export const languages = ['en', 'ko'];

export const company = {
  logo: process.env.PUBLIC_URL + '/logo/sgasol.png',
  brno: '107-88-01818',
  web: 'https://www.sgasol.kr/main',
  email: 'sgagroup@sgacoprp.kr',
  tel: '02-574-6865',
  fax: '02-6499-1814',
  intro: {
    en: 'SGA Solutions is a differentiated next-generation integrated security company that preoccupies the next-generation vaccine market and cloud-native market beyond the business areas of system security, endpoint security, and application security.',
    ko: '에스지에이솔루션즈는 시스템보안, 엔드포인트보안, 응용보안의 사업 영역을 넘어 차세대 백신 시장 그리고 클라우드 네이티브 시장을 선점하는 차별화된 차세대 통합보안업체입니다.',
  },
  ceo: {
    en: 'Youngcheol Choi',
    ko: '최영철',
  },
  addr: {
    en: '05836, 6th floor, AJ building, 9 Jeongui-ro 8-gil, Songpa-gu, Seoul, Republic of Korea',
    ko: '05836, 서울특별시 송파구 정의로8길 9, AJ빌딩 6층',
  },
  social: [
    {
      id: 'web',
      icon: homeIcon,
      url: 'https://www.sgasol.kr/main',
    },
    {
      id: 'blog',
      icon: blogIcon,
      url: 'https://blog.naver.com/sga_corp',
    },
    {
      id: 'youtube',
      icon: videoIcon,
      url: 'https://www.youtube.com/channel/UC-7oBeCozlCh5Hzko866brg',
    },
    {
      id: 'facebook',
      icon: facebookIcon,
      url: 'https://www.facebook.com/SGAOfficial',
    },
    {
      id: 'linkein',
      icon: linkedinIcon,
      url: 'https://kr.linkedin.com/company/sgasol',
    },
  ],
};

export const product = {
  symbol: process.env.PUBLIC_URL + '/symbol.png',
  name: 'RootChain',
  copyright: '©2023 SGA Solutions Co., Ltd. All rights reserved.',
};
