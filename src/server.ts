import App from './app'

import dotenv from 'dotenv'
dotenv.config();

App.app.listen(process.env.PORT || 8080)