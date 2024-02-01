// document.addEventListener('DOMContentLoaded', () => {
//     const changelangbtns = document.querySelectorAll('.change-lang')

//     async function geterateUrl(langcode) {
//         const fullurl = window.location.href
//         let arr = fullurl.split('/')

//         if (arr[3].length == 2) {
//             arr[3] = langcode
//             return arr.join('/')
//         } else {
//             arr.splice(3, 0, `${langcode}`)
//             return arr.join('/')
//         }
//     }

//     changelangbtns.forEach(btn => {
//         btn.addEventListener(onclick="CPABuildLock()" , async (e) => {
//             e.preventDefault()
//             console.log(e.target)
//             const langcode = btn.dataset.lang
//             const result = await geterateUrl(langcode)
//             window.open(result, "_self")
//         })
//     })
// })

