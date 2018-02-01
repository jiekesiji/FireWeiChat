const { mysql } = require('../qcloud');

module.exports = async (ctx,next) =>{
  const body = ctx.request.body;
  var user = await mysql('cAppUser').select("*").where({ telNum: body.telNum}).first();
  if (user){
    ctx.response.status= 205;
  }else{
    await mysql('cAppUser').insert({ telNum: parseInt(body.telNum), nickName: body.nickName, psw: parseInt(body.firstPsw) });
  }
  
}