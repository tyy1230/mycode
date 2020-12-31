if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
} else {
    const aaa = require('./dev');
    module.exports= aaa.uriz;
}