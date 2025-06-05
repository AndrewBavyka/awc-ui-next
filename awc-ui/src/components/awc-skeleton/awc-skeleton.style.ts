import { css } from 'lit';

export const skeletonStyle = css`
    :host {
        display: block;
        position: relative;
        --color-primary: var(--colors-light-input-background);
        --color-secondary: #e7eaf2;
        --border-radius-rounded: var(--corner-radius-circular);
        --border-radius-8: var(--corner-radius-l);
        --border-radius-12: var(--corner-radius-xl);
        --sheen-color: hsl(240 4.9% 98.5%);
    }

    .awc-skeleton {
        display: flex;
        width: 100%;
        height: 100%;
        min-height: 1rem;
    }

    .awc-skeleton__indicator {
        transition: background-color 0.25s ease-in-out;
        flex: 1 1 auto;
        background-color: var(--color-primary);
    }

    :host([color='secondary']) .awc-skeleton__indicator {
        background-color: var(--color-secondary);
    }

    :host([rounded='8']) .awc-skeleton__indicator {
        border-radius: var(--border-radius-8);
    }

    :host([rounded='12']) .awc-skeleton__indicator {
        border-radius: var(--border-radius-12);
    }

    :host([rounded='rounded']) .awc-skeleton__indicator {
        border-radius: var(--border-radius-rounded);
    }

    :host([effect='none']) .awc-skeleton__indicator {
        animation: none;
    }

    :host([effect='pulse']) .awc-skeleton__indicator {
        animation: pulse 2s ease-in-out 0.5s infinite;
    }

    :host([effect='pulse'][color='secondary']) .awc-skeleton__indicator {
        animation: pulse 2s ease-in-out 0.5s infinite;
        background-color: var(--color-secondary);
    }

    @keyframes pulse {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }

    :host([effect='sheen']) .awc-skeleton__indicator {
        background: linear-gradient(270deg, var(--sheen-color), var(--color-primary), var(--color-primary), var(--sheen-color));
        background-size: 400% 100%;
        animation: sheen 7s ease-in-out infinite;
    }

    :host([effect='sheen'][color='secondary']) .awc-skeleton__indicator {
        background: linear-gradient(270deg, var(--sheen-color), var(--color-secondary), var(--color-secondary), var(--sheen-color));
        background-size: 400% 100%;
        animation: sheen 7s ease-in-out infinite;
    }

    @keyframes sheen {
        from {
            background-position: 200% 0;
        }
        to {
            background-position: -200% 0;
        }
    }
`;
