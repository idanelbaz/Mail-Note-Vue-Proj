export default {
    template: `
    <section class="home-page page">
        <h1 class="home-header">iSUS APP.</h1>
        <div class="home-slogan"><span class="slogan-text">Notes And Mails For Daylily Usage</span></div>
        <div class="icons-div">
        <router-link class="header-nav" to="/inote">
        <div class="inote-logo-home"><img src="imgs/inote-logo.png"/></div>
        </router-link>
        <router-link class="header-nav" to="/imail">
        <div class="imail-logo"><img src="imgs/logo.png"/></div>
    </router-link>
        </div>
    </section>
    `
}