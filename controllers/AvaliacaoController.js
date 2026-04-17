import Avaliacao from "../models/Avaliacao.js";

const AvaliacaoController = {
    create: async (req, res) => {
        try {
            const avaliacao = await Avaliacao.create(req.body);
            res.status(201).json(avaliacao);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    findAll: async (req, res) => {
        try {
            const avaliacoes = await Avaliacao.findAll();
            if (avaliacoes.length === 0) {
                throw new Error('Nenhuma avaliação encontrada');
            }
            res.status(200).json(avaliacoes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    findById: async (req, res) => {
        try {
            const avaliacao = await Avaliacao.findByPk(req.params.id);
            if (avaliacao) {
                res.status(200).json(avaliacao);
            }
            else {
                res.status(404).json({ error: 'Avaliação não encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}
export default AvaliacaoController;