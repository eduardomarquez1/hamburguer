import { Model, DataTypes } from 'sequelize';
import sequelize from "./Database.js";

export default class Avaliacao extends Model {
    static associate (models){
        Avaliacao.belongsTo(models.Pedido,{
            foreignKey: 'pedido_id',
            as: 'pedidos'
        })
    }
}

Avaliacao.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pedido_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nota: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                min: 1,
                max: 5,
            }
        }
    },
    {
        sequelize,
        modelName: 'Avaliacao',
        tableName: 'avaliacoes',
        timestamps: false,
        paranoid: true,    // ativa soft delete
    }
);