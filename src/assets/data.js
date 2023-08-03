import symbol from 'assets/image/symbol_dark.svg';
import symbolContrast from 'assets/image/symbol-contrast_dark.svg';
import CubeImg from 'assets/image/blue-cube.png';
import ScatterdImg from 'assets/image/blue-sphere.png';
import flatenImg from 'assets/image/blue-plat.png';

import companyLogo from 'assets/image/logo_company-global.png';

import mofaLogo from 'assets/logo/logo_mofa.png';
import mofaLogoColor from 'assets/logo/logo_mofa-color.png';
import meLogo from 'assets/logo/logo_me.png';
import meLogoColor from 'assets/logo/logo_me-color.png';
import motieLogo from 'assets/logo/logo_motie.png';
import motieLogoColor from 'assets/logo/logo_motie-color.png';
import busanLogo from 'assets/logo/logo_busan.png';
import busanLogoColor from 'assets/logo/logo_busan-color.png';
import kepcoLogo from 'assets/logo/logo_kepco.png';
import kepcoLogoColor from 'assets/logo/logo_kepco-color.png';

import barsIcon from 'assets/icon/bars-solid.svg';
import channelIcon from 'assets/icon/users-solid.svg';
import shareIcon from 'assets/icon/arrow-right-arrow-left-solid.svg';
import thumbIcon from 'assets/icon/thums-up-down.svg';
import blogIcon from 'assets/icon/blog.svg';
import facebookIcon from 'assets/icon/facebook.svg';
import homeIcon from 'assets/icon/home.svg';
import videoIcon from 'assets/icon/video.svg';
import linkedinIcon from 'assets/icon/linkedin.svg';
import githubIcon from 'assets/icon/github.svg';
import linkIcon from 'assets/icon/link-solid.svg';
import userIcon from 'assets/icon/user-large-solid.svg';

export const defaultSettings = {
  language: 'en',
};

export const product = {
  symbol,
  symbolContrast,
  copyright: '©2023 SGA Solutions Co., Ltd. All rights reserved.',
};

export const thumbnails = {
  hero: CubeImg,
  benefits: ScatterdImg,
  history: flatenImg,
};

export const navItems = [
  { id: 'main', name: 'Main' },
  { id: 'features', name: 'Features' },
  { id: 'benefits', name: 'Benefits' },
  { id: 'usecases', name: 'Use cases' },
  {
    id: 'about',
    name: 'About us',
    sub: [
      { id: 'achivements', name: 'Achivements' },
      { id: 'team', name: 'Team' },
    ],
  },
];

export const languages = [
  { id: 'en', name: 'EN', locale: 'global' },
  { id: 'ko', name: 'KO', locale: 'local' },
];

export const icons = {
  barsIcon,
  channelIcon,
  shareIcon,
  thumbIcon,
  blogIcon,
  facebookIcon,
  homeIcon,
  videoIcon,
  linkedinIcon,
  githubIcon,
  linkIcon,
  userIcon,
};

// /////////////////////////////////////////////////////////////////////////

export const features = [
  { id: 'channel', icon: channelIcon },
  { id: 'data', icon: shareIcon },
  { id: 'contract', icon: thumbIcon },
];

export const benefits = [
  { id: 'infra' },
  { id: 'data' },
  { id: 'template' },
  { id: 'platform' },
  { id: 'system' },
  { id: 'service' },
];

export const usecases = [
  { id: 'kepco', logo: kepcoLogoColor, blk: kepcoLogo, url: '' },
  { id: 'busan', logo: busanLogoColor, blk: busanLogo, url: '' },
  { id: 'motie', logo: motieLogoColor, blk: motieLogo, url: '' },
  { id: 'me', logo: meLogoColor, blk: meLogo, url: '' },
  { id: 'mofa', logo: mofaLogoColor, blk: mofaLogo, url: '' },
];

export const history = ['2022', '2021', '2020', '2019'];

export const company = {
  logo: companyLogo,
  brno: '107-88-01818',
  web: 'https://www.sgasol.kr/main',
  email: 'sgagroup@sgacoprp.kr',
  tel: '02-574-6865',
  fax: '02-6499-1814',
  social: [
    { id: 'web', icon: homeIcon, url: 'https://www.sgasol.kr/main' },
    { id: 'blog', icon: blogIcon, url: 'https://blog.naver.com/sga_corp' },
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

export const team = [
  {
    id: 'gmb',
    image: '',
    name: 'GONG MB',
    position: '',
    social: [],
  },
  {
    id: 'kgw',
    image: '',
    name: 'KIM GW',
    position: '',
    social: [],
  },
  {
    id: 'ksh',
    image: '',
    name: 'KIM SH',
    position: 'Front-End Developer',
    social: ['https://github.com/kimseoha1993', ,],
  },
  {
    id: 'rhj',
    image: '',
    name: 'RYU HJ',
    position: '',
    social: [],
  },
  {
    id: 'lhj',
    image: '',
    name: 'LEE HJ',
    position: '',
    social: [],
  },
  {
    id: 'hsg',
    image: '',
    name: 'HONG SG',
    position: '',
    social: [],
  },
];
