const mongoose = require('mongoose');

const CepSchema = new mongoose.Schema(
    {
        numbers: {
            type: String,
            required: [true, 'Por favor, adicione a sequência que corresponde ao CEP'],
            maxlength: [6, 'o CEP não pode conter mais do que 6 dígitos']
        },
        city: {
            type: String,
            required: [true, 'Por favor, adicione a cidade']
        }
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.models.Cep || mongoose.model('Cep', CepSchema, 'ceps');
