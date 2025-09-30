#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Strapi application...');

// 환경 변수 확인
const requiredEnvVars = [
    'ADMIN_JWT_SECRET',
    'JWT_SECRET',
    'API_TOKEN_SALT',
    'TRANSFER_TOKEN_SALT'
];

const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
    console.warn('⚠️  Warning: Missing environment variables:', missingVars.join(', '));
    console.log('📋 Using default values from config files...');
}

// Strapi 시작
const strapi = spawn('npx', ['strapi', 'start'], {
    stdio: 'inherit',
    env: {
        ...process.env,
        NODE_ENV: process.env.NODE_ENV || 'production'
    }
});

strapi.on('error', (error) => {
    console.error('❌ Failed to start Strapi:', error.message);
    process.exit(1);
});

strapi.on('close', (code) => {
    console.log(`🔄 Strapi process exited with code ${code}`);
    if (code !== 0) {
        process.exit(code);
    }
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 Received SIGTERM, shutting down gracefully...');
    strapi.kill('SIGTERM');
});

process.on('SIGINT', () => {
    console.log('🛑 Received SIGINT, shutting down gracefully...');
    strapi.kill('SIGINT');
});
