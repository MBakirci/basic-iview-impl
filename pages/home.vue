<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    
    .layout-breadcrumb {
        padding: 10px 15px 0;
    }
    
    .layout-content {
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
        min-height: 100vh;
    }
    
    .layout-content-main {
        padding: 10px;
    }
    
    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    
    .layout-menu-left {
        background: #464c5b;
    }
    
    .layout-header {
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }
    
    .layout-logo-left {
        width: 90%;
        height: 100px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    
    .layout-search-right {
        border-radius: 3px;
        margin: 15px auto;
    }
    
    .layout-ceiling-main a {
        color: #9ba7b5;
    }
    
    .layout-hide-text .layout-text {
        display: none;
    }
    
    .ivu-col {
        transition: width .2s ease-in-out;
    }
    
    .ivu-col-flex-container {
        height: inherit;
    }
    
    .ivu-col-flex-container > div {
        height: inherit;
    }
    
    .layout-menu-left-logo {
        max-width: 100%;
        max-height: 100%;
        margin: 0 auto 10px;
        display: block;
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex" class="ivu-col-flex-container">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu active-key="1" theme="dark" width="auto">
                    <div class="layout-logo-left">
                        <img id="profile-img" class="layout-menu-left-logo" src="../assets/germany-flag.png" />
                    </div>
                    <router-link to="/">
                        <Menu-item key="1">
                            <Icon type="ios-home" :size="iconSize"></Icon>
                            <span class="layout-text">Home</span>
                        </Menu-item>
                    </router-link>
                    <Menu-item key="2">
                        <Icon type="ios-paper-outline" :size="iconSize"></Icon>
                        <span class="layout-text">Invoices</span>
                    </Menu-item>
                    <Menu-item key="3">
                        <Icon type="ios-person-outline" :size="iconSize"></Icon>
                        <span class="layout-text">Owners</span>
                    </Menu-item>
                    <Menu-item key="4">
                        <Icon type="android-car" :size="iconSize"></Icon>
                        <span class="layout-text">Cars</span>
                    </Menu-item>
                    <Menu-item key="5">
                        <Icon type="android-settings" :size="iconSize"></Icon>
                        <span class="layout-text">Admin</span>
                    </Menu-item>
                </Menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <div class="ivu-col-span-xs-17 ">
                        <i-button type="text" @click.native="toggleClick">
                            <Icon type="navicon" size="32"></Icon>
                        </i-button>
                    </div>
                    <div class="ivu-col-span-xs-6">
                        <div class="layout-search-right">
                            <Input v-model="value" placeholder="Search" icon="ios-search" @on-click="handleClick" style="cursor:pointer;"></Input>
                        </div>
                    </div>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item v-for="crumb in crumbs">{{crumb}}</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
                </div>
                <div class="layout-copy">
                    2016-2017 &copy; Fontys ICT S61TA
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    import dashboard from './dashboard'
    export default {
        components: { dashboard },
        data() {
            return {
                spanLeft: 5,
                spanRight: 19
            }
        },
        computed: {
            iconSize() {
                if (this.spanLeft === 5) {
                    return 21;
                }
                return 32;
            },
            crumbs() {
                var crumbCollection = [];
                let parents = this.$route.meta.parent;
                for (var i = 0; i < parents.length; i++) {
                    var matched = this.$router.match(parents[i]);
                    if (matched.meta.breadcrumb != this.$route.meta.breadcrumb) {
                        crumbCollection.push(matched.meta.breadcrumb);
                    }
                }
                crumbCollection.push(this.$route.meta.breadcrumb);
                console.log(crumbCollection);
                return crumbCollection;
            }
        },
        methods: {
            toggleClick() {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            },
            handleClick() {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            }
        }
    }

</script>