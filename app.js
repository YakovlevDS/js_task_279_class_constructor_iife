class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    this.contents = contents;
    this._getsCount = 0;
    this._getcCount = 0;
  }

  get fullName() {
    return this._fullName;
  }

  get filename() {
    return this._fullName.split(".").slice(0, -1).join(".");
  }

  get extension() {
    return this._fullName.split(".").pop();
  }

  getContents() {
    return this.contents;
  }

  write(str) {
    this.contents += `${this.getContents() && "\n"}${str}`;
  }

  gets() {
    return this.contents.split("\n")[this._getsCount++];
  }

  getc() {
    return this.contents[this._getcCount++];
  }
}

// solution 2

// class File {
//   constructor(file, contents) {
//     Object.defineProperties(this, {
//       'fullName': { value: file },
//       'filename': {
//         value: file.slice(0, file.lastIndexOf('.'))
//       },
//       'extension': {
//         value: file.slice(file.lastIndexOf('.') + 1)
//       },
//       'line': {
//         value: 0,
//         configurable: true,
//         writable: true
//       },
//       'char': {
//         value: 0,
//         configurable: true,
//         writable: true
//       },
//       'contents': {
//         value: contents,
//         configurable: true,
//         writable: true
//       }
//     });
//   }
//   getContents() {
//     return this.contents;
//   }
//   write(str) {
//     this.contents += (this.contents ? '\n' : '') + str;
//   }
//   gets() {
//     return this.getContents().split('\n')[this.line++];
//   }
//   getc() {
//     return this.getContents()[this.char++];
//   }
// }

// solution 3

// class File {
//   constructor(fullName, contents) {
//     Object.defineProperty(this, "fullName", {value: fullName});
//     Object.defineProperty(this, "filename", {
//       value: fullName.slice(0, fullName.lastIndexOf(".")),
//     });
//     Object.defineProperty(this, "extension", {
//       value: fullName.slice(fullName.lastIndexOf(".") + 1),
//     });
//     Object.defineProperty(this, "content", {
//       configurable: true,
//       writable: true,
//       value: contents,
//     });
//     Object.defineProperty(this, "line", {
//       configurable: true,
//       writable: true,
//       value: 0,
//     });
//     Object.defineProperty(this, "char", {
//       configurable: true,
//       writable: true,
//       value: 0,
//     });
//   }
//   getContents() {
//     return this.content;
//   }
//   write(str) {
//     this.content == "" ? (this.content += str) : (this.content += "\n" + str);
//   }
//   gets() {
//     const lines = this.content.split("\n");
//     if (this.line > lines.length) return undefined;
//     this.line++;
//     return lines[this.line - 1];
//   }
//   getc() {
//     const chars = this.content.split("");
//     if (this.char > chars.length) return undefined;
//     this.char++;
//     return chars[this.char - 1];
//   }
// }

// ===========================================================
const myFile = new File("hello.txt", "Hello World");
console.log(myFile.fullName); // hello.txt
myFile.fullName = "goodbye.txt"; // Reassignment should fail
console.log(myFile.fullName); // still "hello.txt"

const file1 = new File("hello_world.txt", "Hello World");
console.log(file1.filename); // "hello_world"
file1.filename = "goodbye_world"; // Reassignment should fail
console.log(file1.filename); // still "hello_world"

const file2 = new File(
  "class.phptester.php",
  "<?php /* Some PHP code here */ ?>"
);
console.log(file2.filename); // "class.phptester" - the filename should be correctly identified even if the filename itself contains the '.' character

const fileWithComplexName = new File(
  "alpha.beta.gamma.delta.txt",
  "alpha beta gamma delta"
);
console.log(fileWithComplexName.extension); // "txt"
fileWithComplexName.extension = "js"; // Reassignment should fail
console.log(fileWithComplexName.extension); // still "txt"

const myFile3 = new File("hello.txt", "Hello World\nHello World");
console.log(myFile3.getContents()); // "Hello World\nHello World"

const myFile4 = new File("example.txt", "");
console.log(myFile4.getContents()); // ""
myFile4.write("Line 1");
console.log(myFile4.getContents()); // "Line 1"
myFile4.write("Line 2");
console.log(myFile4.getContents()); // "Line 1\nLine 2"
myFile4.write("Line 3");
console.log(myFile4.getContents()); // "Line 1\nLine 2\nLine 3"c

const myFile5 = new File(
  "example.txt",
  "Line 1\nLine 2\nLine 3\nLine 4\nLine 5"
);
console.log(myFile5.gets()); // "Line 1"
console.log(myFile5.gets()); // "Line 2"
console.log(myFile5.gets()); // "Line 3"
console.log(myFile5.gets()); // "Line 4"
console.log(myFile5.gets()); // "Line 5"
console.log(myFile5.gets()); // undefined
console.log(myFile5.gets()); // undefined
console.log(myFile5.gets()); // undefined

const myFile6 = new File(
  "Lorem Ipsum.txt",
  "Lorem ipsum dolor sit amet, adispicing eu."
);
console.log(myFile6.getc()); // "L"
console.log(myFile6.getc()); // "o"
console.log(myFile6.getc()); // "r"
console.log(myFile6.getc()); // "e"
console.log(myFile6.getc()); // "m"
console.log(myFile6.getc()); // " "
console.log(myFile6.getc()); // "i"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // "p"
console.log(myFile6.getc()); // undefined (when number of calls exceeds character count)
