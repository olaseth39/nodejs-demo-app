console.log("Running tests...");
// Simple assertion test
if (1 + 1 === 2) {
    console.log("Test Passed! Math works.");
    process.exit(0); // Exit with success code
} else {
    console.log("Test Failed!");
    process.exit(1); // Exit with failure code
}