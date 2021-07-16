const level = document.querySelectorAll(".ranks")
const circles = document.querySelectorAll('.circle')
const progress = document.querySelector('.progress')

level.forEach(el => {
    el.addEventListener('click', () => {
        progress.style.backgroundColor = 'lightblue';
        circles.forEach(el => {
            el.classList.add('active')

        })
        select(el)       
    })
})

function select(element) {
    element.classList.remove('activeRank')
    element.classList.add('activeRank')

}