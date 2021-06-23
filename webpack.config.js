const path= require('path')
module.exports = {
    mode : "development",
    entry : "./src/App.js",
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : "output.js"
    },
    //LOADER
    devServer : {
        contentBase : path.join(__dirname,"dist"),
        compress : true,
        port : 4000
    },
    //LOADER
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }

}