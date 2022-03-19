niro.fi - place to hold my CV

Sveltekit test and tryout.

Deployed to Google cloud App Engine, static files to storage. By linkki adapteriin.

TODO:

- github actions build and deploy to app engine
- ability to shoot the github link
- score counting by how many elements destroyed
- global top scores, a bit backend and database. Top scores ofc 3 letter etc.
- Boss mode after clearing everything. Flying faces etc.
- Game over needed for scores to be meaningfull :)

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
