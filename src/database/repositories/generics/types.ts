import { DeepPartial, DeleteResult } from "typeorm";
import { Generic } from "../../entities/generics";

export interface IRepository<T extends Generic> {
  getById(id: number): Promise<T | null>;
  getAll(): Promise<T[]>;
  getSomeByFilter(filterQuery: Partial<T>): Promise<T[]>;
  getOneByFilter(filterQuery: Partial<T>): Promise<T | null>;
  create(data: DeepPartial<T>): Promise<T | null>;
  update(id: number, data: DeepPartial<T>): Promise<T | null>;
  delete(id: number): Promise<DeleteResult>;
}
