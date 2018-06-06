const wiki_link = 'https://en.wikipedia.org/wiki'
const randomEndpoint = '/Special:Random'

const searchTerm = document.querySelector('.searchTerm')
const searchButton = document.querySelector('.searchButton')
const randomButton = document.querySelector('.randomButton')
const output = document.querySelector('.output')

function wikiSearch(){
    const api_url= `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm.value}&format=json&callback=?`

    $.ajax({
        url: api_url,
        type: "GET",
        dataType: "json",
        success: (data)=>{
            console.log(data)
            //data[1] is the titles
            //data[2] is the desc
            //data[3] is the links
            for(let i=0; i<data[1].length; i++){
                output.innerHTML +=`
                <li>
                <a href="${data[3][i]}">${data[1][i]}</a>
                <p>${data[2][i]}</p>
                </li>`
                console.log(i)
            }
        },
        error: (error)=>{
            console.log("There was an error")
        }
    })
}

searchButton.addEventListener('click', wikiSearch)
randomButton.addEventListener('click', function(e){
    window.open(`${wiki_link}${randomEndpoint}`)
})