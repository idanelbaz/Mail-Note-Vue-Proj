export default {
    name: 'TheAppHeader',
    template: `
            <header>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item">
                    <img src="imgs/app-logo.png" width="75" height="50">
                    </a>

                    <a role="button" class="navbar-burger burger " aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                    <a class="navbar-item">
                     <router-link class="header-nav" exact to="/">Home</router-link>
                    </a>

                    <a class="navbar-item">
                    <router-link class="header-nav" to="/inote">iNote</router-link>
                    </a>
                    <a class="navbar-item">
                    <router-link class="header-nav" to="/imail">iMail</router-link>
                    </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>    
    `,
    data() {
        return {

        }
    },
}