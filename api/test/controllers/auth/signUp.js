import chai from 'chai';
import app from '../../../src/app';
import chaiHTTP from 'chai-http';
import mockData from '../../utils/mockData';


const { validNewUser } = mockData.signup;


//Configure Chai
chai.use(chaiHTTP);
chai.should();


describe('Authentication', () => {
    describe("POST /api/v1/auth/signUp", () => {
        // Test successful user creation
        it('should add a new user', (done) => {
            chai.request(app)
                .post('/api/v1/auth/signUp')
                .send({...validNewUser })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(201);
                    expect(res.body).to.be.a('object');

                    done(err);
                })
        })
    })
})