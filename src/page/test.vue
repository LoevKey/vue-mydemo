<template>
    <div id="Test">
        <p>bookname:<input v-model="bookname"></p>
        <p>price:<input v-model="price"></p>
        <p>author:<input v-model="author"></p>
        <p>shortinfo:<input v-model="shortinfo"></p>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            bookname: 'qrs',
            price: '40',
            author: 'lc',
            shortinfo: 'asdasd'
        }
    }
}
</script>
