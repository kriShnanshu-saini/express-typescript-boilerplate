# Express + TypeScript Boilerplate

This is a boilerplate for an Express and Typescript project setup.

## Run locally

Copy below mentioned command and replace <directory_name> in which you want to have this setup cloned and run the command

```bash
git clone https://github.com/kriShnanshu-saini/express-typescript-boilerplate.git <directory_name>
```

```bash
npm install
```

Setup environment variables in `.env` file

```env
NODE_ENV=development

#Server
HOST=localhost
PORT=8000

#CORS
CORS_ORIGIN=

#Database
MONGO_URI=
```

Modify `src/lib/config/envConfig.ts` file as per your environment variables

You can use nodemon or ts-node to run a development server. Run:

```bash
npm run dev
```
