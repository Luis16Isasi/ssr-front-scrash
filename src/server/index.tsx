import * as path from 'path';
import * as express from 'express';
import * as handlebars from 'express-handlebars';

// import App, { getStaticProps } from '../client/App';


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
  response.render('index', {
    layout: false,
    ssrHTML: "<h1>hello</h1>",
    ssrCSS: "",
    initialState: ""
  });
})

app.listen(PORT, () => {
  console.log(`> Server is running in localhost:${PORT}`)
})