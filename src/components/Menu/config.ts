import { MenuEntry, menuStatus } from '@pancakeswap-libs/uikit'

const baseurl="https://titannexswap.finance";
const swap="https://exchange.titannexswap.finance";

// const landingurl="http://69.164.195.140:8091";
// const baseurl="http://69.164.195.140:8092";
// const swap="http://69.164.195.140:8093";

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    calloutClass: 'menulink',
    href: baseurl,
  },
  // {
  //   label: 'Exchange',
  //   icon: 'SwapIcon',
  //   calloutClass: 'menulink',
  //   href:  swap.concat('/#/swap'),
  // },
  // {
  //   label: 'Liquidity',
  //   icon: 'AddPoolIcon',
  //   calloutClass: 'menulink',
  //   href: swap.concat('/#/pool'),
  // },
  {
    label: 'Trade',
    icon: 'SwapIcon',
    calloutClass: 'menulink',
    items: [
      {
        label: 'Exchange',
        href: swap.concat('/#/swap'),
      },
      {
        label: 'Liquidity',
        href: swap.concat('/#/pool'),
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    calloutClass: 'menulink',
    href:  baseurl.concat('/farms'),
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    calloutClass: 'menulink',
    href:  baseurl.concat('/pools'),
  },
  // {
  //   label: 'LaunchPad',
  //   icon: 'NftIcon',
  
  //    href:baseurl.concat('/launchpad'),
  //  calloutClass: 'menulink'
  // },
  {
    label: 'Locked Staking',
    icon: 'NftIcon',
    href:baseurl.concat('/lockedstaking'),
    calloutClass: 'menulink'
   
  },
  // {
  //   label: 'How It Works',
  //   icon: 'HelpIcon',
  //   href: "https://www.youtube.com/watch?v=mQoQslRS2FM&list=PLR21KoH9MrilMdKhz_ZbT_EjZJw_j6uyC",

  //   calloutClass: 'menulink'
  // },
  
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
   
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href:  baseurl.concat('/teams'),
  //     },
  //     {
  //       label: 'Task Center',
  //       href:  baseurl.concat('/profile/tasks'),
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: baseurl.concat('/profile'),
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: '#',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: '#',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: '#',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: '#',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   calloutClass: 'menulink',
  //   items: [     
  //     {
  //       label: 'Blog',
  //       href: baseurl,
  //     },
  //   ],
  // }, 
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Voting',
  //       href: '#',
  //     },
  //     {
  //       label: 'Github',
  //       href: '#',
  //     },
  //     {
  //       label: 'Docs',
  //       href: '#',
  //     },
  //     {
  //       label: 'Blog',
  //       href: '#',
  //     },
  //   ],
  // },
]

export default config
