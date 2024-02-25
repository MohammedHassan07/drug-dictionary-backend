// insert data 
const btnSubmit = document.getElementById('btn-submit')

btnSubmit.addEventListener('click', async (e) => {

    e.preventDefault()

    const drugName = document.getElementById('drug-name').value
    // implement image upload
    const iupacName = document.getElementById('iupac-name').value
    const molecularFormula = document.getElementById('molecular-formula').value
    const Description = document.getElementById('description').value
    const mechanism = document.getElementById('mechanism').value
    const uses = document.getElementById('uses').value
    const adverseEffect = document.getElementById('adverse-effect').value

    const result = await sendData(drugName, iupacName, molecularFormula, Description, mechanism, uses, adverseEffect, 'insert-data')
    console.log(result)

    if (result.message === 'inserted') {

        document.getElementById('drug-name').value = ''
        document.getElementById('iupac-name').value = ''
        document.getElementById('molecular-formula').value = ''
        document.getElementById('description').value = ''
        document.getElementById('mechanism').value = ''
        document.getElementById('uses').value = ''
        document.getElementById('adverse-effect').value = ''
    }
})

// check title
const newTitle = document.getElementById('new-title')
const newArticle = document.getElementById('new-article')
const newImg = document.getElementById('new-img-url')
const oldTitle = document.getElementById('check-title')

// const btnCheck = document.getElementById('btn-check')
// btnCheck.addEventListener('click', async (e) => {

//     e.preventDefault()

//     const tit = oldTitle.value

//     const result = await sendData(tit, '', '', 'get-one-blog')
//     const img = document.getElementById('preview-img')

//     newTitle.innerText = result.blogTitle
//     img.setAttribute('src', `${result.ImgURL}`)
//     newArticle.innerText = result.BlogContent

// })

// // update data 
// const btnUpdate = document.getElementById('btn-update')
// btnUpdate.addEventListener('click', (e) => {

//     e.preventDefault()

//     const oldTitle = oldTitle.value
//     const newTitle = newTitle.value
//     const newImg = newImg.value
//     const newArticle = newArticle.value

//     console.log(newTitle, "\n", newImg, "\n", newArticle)
//     updateData(old, title, img, article, 'update-data')
// })


// function to send data
const sendData = async (drugName, iupacName, molecularFormula, Description, mechanism, uses, adverseEffect, dataType) => {

    const url = `http://localhost:3000/admin/${dataType}`

    blogData = { drugName: drugName, iupacName: iupacName, molecularFomula: molecularFormula, Description: Description, mechanism: mechanism, uses: uses, adverseEffect: adverseEffect, }

    // console.log(blogData)

    const response = await fetch(url, {

        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData)
    })

    const res = await response.json()

    return res
}

// // update
// const updateData = async (old, title, imgUrl, article, dataType) => {

//     const url = `http://localhost:3000/admin/${dataType}`
//     blogData = { oldTitle: old, blogTitle: title, ImgURL: imgUrl, blogContent: article }
//     // console.log(blogData)

//     const response = await fetch(url, {

//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(blogData)
//     })

//     const res = await response.json()
//     const result = res.result
//     return result
// }