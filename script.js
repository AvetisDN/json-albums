const tbody = document.querySelector('#album-table > tbody')

fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(json => {

        json.forEach((album, index) => {
            let tr = document.createElement('tr')

            let tdId = document.createElement('td')
            let tdTitle = document.createElement('td')
            let tdUsername = document.createElement('td')
            let tdEmail = document.createElement('td')

            tdId.textContent = album.id
            tdTitle.textContent = album.title
            tdUsername.textContent = album.userId
            tdEmail.textContent = album.userId

            tr.appendChild(tdId)
            tr.appendChild(tdTitle)
            tr.appendChild(tdUsername)
            tr.appendChild(tdEmail)

            tbody.appendChild(tr)

        })
    
        $('#album-table').DataTable();      

    })
