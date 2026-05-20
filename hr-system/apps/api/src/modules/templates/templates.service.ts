import {
    CreateTemplateInput,
    UpdateTemplateInput,
} from "./templates.schema";

import { TemplatesRepository } from "./templates.repository";

export class TemplatesService {
    private repository = new TemplatesRepository();

    async getTemplates() {
        return this.repository.findAll();
    }

    async getTemplate(id: string) {
        const template =
            await this.repository.findById(id);

        if (!template) {
            throw new Error("Template not found");
        }

        return template;
    }

    async createTemplate(
        data: CreateTemplateInput
    ) {
        return this.repository.create(data);
    }

    async updateTemplate(
        id: string,
        data: UpdateTemplateInput
    ) {
        return this.repository.update(id, data);
    }

    async deleteTemplate(id: string) {
        return this.repository.delete(id);
    }
}