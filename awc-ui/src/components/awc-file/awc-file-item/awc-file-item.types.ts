const AwcFileItemTypes = ['file', 'folder', 'systemFolder', 'publicFolder'] as const;
export type AwcFileItemType = (typeof AwcFileItemTypes)[number];

export interface IAwcFileItemDetails {
    id: string;
    type: AwcFileItemType;
    name: string;
    format: string;
    thumbnail: string;
    localFile: string;
    externalFileLink: string;
    size: number;
    date: string;
    provider: string;
    private: boolean;
}
