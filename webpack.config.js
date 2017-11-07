require("babel-polyfill");

module.exports = {
    entry: ['./src/index.src.js'],
    output: {
        filename: './dist/index.js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" ,
                query: {
                    presets: ["env"],
                    plugins: [
                        "transform-custom-element-classes",
                        "transform-es2015-classes",
                        "transform-object-rest-spread"
                    ]
                }
            }
        ]
    }
}