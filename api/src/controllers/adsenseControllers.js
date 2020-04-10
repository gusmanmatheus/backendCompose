const { user } = require("../app/models")
const { adsense } = require("../app/models")

class AdsenseControllers {
  async register(req, res) {
    const userId = req.id;
    const adsenseReq = req.body;
    if (adsenseReq.type == undefined ||
      adsenseReq.learn == undefined ||
      adsenseReq.teach == undefined ||
      adsenseReq.value == undefined) {
        res.status(401).send({"message":"algum dado faltando"})
      }
    var adsenseInsert;
    try{
     adsenseInsert = await adsense.create( {
      type: adsenseReq.type,
      learn: adsenseReq.learn,
      teach: adsenseReq.teach,
      value: adsenseReq.value,
      user_id:5 // trocaaaaaaaaaaaaaaaar userId
    })
  }
    catch(err){
      console.log(err)
      res.status(401).send({"message":"erro ao guardar anuncio"})
    }
    res.send({adsenseInsert})

  }

  async getAll(req, res) {
    try{
    const adsenseSearch = await adsense.findAll()
    res.send({adsenseSearch})
    }catch(err){
      res.send({"message":"ocorreu algum problema ao buscar os anuncios"})
    }
  }

  async getOneForIdAd(req, res) {
    try{
      const adsenseSearch= await adsense.findOne({ where: { 'id':req.params.idP }, })
         res.send({adsenseSearch})
        }catch(err){
          res.send({"message":"ocorreu algum problema ao buscar os anuncios"})
        }
  }

  async getOneForIdUser(req, res) {
    try{
      const adsenseSearch= await adsense.findAll({ where: { 'user_id': req.params.idP }, })
         res.send({adsenseSearch})
        }catch(err){
          res.send({"message":"ocorreu algum problema ao buscar os anuncios"})
        }
  }


}
module.exports = new AdsenseControllers();