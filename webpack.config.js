module.exports={
    //xuat file
    entry:'./app/app.jsx', //file can xuat ra
    output:{
        path:__dirname,
        filename:'./public/bundle.js' //file duoc xuat ra
    },
    module:{
        loaders:[
            {
                loader:'babel-loader',
                query:{
                    presets:['react','es2015']
                },
                test:/\.jsx?$/, //dich ra file bundel.js
                exclude:/node_modules/ //tru bo
            }

        ]
    }
};