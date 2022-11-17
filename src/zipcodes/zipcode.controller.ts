import { Controller, Post, Query } from "@nestjs/common";
import { ZipcodeService } from "./zipcode.service";

@Controller("zipcode")
export class ZipcodeController {
  constructor(private readonly zipcodeService: ZipcodeService) {
  }

  @Post("/")
  async get(@Query() query: any) {
    return await this.zipcodeService.findAll(query);
  }
}
