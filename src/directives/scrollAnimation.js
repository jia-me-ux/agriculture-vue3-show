const scrollAnimation = {
    mounted: (el) => {
        el.classList.add('before-enter')

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    el.classList.add('enter')
                    observer.unobserve(el)
                }
            })
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        })

        observer.observe(el)
    }
}

export default scrollAnimation
