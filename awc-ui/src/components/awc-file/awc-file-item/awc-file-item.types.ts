export type AwcFileItemType = 'file' | 'folder' | 'systemFolder' | 'publicFolder';

export interface AwcFileItemDetails {
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
