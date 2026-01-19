const formsp = document.getElementById('form-survey-perokok')

let result = []
if (window.localStorage.getItem('survey-result')) {
    result = JSON.parse(window.localStorage.getItem('survey-result'))
}

formsp.addEventListener('submit',
    e => {
        e.preventDefault()
        const formData = new FormData(formsp)
        const data = Object.fromEntries(formData.entries())
        result.push(data)
        data.cigarBrand = formData.getAll('cigarBrand')
        window.localStorage.setItem('survey-result', JSON.stringify(result))
        window.location.href = 'result.html'
    }
)