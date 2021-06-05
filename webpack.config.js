const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        __filename: 'build.js',
    },
    resolve:{
        extension:['.js', 'jsx']
    },
    module : {
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/, //para no incluir la carpeta d modulos
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.html$/,
                use: [
                    {
                        loader:'html-loader' //internamente usamos el loader
                    }
                ]
            }
        ]
    },
    plugins: [
        //le pasamos una configuracion interna indicandole donde estara nuestro archivo
        new HtmlWebpackPlugin({ 
          template:'./public/index.html',
          filename: './index.html'
        }),
    ],
}