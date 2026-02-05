export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Maintenance in Progress</title>
        <style>
            body { 
                font-family: -apple-system, system-ui, sans-serif; 
                background: #f3f4f6; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                height: 100vh; 
                margin: 0; 
            }
            .card { 
                background: white; 
                padding: 3rem; 
                border-radius: 1rem; 
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); 
                text-align: center; 
                max-width: 400px; 
            }
            h1 { color: #111827; margin-top: 0; }
            p { color: #4b5563; line-height: 1.5; }
            .icon { font-size: 3rem; margin-bottom: 1rem; }
        </style>
    </head>
    <body>
        <div class="card">
            <div class="icon">🛠️</div>
            <h1>Back Soon!</h1>
            <p>We are currently performing scheduled maintenance to make your experience even better.</p>
        </div>
    </body>
    </html>`;

    return new Response(html, {
      status: 503, // Notifies browsers/bots that this is temporary
      headers: {
        "content-type": "text/html;charset=UTF-8",
      },
    });
  },
};
