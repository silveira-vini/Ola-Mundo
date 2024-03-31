function tempo() {
    this.segundo = 0

    setInterval(() => {
        this.segundo++
        console.log(this.segundo)
    }, 1000)
}

new tempo