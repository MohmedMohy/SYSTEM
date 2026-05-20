export interface CreateTemplateInput {
    name: string;
    platform: string;
    content: string;
}

export interface UpdateTemplateInput {
    name?: string;
    platform?: string;
    content?: string;
}