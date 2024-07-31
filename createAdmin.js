
const bcrypt = require('bcryptjs');

const testPasswordComparison = async () => {
  const password = 'vannj2002';
  const hashedPassword = await bcrypt.hash(password, 10);

  const hash = "$2a$10$z23SLyw6vact0fyZ3h2dg.uF6fA52oPxpSN96x9PpMbr09Z9dpcLi"
  console.log('Hashed Password:', hashedPassword);

  const isMatch = await bcrypt.compare( hashedPassword, hash);
  console.log('Password matches:', isMatch);
};

testPasswordComparison();
