const path = require('path')
const fs = require('fs/promises');
const { response } = require('express');

function getData(connection, query) {
    return new Promise((resolve, reject) => {
        connection.query(query, (error, result) => {
            if (error) {
                console.log('Error in getData:', error.message);
                reject(error);
            } else {
                const data = result;
                // console.log('Data from getData:', data);
                resolve(data);
            }
        });
    });
}

// home --> contains blogs/cards
const home = async (req, res) => {

    try {

        const connection = req.conn
        const medicinesQuery = `SELECT Id, drugName FROM Medicines`

        const medicines = await getData(connection, medicinesQuery)

        await Promise.all(medicines.map(async (medicine) => {

            const drugImageName = medicine.drugName

            const imagePath = path.join(__dirname, '/public/images/drugs/', drugImageName + '.png')
            const pathSegm = path.normalize(imagePath).split(path.sep)

            const controller = pathSegm.indexOf('controller')

            if (controller !== -1) {
                pathSegm.splice(controller, 1)
            }

            const newImgPath = pathSegm.join(path.sep)

            try {

                const imgBinaryData = await fs.readFile(newImgPath, { encoding: 'base64' })
                medicine.drugImage = imgBinaryData
            } catch (error) {

                console.log(error.message)
            }
        }))


        res.status(200).json({ medicines: medicines })


    } catch (error) {

        console.log(error.message)
    }
}


// send email 
const sendEmail = (req, res) => {

    const { name, email, message } = req.body
}

module.exports = {
    home, sendEmail
}