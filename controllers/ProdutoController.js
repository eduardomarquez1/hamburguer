import Produto from '../models/Produto.js';

const ProdutoController = {
    criar: async (req, res) => {
        try {
            const produto = await Produto.create(req.body);
            res.status(201).json(produto);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    },

    listar: async (req, res) => {
        try {
            const produtos = await Produto.findAll();
            res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
    },

    obterPorId: async (req, res) => {
        try {
            const produto = await Produto.findByPk(req.params.id);
            if (!produto) {
                return res.status(404).json({ erro: 'Produto não encontrado' });
            }
            res.status(200).json(produto);
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
    },

    atualizar: async (req, res) => {
        try {
            const produto = await Produto.findByPk(req.params.id);
            if (!produto) {
                return res.status(404).json({ erro: 'Produto não encontrado' });
            }
            await produto.update(req.body);
            res.status(200).json(produto);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    },

    deletar: async (req, res) => {
        try {
            const produto = await Produto.findByPk(req.params.id);
            if (!produto) {
                return res.status(404).json({ erro: 'Produto não encontrado' });
            }
            await produto.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
    }
};

export default ProdutoController;