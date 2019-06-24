export default {
    name: 'TheAppHeader',
    template: `
            <header>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item">
                    <img src="imgs/app-logo.png" width="75" height="50">
                    </a>

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
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
                <!-- <el-menu
                :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="horizontal"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                <el-menu-item index="1">
                <i class="el-icon-s-home"></i>
                         <router-link class="header-nav" exact to="/">Home</router-link>
                         </el-menu-item>
                    
                         <el-menu-item index="2">
                         <i class="el-icon-message"></i>
                         <router-link class="header-nav" to="/imail">iMail</router-link>
                         </el-menu-item>

                         <el-menu-item index="3">
                         <i class="el-icon-notebook-1"></i>
                        <router-link class="header-nav" to="/inote">iNote</router-link>
                        </el-menu-item>

                         <el-menu-item index="4">
                        <router-link class="header-nav" to="/book">Book</router-link>
                        </el-menu-item>
                        </el-menu>
                         -->
            </header>    
    `,
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '2',
        }
    },
    components:{
        
    }
}