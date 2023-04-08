/// <reference types="multer" />
export declare class FileUploadController {
    constructor();
    uploadFile(file: Express.Multer.File): {
        statusCode: number;
        result: {
            url: string;
        };
    };
}
