```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    // User is signed in
    res.status(200).json({ message: 'Authenticated', session: session });
  } else {
    // User is not signed in
    res.status(401).json({ message: 'Unauthorized' });
  }
}
```