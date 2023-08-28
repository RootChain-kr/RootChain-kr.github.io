import { mdiAccountGroup, mdiCableData, mdiHandshake } from '@mdi/js';

export const constants = {
  id: 'features',
  name: 'Features',
};

export const features = [
  {
    id: 'channel',
    icon: mdiAccountGroup,
    en: 'Multi-channel based distributed ledger management',
    ko: '멀티 채널 기반 분산원장 관리',
  },
  {
    id: 'data',
    icon: mdiCableData,
    en: 'Data sharing between heterogeneous blockchain platforms',
    ko: '이기종 블록체인 간 데이터 공유',
  },
  {
    id: 'contract',
    icon: mdiHandshake,
    en: 'Smart-contract development and management',
    ko: '스마트 컨트랙트 개발 및 관리',
  },
];
