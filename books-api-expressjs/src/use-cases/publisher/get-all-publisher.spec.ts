import { MockPublisherRepository } from "@/tests/mock-repositories/publisher.repository.mock";
import { describe, expect, it } from "vitest";
import { GetAllPublisher } from "./get-all-publisher";

describe("GetAllPublishers", () => {
  const mockPublisherRepository = new MockPublisherRepository();
  const getAllPublishers = new GetAllPublisher(mockPublisherRepository);

  it("deve retornar os publishers cadastrados no sistema", async () => {
    const result = await getAllPublishers.execute();

    expect(mockPublisherRepository.getAll).toBeCalledTimes(1);
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
});
