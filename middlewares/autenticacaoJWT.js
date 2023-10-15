const jwt = require('jsonwebtoken');

const autenticacaoJWT = (req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({
            msg: 'Token de autorizacao ausente. Acesso nao autorizado.'
        });
    }

    try {
        const decodificado = jwt.verify(token, segredo);
        
        req.user = decodificado.user;
        
        next();
    
    } catch(erro) {
        res.status(401).json({msg: 'Token invalido. Acesso nao autorizado.'});
    }
}

module.exports = autenticacaoJWT;