import { Publisher } from "../entities/publisher.entity";

export default interface IPublisherRepository {
  create(publisher: Omit<Publisher, "id">): Promise<Publisher>;
  getAll(): Promise<Publisher[]>;
  getById(id: number): Promise<Publisher>;
  update(publisher: Publisher): Promise<Publisher>;
  delete(id: number): Promise<Publisher>;
}
