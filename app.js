const express = require('express');
const app = express();
const db = require('./dataBase').getInstance();
const http = require('http');
const server = http.createServer(app);
const socketIO = require('socket.io')(server)
const {
    userRouter,
    productRouter,
    authRouter,
    adminRouter,
    commentRouter,
    productLikeRouter,
    cartRouter,
    purchaseRouter,
    statusRouter,
    productSectionRouter,
    productPhotoRouter,
    productSizeRouter,
    productTypeRouter,
    genderRouter,
    userRoleRouter,
    passwordRouter
} = require('./router');
global.appRoot = __dirname;
db.setModels();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/comments', commentRouter);
app.use('/productLikes', productLikeRouter)
app.use('/products', productRouter)
app.use('/cart', cartRouter);
app.use('/purchases', purchaseRouter);
app.use('/statuses', statusRouter);
app.use('/productSections', productSectionRouter);
app.use('/productPhotos', productPhotoRouter);
app.use('/productTypes', productTypeRouter);
app.use('/productSizes', productSizeRouter);
app.use('/genders', genderRouter);
app.use('/userRoles', userRoleRouter);
app.use('/password', passwordRouter);

socketIO.on('connect', async socket => {
    console.log('connected');
    socket.on('welcome', async data => {
        console.log(data);
    })

})

server.listen(3000, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('Listen 3000...');
    }
});
