module.exports = ({ htmlWebpackPlugin }) => {
  const template = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link rel="icon" type="image/png" href="client/app/components/logo/golden_shoe_logo.png"/>
          
          <title>Golden Shoe</title>
        </head>
        <body>
          <div id="app"></div>
        </body>
      </html>
    `;

  return template;
};