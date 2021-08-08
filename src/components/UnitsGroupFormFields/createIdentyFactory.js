const createIdentyFactory = () => {
  let id = null;
  return () => {
    id = id === null ? 0 : id + 1;

    return id;
  };
};

export default createIdentyFactory;
