import { svg, SVGTemplateResult } from 'lit';
import { AwcAvatarBadgeStatus } from './awc-avatar-badge.types';

export const AWC_AVATAR_BADGE_ICONS: Record<AwcAvatarBadgeStatus, SVGTemplateResult> = {
    none: svg``,
    complete: svg`
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect width="12" height="12" rx="6" fill="#35D3AC"/>
            <path d="M7.96983 3.96975C8.26272 3.67685 8.73748 3.67685 9.03038 3.96975C9.32322 4.26264 9.32325 4.73742 9.03038 5.03029L6.03038 8.03029C5.88973 8.17092 5.699 8.25002 5.5001 8.25002C5.30121 8.25002 5.11048 8.17092 4.96983 8.03029L2.96983 6.03029L2.91807 5.97365C2.67777 5.67908 2.69525 5.24435 2.96983 4.96975C3.24443 4.69514 3.67916 4.67768 3.97374 4.91799L4.03038 4.96975L5.5001 6.43947L7.96983 3.96975Z" fill="white"/>
        </svg>
    `,
    fail: svg`
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect width="12" height="12" rx="6" fill="#FF7188"/>
            <path d="M8.02648 2.91808C8.32106 2.67782 8.75581 2.69525 9.03039 2.96984C9.30491 3.24443 9.3224 3.67919 9.08215 3.97374L9.03039 4.03038L7.06066 6.00011L9.03039 7.96984L9.08215 8.02648C9.32238 8.32104 9.30492 8.7558 9.03039 9.03038C8.75581 9.30496 8.32106 9.32238 8.02648 9.08214L7.96984 9.03038L6.00012 7.06066L4.03039 9.03038C3.73752 9.32325 3.26274 9.32321 2.96984 9.03038C2.67695 8.73749 2.67695 8.26273 2.96984 7.96984L4.93957 6.00011L2.96984 4.03038L2.91809 3.97374C2.67778 3.67916 2.69524 3.24444 2.96984 2.96984C3.24445 2.69528 3.67919 2.67778 3.97375 2.91808L4.03039 2.96984L6.00012 4.93956L7.96984 2.96984L8.02648 2.91808Z" fill="white"/>
        </svg>
    `,
    dnd: svg`
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect width="12" height="12" rx="6" fill="#FD9038"/>
            <rect x="2.5" y="5" width="7" height="2" rx="1" fill="white"/>
        </svg>
    `,
    offline: svg`
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect width="12" height="12" rx="6" fill="#BBB"/>
        </svg>
    `,
    online: svg`
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect width="12" height="12" rx="6"  fill="#6AC930"/>
        </svg>
    `,
};
