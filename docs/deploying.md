# Deploying

Deployment uses the Netlify service. It's setup to use the base directory, run `npm run build` and use the files found in the `./dist` folder as the site.

It is setup in the admin panel.

## Git submodules

Git submodules are copied into the `./dist` folder when running the build script.
