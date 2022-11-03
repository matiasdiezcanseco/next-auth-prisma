## NextAuth with Prisma

Testing the deployment of a NextJS app with session control (NextAuth + Prisma)

### Scripts

To start development server:

```bash
npm run dev
# or
yarn dev
```

To start backend:

```bash
#start db
db:init

#generate prisma schema
prisma:schema

#generate prisma migrations
prisma:migrate

#setup db with schema
prisma:deploy
```
