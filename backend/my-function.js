exports.handler = async (req, res) => {
  const { operation, num1, num2 } = req.body;
  const result = operation === 'add' ? num1 + num2 : num1 - num2;
  return { result };
};
