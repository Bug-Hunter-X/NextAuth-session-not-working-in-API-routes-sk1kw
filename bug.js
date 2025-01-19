```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    // Signed in
    res.send({ content: 'This is protected content' });
  } else {
    // Not signed in
    res.status(401).send({ error: 'Unauthorized' });
  }
}
```