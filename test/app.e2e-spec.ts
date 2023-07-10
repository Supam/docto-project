import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

async function test_auth() {
  const paylaod = { sub: "test", username: "test" };
  return this.jwtService.signAsync(paylaod);
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

      it('unAuthorized - 200', () => {
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
    })
    describe("PATCH", () => {
      it('Unauthorized - 401', () => {
        return request(app.getHttpServer())
          .patch('/patients/0')
          .expect({ "message": "Unauthorized", "statusCode": 401 })
      });
    })

    describe("DELETE", () => {
      it('Unauthorized - 401', () => {
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
          .patch('/users')
          .expect({ "message": "Unauthorized", "statusCode": 401 })
      });
    })
  })
});
