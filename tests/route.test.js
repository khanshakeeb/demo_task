import 'dotenv/config';

import chai from 'chai';
import chaiHttp from 'chai-http';
import database from '../src/lib/database';
import app from '../src/app';

chai.use(chaiHttp);
chai.should();

before(function (done) {
    database.connect().then(() => done()).catch((error) => done(error));
});

after(function (done) {
    database.disconnect().then(() => done()).catch((error) => done(error));
});

describe('Check if server is running', () => {
    it('Ok,check if route has been initialized', (done) => {
        chai.request(app).get('/')
            .end((error, response) => {
                response.should.have.status(200);
                done();
            });
    });

    it(`given a user post startDate, endDate, minCount and maxCount values to fetch data API.
    It should return data from DB with range between start and end date 
    and also range between minCount and maxCount of total costs`, (done) => {
        chai.request(app).post('/api/v1/fetch-data')
            .send({
                startDate: "2020-01-26",
                endDate: "2022-03-01",
                minCount: 100,
                maxCount: 1000
            })
            .end((error, response) => {
                response.should.have.status(200);
                done();
            });
    });
});

