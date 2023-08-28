export const constants = {
  id: 'achivements',
  name: 'Achivements',
  title: 'We Are Proven',
  // thumb: process.env.PUBLIC_URL + '/asset/blue-plat.png',
  thumb:
    'https://github.com/RootChain-kr/rootchain-kr.github.io/blob/gh-pages/asset/blue-plat.png?raw=true',
};

export const proofs = [
  {
    id: 'tps',
    summary: {
      en: 'Compared to other products, the official performance test advantage',
      ko: '타 제품 대비 공인성능시험 우위',
    },
    desc: {
      en: 'KOSYAS certified performance evaluation input processing test result 6,950TPS (Average less than 4,000TPS)',
      ko: '한국시스템보증 공인성능평가 입력처리 시험 결과 6,950TPS (평균 4,000TPS 미만)',
    },
  },
  {
    id: 'nis',
    summary: {
      en: 'Compliant with National Intelligence Service Guidelines',
      ko: '국가정보원 가이드라인 준용',
    },
    desc: {
      en: 'Blockchain platform solution that has been technically verified by complying with the National Intelligence Service’s blockchain encryption technology guidelines',
      ko: '국가정보원 블록체인 암호기술 가이드라인을 준용하여 기술적으로 검증된 블록체인 플랫폼 솔루션',
    },
  },
];

export const histories = [
  {
    id: '2022',
    year: '2022',
    achivements: [
      {
        en: 'KOSYAS Test, KPV-2022-903',
        ko: '한국시스템보증 시험, KPV-2022-903',
        category: 'test',
      },
    ],
  },
  {
    id: '2021',
    year: '2021',
    achivements: [
      {
        en: 'Computer Program Copyright, C-2021-043881',
        ko: '컴퓨터 프로그램 저작권, 20-0457',
        category: 'right',
      },
    ],
  },

  {
    id: '2020',
    year: '2020',
    achivements: [
      {
        en: 'GS(Good Software) Certification Level-1, 20-0457',
        ko: 'GS(Good Software) 인증 1등급, 20-0457',
        category: 'certification',
      },
    ],
  },
  {
    id: '2019',
    year: '2019',
    achivements: [
      {
        en: 'Blockchain Bridge System for data sharing between independent blockchain networks',
        ko: '독립된 블록체인망 간의 데이터 공유를 위한 블록체인 브리지 시스템',
        category: 'patent',
      },
      {
        en: 'Blockchain-based personal information management system and method',
        ko: '블록체인 기반 개인정보 관리 시스템 및 방법',
        category: 'patent',
      },
      {
        en: 'Blockchain-based decision-making system by condition verification',
        ko: '조건 검증에 의한 블록체인 기반 의사결정 시스템',
        category: 'patent',
      },
      {
        en: 'Voting management and counting method, device, and computer-readable recording medium with guaranteed transparency using blockchain',
        ko: '블록체인을 이용한 투명성이 보장되는 투표 관리 및 집계 방법, 장치 및 컴퓨터-판독가능 기록매체',
        category: 'patent',
      },
      {
        en: 'A remote monitoring system (TMS) for measuring equipment based on access control technology to prevent data forgery',
        ko: '데이터 위변조 방지를 위한 접근제어 기술 기반 측정장비 원격 감시 시스템(TMS)',
        category: 'patent',
      },
      {
        en: 'Role-based data protection system using off-chain ledger on blockchain network',
        ko: '블록체인 네트워크 상에서 오프체인 원장을 이용한 역할기반의 데이터 보호 시스템',
        category: 'patent',
      },
      {
        en: 'Blockchain network system based on partitioning operation by cluster of peers',
        ko: '피어의 클러스터에 의한 분할 연산 기반 블록체인망 시스템 및 분할 연산 방법',
        category: 'patent',
      },
    ],
  },
];

export const category = {
  patent: { en: 'patent', ko: '특허' },
  test: { en: 'test', ko: '시험' },
  right: { en: 'right', ko: '권리' },
  certification: { en: 'certification', ko: '인증' },
};
