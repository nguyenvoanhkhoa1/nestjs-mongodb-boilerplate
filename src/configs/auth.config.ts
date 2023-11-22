import { registerAs } from '@nestjs/config';
import { seconds } from 'src/common/helper/constants/helper.function.constant';

export default registerAs(
    'auth',
    (): Record<string, any> => ({
        accessToken: {
            secretKey: process.env.AUTH_JWT_ACCESS_TOKEN_SECRET_KEY ?? '123456',
            expirationTime: seconds(
                process.env.AUTH_JWT_ACCESS_TOKEN_EXPIRED ?? '1h'
            ), // 1 hours

            encryptKey: process.env.AUTH_JWT_PAYLOAD_ACCESS_TOKEN_ENCRYPT_KEY,
            encryptIv: process.env.AUTH_JWT_PAYLOAD_ACCESS_TOKEN_ENCRYPT_IV,
        },

        refreshToken: {
            secretKey:
                process.env.AUTH_JWT_REFRESH_TOKEN_SECRET_KEY ?? '123456000',

            encryptKey: process.env.AUTH_JWT_PAYLOAD_REFRESH_TOKEN_ENCRYPT_KEY,
            encryptIv: process.env.AUTH_JWT_PAYLOAD_REFRESH_TOKEN_ENCRYPT_IV,
        },

        subject: process.env.AUTH_JWT_SUBJECT ?? 'ackDevelopment',
        audience: process.env.AUTH_JWT_AUDIENCE ?? 'https://example.com',
        issuer: process.env.AUTH_JWT_ISSUER ?? 'ack',
        prefixAuthorization: 'Bearer',
        payloadEncryption:
            process.env.AUTH_JWT_PAYLOAD_ENCRYPT === 'true' ? true : false,

        password: {
            attempt: false,
            maxAttempt: 5,
            saltLength: 8,
            expiredIn: seconds('182d'), // 182 days
        },
    })
);
