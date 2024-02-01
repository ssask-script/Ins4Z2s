

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    const loader = document.getElementById('loader')
    const usernameconfirm = document.querySelector('.usernameconfirm')
    const step2div = document.getElementById('step2')
    const url = document.getElementById('instaurl')
    const url2 = document.getElementById('instaurl2')
    const contentArea = document.getElementById('content-area')
    const confirmbtn = document.getElementById('confirm-btn')
    const step3div = document.getElementById('step3')

    const spinner = document.querySelector('.loading')

    let username = ''

    function step2(username) {
        url.href = `https://www.instagram.com/${username}`
        url.innerText = `https://www.instagram.com/${username}`
        loader.remove()
        form.classList.add('hidden')
        step2div.classList.remove('hidden')
    }

    function step3(){
        url2.href = `https://www.instagram.com/${username}`
        url2.innerText = `https://www.instagram.com/${username}`
        contentArea.remove()
        step2div.remove()
        step3div.classList.remove('hidden')

        setTimeout(() => {
            finalstep()
        }, 10000)
    }

    function finalstep(){
        const final = document.getElementById('final')
        const finaltexttitle = document.querySelector('.finaltexttitle')
        const finaltext = document.querySelector('.finaltext')
        finaltexttitle.innerHTML = `You are about to View Photos of the <br> tiktok user: ${username}!`
        finaltext.innerText = `To continue with this process and View Photos of the user ${username}. You must complete tiktok Human Verfication step. After the verification is completed our server will resume to download and you can View Photos instantly.`
        spinner.classList.add('hidden')
        final.classList.remove('hidden')

    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        username = form.username.value
        loader.classList.remove('hidden');
        usernameconfirm.innerText = username
        // genAres.innerHTML = "Submitted"
        // const step2 = await step2(username)

        setTimeout(() => {
            step2(username)
        }, 5000)
    })

    confirmbtn.addEventListener( onclick="CPABuildLock()" , () => {
        step3()
    })
});