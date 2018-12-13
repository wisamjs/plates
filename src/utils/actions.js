export const createAction = (type, payload = {}, meta = {}) => {
  return {
    type,
    payload,
    meta,
  };
};
