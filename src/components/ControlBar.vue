<template>
    <div class="container-controlbar">

        <span class="table-name">
            Customer
        </span>

        <div class="buttons-controlbar">
            <a href="">Search</a>
            <a href="">New</a>
            <a href="">Delete</a>
            <a href="">Home</a>
            <a href="">New Document</a>
            <a href="">Customer</a>
            <a href="">Prices</a>
            <a href="">Report</a>
            <a href="">Actions</a>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container-controlbar {
    flex: 1;
    background: rgb(246, 247, 248);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0% 5% 0% 5%;
    display: flex;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
}

.table-name {
    flex: 1;
    height: 48px;
    line-height: 60px;
}

.buttons-controlbar {
    flex: 10;
    display: flex;
    justify-content: space-around;
    height: 48px;
    line-height: 60px;
}
</style>