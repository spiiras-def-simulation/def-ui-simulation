const createObjectIdIterator = () => {
  let counter = 0;
  return () => {
    counter += 1;

    return `G${counter - 1}`;
  };
};

const genObjectId = createObjectIdIterator();

export default genObjectId;
