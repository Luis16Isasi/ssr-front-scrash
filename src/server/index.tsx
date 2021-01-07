import * as path from 'path';
import * as express from 'express';
import * as handlebars from 'express-handlebars';

import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

import App, { getStaticProps } from '../client/App';


const PORT = process.env.PORT || 8000
const app = express();

const exphbs = handlebars({
  layoutsDir: path.resolve(__dirname, './templates/'),
})
app.engine('handlebars', exphbs);
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, './templates/'));


app.use(express.static('public'))


app.get('/', (request, response) => {
  let dataComponent = { props: {} };
  if (getStaticProps) {
    dataComponent = getStaticProps();
  }

  const sheet = new ServerStyleSheet();
  const html = ReactDOMServer.renderToString(
    sheet.collectStyles(<App {...dataComponent.props} />)
  );
  const styleTags = sheet.getStyleTags()

  response.render('index', {
    layout: false,
    ssrHTML: html,
    ssrCSS: styleTags,
    initialState: JSON.stringify(dataComponent)
  });
})

app.listen(PORT, () => {
  console.log(`> Server is running in localhost:${PORT}`)
})