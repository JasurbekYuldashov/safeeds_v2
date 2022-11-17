import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('image-upload')
export class FileUploadController {
  constructor() {}

  @Post('/')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          // Generating a 32 random chars long string
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          //Calling the callback passing the random name generated with the original extension name
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    switch (file.mimetype) {
      case 'image/png':
      case 'image/jpeg':
      case 'image/jpg':
        return {
          statusCode: 200,
          result: {
            url: `uploads/${file.filename}`,
          },
        };
      default:
        throw new HttpException(
          {
            statusCode: HttpStatus.BAD_REQUEST,
            error: 'File type not supported',
          },
          HttpStatus.BAD_REQUEST,
        );
    }
  }
}
