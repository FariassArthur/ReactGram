const multer = require("multer"); //upload de arquivos
const path = require("path");

// Destination to store image
const imageStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        let folder = "";

        if(req.baseUrl.includes("users")) {
            folder = "users"
        } else if(req.baseUrl.includes("photos")) {
            folder = "photos"
        }

        cb(null, `uploads/${folder}`); //configura o destino da imagem
    },
    filename: (req, file, cb) => {

        cb(null, Date.now() + path.extname(file.originalname)); //8u8y8y8y8ysfgd.jpeg

    }
})

const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(png|jpg)$/)) {
            //upload only pgn and jpg formats
            return cb(new Error("Por favor, envie apenas pgn ou jpg!"));

        }
        cb(undefined, true)
    }
})

module.exports = {imageUpload};