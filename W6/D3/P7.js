//Introduction to buffers in NodeJS
// A buffer stores raw bytes
//here we create buffer directly form a string
const textBuffer = Buffer.from("Priya");
//the value in the buffer is the encode from of the text
console.log("Buffer object:",textBuffer);
console.log("Buffer length in bytes:",textBuffer.length);
console.log("Byte at index 0",textBuffer[0]);
console.log("Byte at index 0",textBuffer[1]);
//Each character is stored internally as byte data
//For standard ASCII letters there will be a equivalent code
// Buffers stores numeric value b/w 0-255