const fs = require('fs')


const dirFolder = './data'
if (!fs.existsSync(dirFolder)) {
    fs.mkdirSync(dirFolder)
    console.log('file missing , generated on',dirFolder);
}

const dirFile = './data/Contacts.json'
if (!fs.existsSync(dirFile)) {
    fs.writeFileSync(dirFile , '[]' , 'utf-8')
    console.log('file missing , generated on',dirFile);
}

const Contacts = (datas) => {
    if(datas != null && datas != "") {
        const data = datas
        const readFile = fs.readFileSync('data/contacts.json' , 'utf-8')
        const JSONS = JSON.parse(readFile)
        
        JSONS.push(data)
    
        fs.writeFileSync('data/contacts.json' , JSON.stringify(JSONS))
        console.log("Data Telah Di Tambahkan!");
    } else {
        console.log("Silahkan Isi Data Dengan Lengkap!");
    }
}

module.exports = {
    Contacts,
}