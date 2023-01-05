// You can learn more about each option below in the Jest docs: https://jestjs.io/docs/configuration.

export default {
    collectCoverageFrom: [
        '(client|pages|shared|server)/**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!(.next|dist|coverage)/**',
    ],
    moduleNameMapper: {
        // Handle CSS imports (with CSS modules)
        // https://jestjs.io/docs/webpack#mocking-css-modules
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

        // Handle CSS imports (without CSS modules)
        '^.+\\.(css|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.ts',

        // Handle image imports
        // https://jestjs.io/docs/webpack#handling-static-assets
        '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$': `<rootDir>/test/__mocks__/fileMock.ts`,

        // Handle module aliases
        '^@client/(.*)$': '<rootDir>/client/$1',

        '^@server/(.*)$': '<rootDir>/server/$1',

        '^@test/(.*)$': '<rootDir>/test/$1',

        '^@shared/(.*)$': '<rootDir>/shared/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/dist/', '<rootDir>/cypress/'],
    transform: {
        // Use babel-jest to transpile tests with the next/babel preset
        // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
    testEnvironment: 'jest-environment-jsdom',
    coverageReporters: ['clover', 'html', 'text'],
}
