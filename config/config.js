export default {
    //singular为true让page变为约定的文件夹
    singular:true,
    plugins:[
        ['umi-plugin-react',{
            
        }]
    ],
    // 配置式的路由
    routes:[{
        path:'/',
        component:"./HelloWorld",
    }]
};