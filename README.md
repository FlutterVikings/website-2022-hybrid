# FlutterVikings website 2022

Official website

## requirement

- node v16.16
- npm v8.7

## development

1- `npm install`, if you faced dependencies issues please run with `--force`
2- `npm start` and you should see the website on localhost:8000

## build and deploy

1- to deploy, you need to have access to Netlify
2- then, simply run `npm run deploy:netlify`, this will build and deploy to netlify

## important

1- to update social card for each talk, you need to run development on your localhost
2- then, you need to run `npm run generate_social_card`
3- then stop development
4- run `npm run build`
5- finally run `npm run after-gatsby-build`

this will copy all generated screenshots of talks and you can now deploy to Netlify
