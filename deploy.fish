#!/bin/fish

npm run build
cp vercel-copy.json build/vercel.json
vercel deploy --prod
