<template>
    <div class="container-subnav">
        <span class="company-name">
            Sievers-Group
        </span>

        <div class="buttons-subnav">
            <div class="dropdown">
                <a href="#">Sales</a>
            </div>
            <div class="dropdown">
                <a href="#">Purchasing</a>
            </div>
            <div class="dropdown">
                <a href="#">Inventory</a>
            </div>
            <div class="dropdown">
                <a href="#">Posted Documents</a>
            </div>
            <div class="dropdown">
                <a href="#">Shopify</a>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container-subnav {
    flex: 1;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0% 5% 0% 5%;
    display: flex;
    flex-direction: row;
}

.company-name {
    flex: 1;
    color: rgb(33, 33, 33);
    font-size: 15pt;
    font-weight: normal;
    cursor: pointer;
    height: 48px;
    line-height: 60px;
}

.buttons-subnav {
    flex: 10;
    display: flex;
    justify-content: space-around;
    height: 48px;
    line-height: 60px;
}
</style>