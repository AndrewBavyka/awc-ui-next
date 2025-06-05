import { css } from 'lit';

export const scrollStyle = css`
    * ::-webkit-scrollbar {
        display: block;
        height: 10px;
        width: 10px;
        background-color: rgba(0, 0, 0, 0);
        z-index: 99;
    }

    * ::-webkit-scrollbar-button {
        display: none;
        width: 0;
        height: 0;
    }

    * ::-webkit-scrollbar-corner {
        background-color: transparent;
    }

    * ::-webkit-scrollbar-thumb {
        height: 40px;
        border: 3px solid rgba(0, 0, 0, 0);
        background-clip: padding-box;
        background-color: rgba(0, 0, 0, 0.2);
        -webkit-border-radius: 7px;
        transition: background-color 0.2s;
    }

    * ::-webkit-scrollbar-thumb:hover {
        background-color: #3761e959;
    }
`;
