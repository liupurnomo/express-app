const express=require('express')
const routers=express.Router();
require('./connection');
const Product=require('./Product');
const multer=require('multer')


// routers.get('/', (req, res) => res.send('ini halaman depan web!'))

// routers.get('/greeting', (req, res) => res.send('Hello STMIK AB!'))

// routers.get('/post/:id',(req, res)=>{
//     res.write(`barang ${req.params.id}`)
//     res.end()
// })

// routers.get('/home',(req, res)=>{
//     const page=req.query.page?req.query.page:1
//     res.write(`NAMA :${page}\n`)
//     if (req.query.NIM) {
//         res.write(`NIM ${req.query.NIM}`)
//     } else {
//         res.write(`jika tidak ada NIM ke ${1+1}`)
//     }
//     res.end()
// })


// ===================> menampilkan list Produck
routers.get('/products', async(req,res)=>{
    const products = await Product.find()
    if (products.length>0){
        res.send({
            status: 'success',
            message: 'list produk ditemukan',
            data: products
        })
    }else{
        res.send({
            status: 'success',
            message: 'daftar peroduk tidak tersedia',
        })
    }
})


// ====================> menampilkan single produk
routers.get('/product/:id', async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.send({
            status: 'success',
            message: 'single product ditemukan',
            data: product
        })
    } else {
        res.send({
            status: 'warning',
            message: 'Produk tidak ditemukan!'
        })
    }
})

// =============== menambahkan data produk
routers.post('/product', multer().none(), async (req,res) => {
    const {
        name,
        price,
        stock,
        status
    } = req.body
    try {
        const product = await Product.create({
            name: name,
            price: price,
            stock: stock,
            status: status
        })
        if (product) {
            res.send({
                status: 'success',
                message: 'Berhasil menambahkan produk!',
                data: product
            })
        } else {
            res.send({
                status: 'warning',
                message: 'Gagal menambahkan produk',
            })
        }
    } catch (error) {
        res.send({
            status: 'error',
            message: error.message,
        })
    }
})

// =============== merubah data produk
routers.put('/product/:id', multer().none(), async (req, res) => {
    const {
        name,
        price,
        stock,
        status
    } = req.body
    try {
        const result = await Product.updateOne({
            _id: req.params.id
        }, {
            name: '',
            price: price,
            stock: stock,
            status: status
        }, {
            runValidators: true
        })
        if (result.ok == 1) {
            res.send({
                status: 'success',
                message: 'berhasil mengubah produk',
                data: result
            })
        } else {
            res.send({
                status: 'warning',
                message: 'gagal mengubah produk!',
                data: result
            })
        }
    } catch (error) {
        res.send({
            status: 'error',
            message: error.message,
        })
    }
})

// ================> Hapus data
routers.delete('/product/:id', async (req, res) => {
    try {
        const result = await Product.deleteOne({
            _id: req.params.id
        })
        if (result.deletedCount == 1) {
            res.send({
                status: 'success',
                message: 'Berhasil menghapus data produk!',
                data: result
            })
        } else {
            res.send({
                status: 'warning',
                message: 'Gagal menghapus data',
                data: result
            })
        }
    } catch (error) {
        res.send({
            status: 'error',
            message: error.message,
        })
    }
})

module.exports=routers