export default {
    async fetch(request) {
      const html = `<!DOCTYPE html>
          <body>
            <h1>Hello World</h1>
            <h2>The current time is: ${new Date().toISOString()}</h2>
          </body>`;
  
      return new Response(html, {
        headers: {
          "content-type": "text/html;charset=UTF-8",
        },
      });
    },
};