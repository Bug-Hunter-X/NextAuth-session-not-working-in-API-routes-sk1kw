# NextAuth Session Issue in API Route

This repository demonstrates a common issue encountered when using NextAuth.js with API routes. The problem occurs when the API route fails to properly recognize the user's session, resulting in an 'Unauthorized' response even when the user is logged in.

## Issue Description

The API route attempts to verify the user's session using `unstable_getServerSession`. However, even with a valid session, the route consistently returns a 401 status code.

## Solution

The solution involves ensuring the correct configuration and usage of `unstable_getServerSession` within the API route. The solution code provides a working example of how to correctly authenticate and access session data in the API route.