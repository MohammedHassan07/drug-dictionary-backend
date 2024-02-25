console.log('home.js')


const row = document.getElementById('row')
const detailBox = document.getElementById('drug-detail-box')

row.addEventListener('click', async (e) => {

    const card = e.target.closest('.card')

    if (card) {
        const title = card.querySelector('p').innerText

        console.log('clicked', title)

        // const url = `http://localhost:3000/blog-content?q=${title}`

        // const res = await getData(url)

        // // console.log(typeof res)
        // console.log(res)

        // const drugName = document.getElementById('drug-name')
        // drugName.innerHTML = res.drugName

        // const img = document.getElementById('drug-img').setAttribute('src', `data:image/png;base64, ${res.drugImage}`)
        // const mechanism = document.getElementById('mechanism').innerHTML = res.Mechanism
        // const iupacName = document.getElementById('iupacName').innerHTML = res.IUPAC_Name
        // const molecularFormula = document.getElementById('molecular-formula').innerHTML = res.molecularFomula
        // const uses = document.getElementById('uses').innerHTML = res.Uses
        // const adverseEffect = document.getElementById('adverse-effect').innerHTML = res.adverse_Effect
        // const description = document.getElementById('description').innerHTML = res.Description

        // detailBox.style.display = 'block'
        // const closeBox = document.getElementById('close-box').addEventListener('click', (e) => {

        //     e.preventDefault()

        //     console.log('closed')
        //     detailBox.style.display = 'none'
        // })

        // New for drug
        
        window.open(`http://localhost:3000/blog-content?q=${title}`, '_blank')
    }
})


const drugName = document.getElementById('author')

drugName.addEventListener('input', async (e) => {

    row.innerHTML = ''
    const drugName = e.data

    if (drugName !== null) {

        try {

            // const medicines = detailBox.dataset.medicines
            const medicines = detailBox.getAttribute('medicines-data')  // needs to fix the medicine is undefined
            
            console.log(medicines)
            console.log(typeof medicines)
            
            medicines.map((medicine) => {
                
                if (medicine.drugName === drugName.trim().toLowerCase()) {
                    
                    const card = document.createElement('div')
                    card.classList.add('card')

                    card.innerHTML = `
    
                <div class="drug-name">
                    <p>${element.drugName}</p>
                </div>
    
                <div>
                    <img id="card-img" src="data: image/png; base64, ${element.drugImage}" alt="Images">
                </div>
     
            `
                    row.appendChild(card)

                }
            })
        } catch (error) {

            console.log(error.message)
        }
    }
    // const url = `http://localhost:3000/author/blog-content?author=${drugName}`
    // const res = await getData(url)


    // res.response.forEach(element => {

    // const card = document.createElement('div')
    // card.classList.add('card')

    // card.innerHTML = `

    //     <div class="drug-name">
    //         <p>${element.drugName}</p>
    //     </div>

    //     <div>
    //         <img id="card-img" src="data: image/png; base64, ${element.drugImage}" alt="Images">
    //     </div>

    // `
    // row.appendChild(card)

    // })
})

// drug-detail-box

async function getData(url) {


    const response = await fetch(url, {

        method: 'GET',

    })

    const res = await response.json()
    return res
}
