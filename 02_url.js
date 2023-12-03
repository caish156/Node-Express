import url from "url";

// console.log(url)
// {
//   Url: [Function: Url],
//   parse: [Function: urlParse],
//   resolve: [Function: urlResolve],
//   resolveObject: [Function: urlResolveObject],
//   format: [Function: urlFormat],
//   URL: [class URL] {
//     createObjectURL: [Function: createObjectURL],
//     revokeObjectURL: [Function: revokeObjectURL]
//   },
//   URLSearchParams: [class URLSearchParams],
//   domainToASCII: [Function: domainToASCII],
//   domainToUnicode: [Function: domainToUnicode],
//   pathToFileURL: [Function: pathToFileURL],
//   fileURLToPath: [Function: fileURLToPath],
//   urlToHttpOptions: [Function: urlToHttpOptions]
// }

let str = "https://www.youtube.com:8080/watch";

// console.log(url.parse(str));

/* Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.youtube.com',
  port: null,
  hostname: 'www.youtube.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/watch',
  path: '/watch',
  href: 'https://www.youtube.com/watch'
}*/
let URL = url.parse(str); // true or false is needed as 2nd args

// console.log(URL.protocol)
// console.log(URL.host);
// console.log(URL.hostname);
// console.log(URL.pathname);
// console.log(URL.href);

// Resolve
https: str = "https://www.youtube.com:8080/watch";
console.log(url.resolve("https://www.youtube.com", "play"));

str =
  "www.youtube.com/watch?v=_73zx0gD7UM&list=PL6CYFPIG9KmFG97FAjan3ada54K-3XBN0&index=3&t=416s";

let data = url.parse(str, true);
//  if 2nd argument is true
console.log(data.query);
/* query: {
    v: '_73zx0gD7UM',
    list: 'PL6CYFPIG9KmFG97FAjan3ada54K-3XBN0',
    index: '3',
    t: '416s'
  },*/

data = url.parse(str, false);
//   if   2nd argument is false
console.log(data.query);
//  query: 'v=_73zx0gD7UM&list=PL6CYFPIG9KmFG97FAjan3ada54K-3XBN0&index=3&t=416s',
