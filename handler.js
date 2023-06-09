// Next.js request handler
function handler(uri) {
    const request = {};
     // Convert requests ending in numbers into [step].index
     var numericMatch = uri.match(/\/([0-9]+)$/);
     if (numericMatch) {
       request.uri =
         uri.substring(0, uri.length - numericMatch[1].length) + "[patientId].html";
       return request;
     }
   
     // Append ".html" if no extension given
     if (uri.match(/\/[^/.]+$/)) {
       request.uri = uri + ".html";
       return request;
     }
   
     // Append "index.html" if ends in a /
     if (uri.match(/.+\/$/)) {
       request.uri = uri + "index.html";
       return request;
     }
   
     return request;
   }
   
   
   const r = handler('http://localhost:3000/legal/1/binder')
   console.log({r})