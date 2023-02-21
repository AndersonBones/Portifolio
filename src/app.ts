import express from 'express'
import path from 'path'
import routes from './routes/index';


class App {

    public app: express.Application;

    constructor(){
        this.app = express();
        this.app.use(express.static(path.join(__dirname, '../public')));
        
        this.app.set('view engine', 'ejs');
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.use(routes);
    }
    
}

export default new App();
