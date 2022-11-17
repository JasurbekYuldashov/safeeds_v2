import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class ZipcodeService {
  constructor(private readonly httpService: HttpService) {
  }

  async findAll(query?:any){
    const response = await this.httpService.axiosRef.post("https://www.montway.com/es/gis/_suggest",{
      "city_state": {
        "completion": {
          "field": "name_suggest",
          "fuzzy": {
            "fuzziness": 0
          },
          "size": 8
        },
        "text": query.search
      }
    })
    return response.data;
  }
}
