import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

// function to get the Bearer : <auth_token>
// does not work since jwtService is undefined
async function test_auth() {
  const paylaod = { sub: "test", username: "test" };
  return this.jwtService.signAsync(paylaod);
}

async function login(app: INestApplication) {
  const token = { "email": "string", "password": "string" };
  const response = await request(app.getHttpServer())
    .post(`/auth`)
    .set('Authorization', `${token}`)

  expect(response.statusCode).toEqual(200)
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
          .expect({ "message": "Unauthorized", "statusCode": 401 })
      });

      it('Authorized - 200', async () => {
        await login(app)

        return await request(app.getHttpServer())
          .get('/patients/0')
          .expect({ "message": "Authorized", "statusCode": 200 })
      });
    })
    describe("PATCH", () => {
      it('Unauthorized - 401', () => {
        return request(app.getHttpServer())
          .patch('/patients/0')
          .expect({ "message": "Unauthorized", "statusCode": 401 })
      });

      it('Authorized - 200', async () => {
        await login(app)

        return request(app.getHttpServer())
          .patch('/patients/0')
          .expect({ "message": "Authorized", "statusCode": 200 })
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
