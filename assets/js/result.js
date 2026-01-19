    const data = JSON.parse(window.localStorage.getItem('survey-result'))
    const tbody = document.querySelector('table tbody')
    
    data.forEach(
        result => {
            const tr = document.createElement('tr')
            const fullname = document.createElement('td')
            fullname.textContent = result.fullname
            tr.appendChild(fullname)
            const age = document.createElement('td')
            age.textContent = result.age
            tr.appendChild(age)
            const gender = document.createElement('td')
            gender.textContent = result.gender
            tr.appendChild(gender)
            const isSmoke = document.createElement('td')
            isSmoke.textContent = result.isSmoke
            tr.appendChild(isSmoke)
            const cigarBrand = document.createElement('td')
            cigarBrand.textContent = result['cigarBrand']
            tr.appendChild(cigarBrand)
    
            tbody.appendChild(tr)
        }
    )