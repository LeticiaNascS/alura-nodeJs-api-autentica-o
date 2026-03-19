const dataBase = require("../models");
const uuid = require("uuid");

class PermissaoService {
  async cadastrar(dto) {
    const permissao = await dataBase.permissoes.findOne({
      where: {
        nome: dto.nome,
      },
    });
    if (permissao) {
      throw new Error("Permissao ja cadastrada");
    }
    try {
      const newPermissao = await dataBase.permissoes.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao,
      });
      return newPermissao;
    } catch (error) {
      throw new Error("Erro ao cadastrar permissao");
    }
  }
  async buscarTodos() {
    const permissoes = await dataBase.permissoes.findAll();
    return permissoes;
  }
  async buscarPorId(id){
    const permissoes = await dataBase.permissoes.findByPk(id)
    return permissoes
  }
  async editar (dto){
    const permissoes = await dataBase.permissoes.findOne({
        where:{
            id: dto.id
        }
    })

    if(!permissoes){
        throw new Error("Permissao informada nao cadastrada")
    }
    try{
        permissoes.nome = dto.nome,
        permissoes.descricao = dto
        await permissoes.save()
        return await permissoes.reload()
    }catch(error){
        throw new Error(error.message)
    }
  }
  async deletar(id){
    const permissoes = await dataBase.permissoes.findOne({
        where:{
            id: id

        }
    })
    if(!permissoes){
        throw new Error("Permissao nao cadastrada")
    }
    try{
        await dataBase.permissoes.destroy({
            where:{
                id:id
            }
        })
    }catch(error){
        throw new Error(error.message)
    }
  }
}

module.exports = PermissaoService;