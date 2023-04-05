<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <table>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>xxx</td>
                    <td>adasdasadadasd</td>
                    <td>lorem</td>
                    <td>@mdo</td>
                    <td>xxx</td>
                    <td>adasdasadadasd</td>
                    <td>lorem</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>xxx</td>
                    <td>adasdasadadasd</td>
                    <td>lorem</td>
                    <td>@mdo</td>
                    <td>xxx</td>
                    <td>adasdasadadasd</td>
                    <td>lorem</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {
    flex: 15;
    background: rgb(246, 247, 248);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0% 5% 0% 5%;
    overflow: hidden;
}

table {
    text-align: left;
    overflow: auto;
}

td,
th {
    min-width: 100px;
    overflow: hidden;
}
</style>