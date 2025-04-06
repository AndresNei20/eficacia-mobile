import { IconName, IconProps } from "../app/components/icon-button/icon.types";


export const IconComponents: Record<IconName, (props: IconProps) => string> = {
  inicio: ({ fill }) => `
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.37146 16.2857V11.1429H10.6286V16.2857H14.7V9.42858H17.1429L9.00004 1.71429L0.857178 9.42858H3.30003V16.2857H7.37146Z" fill="${fill}"/>
    </svg>
  `,
  agenda: ({ fill }) => `
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.17868 2.39997H8.19653V8.5714L6.1876 7.41426L4.17868 8.5714V2.39997ZM13.8215 0.857117H4.17868C3.75244 0.857117 3.34365 1.01967 3.04225 1.30901C2.74086 1.59835 2.57153 1.99078 2.57153 2.39997V14.7428C2.57153 15.152 2.74086 15.5445 3.04225 15.8338C3.34365 16.1231 3.75244 16.2857 4.17868 16.2857H13.8215C14.2478 16.2857 14.6566 16.1231 14.958 15.8338C15.2594 15.5445 15.4287 15.152 15.4287 14.7428V2.39997C15.4287 1.99078 15.2594 1.59835 14.958 1.30901C14.6566 1.01967 14.2478 0.857117 13.8215 0.857117Z" fill="${fill}"/>
    </svg>
  `,
  gestion: ({ fill }) => `
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8741 2H6.04287C3.50999 2 2 3.44631 2 5.87236V11.451C2 13.8837 3.50999 15.33 6.04287 15.33H11.8671C14.4 15.33 15.91 13.8837 15.91 11.4576V5.87236C15.9169 3.44631 14.4069 2 11.8741 2ZM13.1335 9.16487H9.48035V12.664C9.48035 12.9373 9.24376 13.1639 8.95847 13.1639C8.67317 13.1639 8.43658 12.9373 8.43658 12.664V9.16487H4.78339C4.49809 9.16487 4.2615 8.93826 4.2615 8.665C4.2615 8.39174 4.49809 8.16512 4.78339 8.16512H8.43658V4.666C8.43658 4.39274 8.67317 4.16613 8.95847 4.16613C9.24376 4.16613 9.48035 4.39274 9.48035 4.666V8.16512H13.1335C13.4188 8.16512 13.6554 8.39174 13.6554 8.665C13.6554 8.93826 13.4188 9.16487 13.1335 9.16487Z" fill="${fill}"/>
    </svg>
  `,
  portafolio: ({ fill }) => `
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8 4.31429H13.3429V15.1143H4.08571V4.31429H5.62857V3.54286C5.62857 3.13367 5.79112 2.74123 6.08046 2.45189C6.36981 2.16255 6.76224 2 7.17143 2H10.2571C10.6663 2 11.0588 2.16255 11.3481 2.45189C11.6374 2.74123 11.8 3.13367 11.8 3.54286V4.31429ZM14.1143 4.31429H14.8857C15.2949 4.31429 15.6873 4.47684 15.9767 4.76618C16.266 5.05552 16.4286 5.44795 16.4286 5.85714V13.5714C16.4286 13.9806 16.266 14.3731 15.9767 14.6624C15.6873 14.9517 15.2949 15.1143 14.8857 15.1143H14.1143V4.31429ZM3.31429 4.31429V15.1143H2.54286C2.13367 15.1143 1.74123 14.9517 1.45189 14.6624C1.16255 14.3731 1 13.9806 1 13.5714V5.85714C1 5.00857 1.69429 4.31429 2.54286 4.31429H3.31429ZM7.17143 3.54286V4.31429H10.2571V3.54286H7.17143Z" fill="${fill}"/>
    </svg>
  `,
  perfil: ({ fill }) => `
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.00004 0.857117C10.0798 0.857117 11.1154 1.28607 11.879 2.04961C12.6425 2.81315 13.0715 3.84874 13.0715 4.92855C13.0715 6.00836 12.6425 7.04394 11.879 7.80748C11.1154 8.57102 10.0798 8.99997 9.00004 8.99997C7.92023 8.99997 6.88464 8.57102 6.1211 7.80748C5.35756 7.04394 4.92861 6.00836 4.92861 4.92855C4.92861 3.84874 5.35756 2.81315 6.1211 2.04961C6.88464 1.28607 7.92023 0.857117 9.00004 0.857117ZM9.00004 11.0357C13.499 11.0357 17.1429 12.8577 17.1429 15.1071V17.1428H0.857178V15.1071C0.857178 12.8577 4.50111 11.0357 9.00004 11.0357Z" fill="${fill}"/>
    </svg>
  `,
  add: ({ fill }) => `
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8741 2H6.04287C3.50999 2 2 3.44631 2 5.87236V11.451C2 13.8837 3.50999 15.33 6.04287 15.33H11.8671C14.4 15.33 15.91 13.8837 15.91 11.4576V5.87236C15.9169 3.44631 14.4069 2 11.8741 2ZM13.1335 9.16487H9.48035V12.664C9.48035 12.9373 9.24376 13.1639 8.95847 13.1639C8.67317 13.1639 8.43658 12.9373 8.43658 12.664V9.16487H4.78339C4.49809 9.16487 4.2615 8.93826 4.2615 8.665C4.2615 8.39174 4.49809 8.16512 4.78339 8.16512H8.43658V4.666C8.43658 4.39274 8.67317 4.16613 8.95847 4.16613C9.24376 4.16613 9.48035 4.39274 9.48035 4.666V8.16512H13.1335C13.4188 8.16512 13.6554 8.39174 13.6554 8.665C13.6554 8.93826 13.4188 9.16487 13.1335 9.16487Z" fill="${fill}"/>
    </svg>
  `,
  arrowRight: ({ fill }) => `
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.03711 14.3768L6.19468 15.4861L12.9629 8.99997L6.19468 2.51379L5.03711 3.62313L10.6477 8.99997L5.03711 14.3768Z" fill="${fill}"/>
    </svg>
  `,
  shop: ({ fill }) => `
    <svg width="18" height="18" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.9842 5.94017L16.7592 3.79138C16.4334 1.44866 15.3707 0.494507 13.0978 0.494507H4.75085C2.47019 0.494507 1.41519 1.44866 1.08163 3.81465L0.872178 5.94793C0.794605 6.77796 1.01957 7.58473 1.50828 8.21307C2.09784 8.98105 3.00545 9.41546 4.01391 9.41546C4.99133 9.41546 5.92997 8.92675 6.51953 8.14326C7.04703 8.92675 7.94688 9.41546 8.94758 9.41546C9.94828 9.41546 10.8249 8.95002 11.3601 8.17428C11.9574 8.94226 12.8806 9.41546 13.8425 9.41546C14.8742 9.41546 15.8051 8.95778 16.3869 8.15101C16.8523 7.53043 17.0618 6.74693 16.9842 5.94017Z" fill="${fill}"/>
      <path d="M8.10776 12.2823C7.16617 12.3787 6.45442 13.1794 6.45442 14.1284V16.1599C6.45442 16.3601 6.61753 16.5232 6.81771 16.5232H10.3542C10.5544 16.5232 10.7175 16.3601 10.7175 16.1599V14.3879C10.7249 12.8384 9.81301 12.1044 8.10776 12.2823Z" fill="${fill}"/>
      <path d="M16.2162 10.6954V13.0071C16.2162 15.1482 14.4786 16.8858 12.3375 16.8858C12.1281 16.8858 11.9574 16.7151 11.9574 16.5057V14.6517C11.9574 13.6587 11.6549 12.883 11.0653 12.3555C10.5456 11.8823 9.83967 11.6496 8.96309 11.6496C8.76916 11.6496 8.57522 11.6573 8.36577 11.6806C6.98497 11.8202 5.93772 12.9839 5.93772 14.3802V16.5057C5.93772 16.7151 5.76706 16.8858 5.55761 16.8858C3.41658 16.8858 1.67894 15.1482 1.67894 13.0071V10.7109C1.67894 10.1679 2.21419 9.80334 2.71842 9.98176C2.92787 10.0516 3.13732 10.1059 3.35453 10.1369C3.44761 10.1524 3.54846 10.1679 3.64155 10.1679C3.76566 10.1834 3.88978 10.1912 4.0139 10.1912C4.91375 10.1912 5.79809 9.85764 6.49625 9.28359C7.16338 9.85764 8.03221 10.1912 8.94758 10.1912C9.8707 10.1912 10.724 9.87315 11.3911 9.29911C12.0893 9.8654 12.9581 10.1912 13.8425 10.1912C13.9821 10.1912 14.1217 10.1834 14.2536 10.1679C14.3467 10.1602 14.432 10.1524 14.5174 10.1369C14.7578 10.1059 14.975 10.0361 15.1922 9.96624C15.6965 9.79558 16.2162 10.1679 16.2162 10.6954Z" fill="${fill}"/>
    </svg>
  `,
  question: ({fill}) => `
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60.9524 32C60.9524 47.99 47.99 60.9524 32 60.9524C16.01 60.9524 3.04761 47.99 3.04761 32C3.04761 16.01 16.01 3.04761 32 3.04761C47.99 3.04761 60.9524 16.01 60.9524 32Z" fill="#3BD4AE"/>
    <path d="M39.8036 19.2869H25.1012C20.6905 19.2869 17.75 22.2274 17.75 26.6381V35.4596C17.75 39.8703 20.6905 42.8108 25.1012 42.8108V45.9424C25.1012 47.1186 26.4097 47.8243 27.3801 47.1627L33.9226 42.8108H39.8036C44.2143 42.8108 47.1548 39.8703 47.1548 35.4596V26.6381C47.1548 22.2274 44.2143 19.2869 39.8036 19.2869ZM32.4524 37.1798C31.8349 37.1798 31.3497 36.6799 31.3497 36.0771C31.3497 35.4743 31.8349 34.9744 32.4524 34.9744C33.0699 34.9744 33.5551 35.4743 33.5551 36.0771C33.5551 36.6799 33.0699 37.1798 32.4524 37.1798ZM34.3049 31.0783C33.7315 31.4605 33.5551 31.7105 33.5551 32.1221V32.4309C33.5551 33.0337 33.0552 33.5336 32.4524 33.5336C31.8496 33.5336 31.3497 33.0337 31.3497 32.4309V32.1221C31.3497 30.4167 32.5994 29.5786 33.0699 29.2552C33.6139 28.8876 33.7903 28.6377 33.7903 28.2554C33.7903 27.5203 33.1875 26.9175 32.4524 26.9175C31.7173 26.9175 31.1145 27.5203 31.1145 28.2554C31.1145 28.8582 30.6146 29.3581 30.0118 29.3581C29.409 29.3581 28.9091 28.8582 28.9091 28.2554C28.9091 26.3 30.497 24.7121 32.4524 24.7121C34.4078 24.7121 35.9956 26.3 35.9956 28.2554C35.9956 29.9315 34.7606 30.7695 34.3049 31.0783Z" fill="white"/>
  </svg>

  `,
  completed: ({fill}) => `
  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 17.8894C13.4183 17.8894 17 14.3077 17 9.8894C17 5.47113 13.4183 1.8894 9 1.8894C4.58172 1.8894 1 5.47113 1 9.8894C1 14.3077 4.58172 17.8894 9 17.8894ZM13.0203 8.34289C13.2155 8.14763 13.2155 7.83105 13.0203 7.63579C12.825 7.44052 12.5084 7.44052 12.3132 7.63579L8.00005 11.9489L5.68694 9.63579C5.49167 9.44052 5.17509 9.44052 4.97983 9.63579C4.78457 9.83105 4.78457 10.1476 4.97983 10.3429L7.6465 13.0096C7.84176 13.2048 8.15834 13.2048 8.3536 13.0096L13.0203 8.34289Z" fill="#3BD4AE"/>
  </svg>
  `,
  error: ({fill}) => `
  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 9.88943C17 14.3077 13.4183 17.8894 9 17.8894C4.58172 17.8894 1 14.3077 1 9.88943C1 5.47116 4.58172 1.88943 9 1.88943C13.4183 1.88943 17 5.47116 17 9.88943Z" fill="#EB5757"/>
  </svg>
  `,
  started: ({fill}) => `
  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.8169 6.21187C14.0549 2.81969 11.095 1.3031 8.50139 1.3031C8.50139 1.3031 8.50139 1.3031 8.49406 1.3031C5.9078 1.3031 2.95521 2.81969 2.18593 6.20454C1.3214 9.98503 3.63658 13.1867 5.73196 15.2088C6.50858 15.9561 7.50498 16.3298 8.50139 16.3298C9.4978 16.3298 10.4942 15.9561 11.2635 15.2088C13.3589 13.1867 15.6741 9.99236 14.8169 6.21187ZM10.5162 8.44646H6.4866C6.18621 8.44646 5.93711 8.19736 5.93711 7.89697C5.93711 7.59658 6.18621 7.34748 6.4866 7.34748H10.5162C10.8166 7.34748 11.0657 7.59658 11.0657 7.89697C11.0657 8.19736 10.8166 8.44646 10.5162 8.44646Z" fill="#0041A3"/>
    <path d="M15.5 13.5199C15.5 15.1768 14.1569 16.5199 12.5 16.5199C10.8431 16.5199 9.5 15.1768 9.5 13.5199C9.5 11.863 10.8431 10.5199 12.5 10.5199C14.1569 10.5199 15.5 11.863 15.5 13.5199Z" fill="#FFCD00" stroke="white"/>
  </svg>
  `,
  finished: ({fill}) => `
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.8169 6.05037C14.0549 2.65819 11.095 1.1416 8.50139 1.1416C8.50139 1.1416 8.50139 1.1416 8.49406 1.1416C5.9078 1.1416 2.95521 2.65819 2.18593 6.04304C1.3214 9.82353 3.63658 13.0252 5.73196 15.0473C6.50858 15.7946 7.50498 16.1683 8.50139 16.1683C9.4978 16.1683 10.4942 15.7946 11.2635 15.0473C13.3589 13.0252 15.6741 9.83086 14.8169 6.05037ZM10.9045 6.65847L7.97388 9.58908C7.86398 9.69898 7.72478 9.75027 7.58557 9.75027C7.44637 9.75027 7.30717 9.69898 7.19727 9.58908L6.09829 8.4901C5.88582 8.27763 5.88582 7.92596 6.09829 7.71349C6.31076 7.50102 6.66243 7.50102 6.8749 7.71349L7.58557 8.42416L10.1279 5.88186C10.3403 5.66939 10.692 5.66939 10.9045 5.88186C11.117 6.09433 11.117 6.446 10.9045 6.65847Z" fill="#0041A3"/>
    <path d="M16.5 14.0486C16.5 15.7054 15.1569 17.0486 13.5 17.0486C11.8431 17.0486 10.5 15.7054 10.5 14.0486C10.5 12.3917 11.8431 11.0486 13.5 11.0486C15.1569 11.0486 16.5 12.3917 16.5 14.0486Z" fill="#3BD4AE" stroke="white"/>
  </svg>
  `,
  triangle: ({fill}) => `
  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.10279 10.3765C5.87259 11.7099 7.79709 11.7099 8.56689 10.3765L12.464 3.62653C13.2338 2.29319 12.2716 0.626528 10.732 0.626528L2.93772 0.626527C1.39812 0.626526 0.435875 2.29319 1.20568 3.62653L5.10279 10.3765Z" fill="white"/>
  </svg>
  `,
};

export const iconNames = Object.keys(IconComponents) as IconName[];

