import BaseEntity from "@/data-fetching/entity/base-entity";

const dataInjection = <T extends BaseEntity>(
  constructor: new () => T,
  data: unknown
) => {
  if (data instanceof constructor) {
    return data;
  }

  const instance = new constructor();

  Object.assign(instance, data);

  return instance;
};

export default dataInjection;
