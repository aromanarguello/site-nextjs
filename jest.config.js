module.exports = {
  roots: ["<rootDir>/components"],
  transform: {
    "\\.(ts|tsx)?$": "babel-jest"
  },
  testMatch: ["<rootDir>/components/**/?(*.)test.{ts,tsx}"], // looks for your test
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  setupFilesAfterEnv: [
    "jest-dom/extend-expect",
    "@testing-library/react/cleanup-after-each"
  ] // sets ut test files
}
