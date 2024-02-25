const path = require('path')
const fs = require('fs/promises')

const blogContent = (req, res) => {

    const conn = req.conn
    const drugName = req.query.q
    // console.log(drugName)

    const query = `SELECT * FROM Medicines WHERE drugName = "${drugName}"`;

    conn.query(query, async (error, result) => {

        if (error) console.log(error.message)

        else {
            const medicine = result[0]

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

            // console.log(medicine)
            res.status(200).json({ medicine })
        }
    })
}
module.exports = { blogContent }