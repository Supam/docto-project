import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';


async function login(app: INestApplication) {
  const payload = { "email": "test", "password": "test" };
  const response = await request(app.getHttpServer())
    .post(`/auth`)
    .send(payload)

  expect(response.statusCode).toEqual(201)

  return response.body["accessToken"]
}

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe("/", () => {
    describe("GET", () => {

      it('Unauthorized - 200', () => {
        return request(app.getHttpServer())
          .get('/')
          .expect(200)
          .expect('Hello World!');
      });
    })
  })

  describe("/patients", () => {
    describe("GET", () => {
      it('Unauthorized - 401', () => {
        return request(app.getHttpServer())
          .get('/patients')
          .expect({ "message": "Unauthorized", "statusCode": 401 })
      });
    })
    describe("POST", () => {
      it('Unauthorized - 401', () => {
        return request(app.getHttpServer())
          .post('/patients')
          .expect({ "message": "Unauthorized", "statusCode": 401 })
      });
    })
  })

  describe("/patients/{id}", () => {
    describe("GET", () => {
      it('Unauthorized - 401', () => {
        return request(app.getHttpServer())
          .get('/patients/0')
          .expect(401)
      });

      it('Authorized - 200', async () => {
        const token = await login(app)

        return await request(app.getHttpServer())
          .get('/patients/0')
          .set('Authorization', `Bearer ${await token}`)
          .expect(200)
      });
    })
    describe("PATCH", () => {
      it('Unauthorized - 401', () => {
        return request(app.getHttpServer())
          .patch('/patients/0')
          .expect({ "message": "Unauthorized", "statusCode": 401 })
      });

      it('Patient does not exist - 404', async () => {
        const token = await login(app)

        return request(app.getHttpServer())
          .patch('/patients/-1')
          .set('Authorization', `Bearer ${await token}`)
          .expect({ message: 'Not Found', statusCode: 404 })
      });
    })
    describe("DELETE", () => {
      it('Unauthorized - 401', () => {
        return request(app.getHttpServer())
          .delete('/patients/0')
          .expect({ "message": "Unauthorized", "statusCode": 401 })
      });

      it('Authorized - 200', async () => {
        await login(app)

        return request(app.getHttpServer())
          .delete('/patients/0')
          .expect({ "message": "Unauthorized", "statusCode": 401 })
      });
    })
  })

  describe("/auth", () => {
    describe("GET", () => {
      it('Unauthorized - 401', () => {
        return request(app.getHttpServer())
          .get('/auth')
          .expect({ "message": "Unauthorized", "statusCode": 401 })
      });
    })
  })

  describe("/users", () => {
    describe("POST", () => {
      it('Unauthorized - 401', () => {
        return request(app.getHttpServer())
          .post('/users')
          .expect({ "message": "Unauthorized", "statusCode": 401 })
      });
    })
    describe("PATCH", () => {
      it('Unauthorized - 401', () => {
        return request(app.getHttpServer())
          .patch('/users')
          .expect({ "message": "Unauthorized", "statusCode": 401 })
      });
    })
  })
});
