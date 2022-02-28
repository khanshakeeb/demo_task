import FetchDataController from './controllers/fetch.data.controller';

export default (app)=>{
    app.get('/',(req, res)=>{
        res.json({
            text: 'Rest API server is running...'
        })
    });

    app.post('/api/v1/fetch-data', FetchDataController.fetchData);


};