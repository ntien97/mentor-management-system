import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@Injectable()
export class HashService {
  private static readonly SALT = 10;

  async hash(value: string): Promise<string> {
    return await bcrypt.hash(value, HashService.SALT);
  }

  async compare(data: string, encrypted: string): Promise<boolean> {
    return await bcrypt.compare(data, encrypted);
  }
}
