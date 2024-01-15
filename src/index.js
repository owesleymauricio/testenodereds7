module.exports = function (RED) {
    function MeuNodeSimples(config) {
        RED.nodes.createNode(this, config);

        // Função chamada quando uma mensagem é recebida
        this.on('input', function (msg) {
            // Exibe a mensagem no console
            console.log('Mensagem Recebida:', msg.payload);

            // Envie a mensagem para a próxima etapa no fluxo
            this.send(msg);
        });
    }

    RED.nodes.registerType('meu-node-simples', MeuNodeSimples);
};
