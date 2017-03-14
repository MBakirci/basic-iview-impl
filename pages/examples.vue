<style scoped>
nav { margin-bottom: 40px; }
ul { display: flex; flex-wrap: wrap; }
li { display: inline-block; }
li + li { border-left: solid 1px #bbb; padding-left: 10px; margin-left: 10px; }
.container{ padding: 10px 40px; }
.v-link-active { color: #bbb; }
</style>


<template>
    <div class="container">
        <nav>
            <ul>
                <li><router-link to="/examples/affix">Affix</router-link></li>
                <li><router-link to="/examples/grid">Grid</router-link></li>
                <li><router-link to="/examples/button">Button</router-link></li>
                <li><router-link to="/examples/input">Input</router-link></li>
                <li><router-link to="/examples/radio">Radio</router-link></li>
                <li><router-link to="/examples/checkbox">Checkbox</router-link></li>
                <li><router-link to="/examples/steps">Steps</router-link></li>
                <li><router-link to="/examples/timeline">Timeline</router-link></li>
                <li><router-link to="/examples/switch">Switch</router-link></li>
                <li><router-link to="/examples/alert">Alert</router-link></li>
                <li><router-link to="/examples/badge">Badge</router-link></li>
                <li><router-link to="/examples/tag">Tag</router-link></li>
                <li><router-link to="/examples/input-number">InputNumber</router-link></li>
                <li><router-link to="/examples/progress">Progress</router-link></li>
                <li><router-link to="/examples/upload">Upload</router-link></li>
                <li><router-link to="/examples/collapse">Collapse</router-link></li>
                <li><router-link to="/examples/carousel">Carousel</router-link></li>
                <li><router-link to="/examples/card">Card</router-link></li>
                <li><router-link to="/examples/tree">Tree</router-link></li>
                <li><router-link to="/examples/rate">Rate</router-link></li>
                <li><router-link to="/examples/circle">Circle</router-link></li>
                <li><router-link to="/examples/tabs">Tabs</router-link></li>
                <li><router-link to="/examples/tooltip">Tooltip</router-link></li>
                <li><router-link to="/examples/poptip">Poptip</router-link></li>
                <li><router-link to="/examples/slider">Slider</router-link></li>
                <li><router-link to="/examples/dropdown">Dropdown</router-link></li>
                <li><router-link to="/examples/breadcrumb">Breadcrumb</router-link></li>
                <li><router-link to="/examples/menu">Menu</router-link></li>
                <li><router-link to="/examples/spin">Spin</router-link></li>
                <li><router-link to="/examples/cascader">Cascader</router-link></li>
                <li><router-link to="/examples/select">Select</router-link></li>
                <li><router-link to="/examples/backtop">Backtop</router-link></li>
                <li><router-link to="/examples/page">Page</router-link></li>
                <li><router-link to="/examples/transfer">Transfer</router-link></li>
                <li><router-link to="/examples/date">Date</router-link></li>
                <li><router-link to="/examples/form">Form</router-link></li>
                <li><router-link to="/examples/table">Table</router-link></li>
                <li><router-link to="/examples/loading-bar">LoadingBar</router-link></li>
                <li><router-link to="/examples/modal">Modal</router-link></li>
                <li><router-link to="/examples/message">Message</router-link></li>
                <li><router-link to="/examples/notice">Notice</router-link></li>
            </ul>
        </nav>
            <router-view></router-view>

    </div>
</template>

<script>
  
</script>