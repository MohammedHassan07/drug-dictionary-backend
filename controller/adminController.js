const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { hashKey, secretKey } = require('../config/config')

// logIn page
const logInPage = (req, res) => {

    res.render('logInAdmin')
}

// author logIn
const logIn = async (req, res) => {

    const { Email, Password } = req.body
    console.log(Email, Password)

    const conn = req.conn
    const checkQuery = `SELECT * FROM Authors WHERE Email = "${Email}"`

    try {

        conn.query(checkQuery, async (error, result) => {

            if (result.length !== 0) {

                const isMatch = await bcrypt.compare(Password, result[0].Password)
                if (isMatch) {

                    const token = jwt.sign(result[0].Name, secretKey)

                    res.cookie('authToken', token, { 'httpOnly': true })
                    res.json({ message: 'success' })
                } else {

                    res.status(400).json({ message: 'Invalid Credentials' })
                }

            } else {

                res.status(404).json({ message: 'Email not found' })
            }


        })


    } catch (error) {

        console.log(error.message)

        res.status(500).json({ message: 'Internal Server Error' })
    }
}

// admin panel
const adminPanel = (req, res) => {

    res.render('admin')
}


// Insert data
const insertData = (req, res) => {

    try {

        const { drugName, iupacName, molecularFomula, Description, mechanism, uses, adverseEffect } = req.body

            // console.log(req.body)

        const connection = req.conn

        const myQuery = 'INSERT INTO Medicines (molecularFomula, IUPAC_NAME, Description, Mechanism, uses, adverse_Effect, drugName) VALUES (?, ?, ?, ?, ?, ?, ?)';

        connection.query(myQuery, [molecularFomula, iupacName, Description, mechanism, uses, adverseEffect, drugName], (error, result) => {

            if (error) console.log(error.message)
            else {

                res.status(200).json({ message: "inserted" })
            }
        })
    } catch (error) {

        console.log(error.message)
    }
}

// get one blog
const getOne = (req, res) => {

    const { blogTitle } = req.body

    const connection = req.conn

    const quey = `SELECT * FROM Blogs WHERE blogTitle = "${blogTitle}"`

    connection.query(quey, (err, result) => {

        if (err) console.log(err.message)
        else {

            console.log(result)
            res.status(200).json({ result: result[0] })
        }
    })
}

// TODO: Implement delete

// create author
const createAuthor = async (req, res) => {

    const connection = req.conn

    try {

        const { Name, Email, password } = req.body

        const checkQuery = `SELECT Email FROM Authors WHERE Email = ?`

        const result = await connection.query(checkQuery, [Email])

        if (result.length !== 0) {

            const hashPass = await bcrypt.hash(password, hashKey)
            const createAuthorQuery = `INSERT INTO Authors (Name, Email, Password) VALUES(?, ?, ?)`

            connection.query(createAuthorQuery, [Name, Email, hashPass], (error, result) => {

                if (error) console.log(error.message)
                else {

                    res.status(201).json({ message: 'Author created' })
                }
            })
        }


    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {

    createAuthor,
    insertData,
    getOne,
    logInPage,
    logIn,
    adminPanel

}