// Import required modules
const chai = require('chai');
const app = require('../src/index.js');
const chaiHttp = require('chai-http');
const Subscriber = require('../src/models/subscribers.js');

const expect = chai.expect;
chai.use(chaiHttp);

describe('API Testing', ()=>{

    // Testing GET / API
    describe('GET /', ()=>{
        it('should render HTML file', (done)=>{
            chai.request(app)
             .get('/')
             .end((err, res) => {
                if(err) return done(err);
                expect(res).to.have.status(200);
              done();
             });
        });
    });

    // Testing GET /subscribers API
    describe('GET /subscribers', ()=>{
        it('should get data of all subscribers', (done)=>{
            chai.request(app)
             .get('/subscribers')
             .end((err, res) => {
                if(err) return done(err);
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
              done();  
             });
        });
    });

    // Testing GET /subscribers/names API
    describe('GET /subscribers/names', ()=>{
        it('should get names and subscribedChannel of all subscribers', (done)=>{
            chai.request(app)
             .get('/subscribers/names')
             .end((err, res) => {
                if(err) return done(err);
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
              done(); 
             });
        });
    });

    // Testing GET /subscribers/id API
    describe('GET /subscribers/:id', () => {
        // for valid id
        it('should get a single subscriber by ID', (done) => {
          const subscriberId = '652fa227c9d86b47d49b5c85';
    
          chai.request(app)
            .get(`/subscribers/${subscriberId}`)
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body).to.be.an('object');
              done();
            });
        });
        
        // for Invalid id
        it('should handle invalid subscriber ID', (done) => {
          const invalidSubscriberId = 'INVALID_ID';
    
          chai.request(app)
            .get(`/subscribers/${invalidSubscriberId}`)
            .end((err, res) => {
              expect(res).to.have.status(400);
              expect(res.body).to.have.property('Error_message');
              done();
            });
        });
      });
    
});